import * as fs from 'fs';

const processedSamplesResults = require('../../.tmp/samples-process/samples-results.json');

type SampleItem = {
  sampleName: string;
  sampleFile: string;
  extractJSONDir: string;
  extractJSONIndexFile: string;
  bundleJSONFile: string;
};

processedSamplesResults.forEach(
  ({ sampleName, sampleFile, bundleJSONFile }: SampleItem) => {
    const sampleEnvironment = JSON.parse(fs.readFileSync(sampleFile, 'utf8'));

    const bundledJSONEnvironment = JSON.parse(
      fs.readFileSync(bundleJSONFile, 'utf8')
    );

    test(`${sampleName} bundled should be equal to original environment`, () => {
      expect(sampleEnvironment).toEqual(bundledJSONEnvironment);
    });
  }
);
