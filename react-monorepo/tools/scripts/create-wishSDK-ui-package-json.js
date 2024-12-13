const fs = require('fs');
const path = require('path');

// Paths
const distPath = path.resolve(__dirname, '../../dist/apps/wishSDK-ui');
const packageJsonPath = path.resolve(__dirname, '../../package.json');

// Read the root package.json
const rootPackageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// Create a package.json specific for this library
const libPackageJson = {
  name: '@techwish/wishsdk-ui',
  version: rootPackageJson.version,
  description: 'wishSDK-ui library',
  main: './wish-sdk-ui.umd.js', // UMD as the main entry point
  module: './wish-sdk-ui.es.js',
  author: rootPackageJson.author,
  license: rootPackageJson.license,
  publishConfig: {
    registry: 'https://us-central1-npm.pkg.dev/techwishui/wishsdk-ui/',
  },
  dependencies: rootPackageJson.dependencies,
  peerDependencies: rootPackageJson.peerDependencies,
};

// Write the package.json to the dist folder
fs.writeFileSync(
  path.join(distPath, 'package.json'),
  JSON.stringify(libPackageJson, null, 2)
);

console.log('package.json created for wishSDK-ui library');
