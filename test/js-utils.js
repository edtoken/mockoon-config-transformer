const { v4: uuidv4 } = require('uuid');

const path = require('path');
const exec = require('child_process').exec;
const pkg = require('../package.json');

const mockSamplesDir = path.normalize(
  path.join(__dirname, '../vendor/mock-samples')
);

const mockIgnoreFile = path.normalize(
  path.join(__dirname, '../vendor/mock-samples.ignore.json')
);

const tmpSamplesProcessDir = path.normalize(
  path.join(__dirname, '../.tmp/samples-process')
);

const tmpSamplesCIResultsFile = path.normalize(
  path.join(tmpSamplesProcessDir, `./samples-results.json`)
);

const makeTMPDirPath = (prefix) =>
  `./.tmp/${prefix ? prefix + '/' : ''}${uuidv4()}`;

const promiseQ = (size, tasks) => {
  let p = Promise.resolve();
  for (let i = 0; i < tasks.length; i += size) {
    const chunk = tasks.slice(i, i + size);
    p = p.then(() => {
      return Promise.all(chunk.map((c) => c()));
    });
  }
  return p;
};

const cwd = process.cwd();
const cliFile = path.normalize(path.join(cwd, pkg.main));

const verbose = process.argv.some(
  (s) => s.includes('verbose') || s.includes('worker')
);

const runCli = (args) => {
  return new Promise((resolve) => {
    const command = `node ${cliFile} ${(args || [])
      .map((s) => s.trim())
      .join(' ')
      .trim()}`;

    exec(command, { cwd }, (error, stdout, stderr) => {
      if (verbose) {
        console.debug('>>>>> command <<<<<');
        console.debug(command);
        console.debug('>>>>> stdout <<<<<');
        console.debug(stdout);
        console.debug('>>>>> error <<<<<');
        console.debug(error);
        console.debug('>>>>> stderr <<<<<');
        console.debug(stderr);
      }
      resolve({
        code: error && error.code ? error.code : 0,
        error,
        stdout,
        stderr
      });
    });
  });
};

module.exports = {
  tmpSamplesCIResultsFile,
  tmpSamplesProcessDir,
  mockSamplesDir,
  mockIgnoreFile,
  makeTMPDirPath,
  runCli,
  promiseQ
};
