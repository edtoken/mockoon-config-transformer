const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const {
  tmpSamplesCIResultsFile,
  tmpSamplesProcessDir,
  mockSamplesDir,
  promiseQ,
  runCli
} = require('./js-utils');

const samplesList = fs.existsSync(mockSamplesDir)
  ? fs.readdirSync(mockSamplesDir)
  : [];

const ciResultsBaseData = fs.existsSync(tmpSamplesCIResultsFile)
  ? JSON.parse(fs.readFileSync(tmpSamplesCIResultsFile, 'utf8'))
  : [];

const ciResultsData = [];

const maxTestItems = process.env.RUN_ALL_SAMPLES_TEST ? samplesList.length : 10;

const override = false;
const verbose = false;

const samples = samplesList
  .map((sampleFileName) => {
    const sampleName = sampleFileName.replace('.json', '');
    const tmpOutputDirPrefix = sampleName;

    const sampleFile = path.normalize(
      path.join(mockSamplesDir, sampleFileName)
    );
    const tmpOutputSampleRootDir = path.normalize(
      path.join(tmpSamplesProcessDir, tmpOutputDirPrefix)
    );

    return {
      sampleName,
      sampleFile,
      tmpOutputSampleRootDir
    };
  })
  .filter(Boolean)
  .slice(0, maxTestItems);

const total = samples.length;
let counter = samples.length;

promiseQ(
  20,
  samples.map(
    ({
      sampleName,
      sampleFile,
      tmpOutputDirPrefix,
      tmpOutputSampleRootDir
    }) => {
      return async () => {
        console.log(`Starting  ${total - counter} of ${total}`, sampleName);

        const buildUID = uuidv4();

        const extractJSONDir = path.normalize(
          path.join(tmpOutputSampleRootDir, `./extract/json/${buildUID}`)
        );
        const bundleJSONFile = path.normalize(
          path.join(tmpOutputSampleRootDir, `./bundle/json/${buildUID}.json`)
        );
        const extractJSONIndexFile = path.normalize(
          path.join(extractJSONDir, 'index.json')
        );

        if (!override && fs.existsSync(tmpOutputSampleRootDir)) {
          counter -= 1;
          console.log(`Skip`, sampleName);
          return;
        }

        ciResultsData.push({
          sampleName,
          sampleFile,
          bundleJSONFile,
          extractJSONDir,
          extractJSONIndexFile
        });

        try {
          counter -= 1;
          fs.rmSync(tmpOutputSampleRootDir, { recursive: true, force: true });

          // extract json
          const extractArgs = [
            'extract',
            `-i ${sampleFile}`,
            `-o ${extractJSONDir}`,
            '-f',
            '-t json'
          ];
          const extractJSON = await runCli(extractArgs);

          if (extractJSON.stderr) {
            console.log(extractJSON);
            throw new Error(`Failed to extract ${sampleName}`);
          }
          if (verbose) {
            console.log('extractJSON', extractJSON);
          }

          // bundle json
          const bundleJsonArgs = [
            'bundle',
            `-i ${extractJSONIndexFile}`,
            `-o ${bundleJSONFile}`,
            '-f'
          ];

          const bundleJSON = await runCli(bundleJsonArgs);

          if (bundleJSON.stderr) {
            console.log(bundleJSON);
            throw new Error(`Failed to bundle JSON ${sampleName}`);
          }
          if (verbose) {
            console.log('bundleJSON', bundleJSON);
          }

          console.log(`Completed`, sampleName);
        } catch (err) {
          counter -= 1;
          console.log(`Processed [FAIL]`, sampleName);
        }
      };
    }
  )
).then(() => {
  const processedNames = ciResultsData.map((p) => p.sampleName);

  const finalData = [
    ...ciResultsBaseData.filter((p) => !processedNames.includes(p.sampleName)),
    ...ciResultsData
  ];

  fs.writeFileSync(tmpSamplesCIResultsFile, JSON.stringify(finalData, null, 2));
  console.log('DONE, processed', total);
});
