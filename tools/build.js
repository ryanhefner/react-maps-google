const fs = require('fs');
const execSync = require('child_process').execSync;
const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');

const exec = (command, extraEnv) => {
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  });
};

console.log('Building CommonJS modules ...');

exec('babel src -d . --ignore __tests__,*.test.js', {
  BABEL_ENV: 'cjs'
});

console.log('\nBuilding ES modules ...');

exec('babel src -d es --ignore __tests__,*.test.js', {
  BABEL_ENV: 'es'
});

console.log('\nBuilding react-maps-google.js ...');

exec('rollup -c -f umd -o umd/react-maps-google.js', {
  BABEL_ENV: 'umd',
  NODE_ENV: 'development'
});

console.log('\nBuilding react-maps-google.min.js ...');

exec('rollup -c -f umd -o umd/react-maps-google.min.js', {
  BABEL_ENV: 'umd',
  NODE_ENV: 'production'
});

const size = gzipSize.sync(
  fs.readFileSync('umd/react-maps-google.min.js')
);

console.log('\ngzipped, the UMD build is %s', prettyBytes(size));
