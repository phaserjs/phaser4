# Phaser 4

Needless to say, don't use this yet.

## Contributor Guide

https://www.npmjs.com/package/npm-check-updates
ncu


1. Checkout the Phaser 4 repo
2. `npm i`
3. The `packages` folder contains all of the Phaser 4 modules
4. The `bundles` folder contains all of the Phaser 4 bundles

### To create a new module

1. Go into the `scripts/` folder and copy the `_template` folder.
2. Paste it into the `packages/` folder.
3. Rename the `_template` folder it to whatever the module is called, i.e. `geom-line`.
4. Inside the new folder, edit the `package.json` file
5. Replace the `"name"` property with the module name, i.e. `"@phaserjs/geom-line"`
5. Change the `"description"` property to be the Phaser namespace for the module, i.e. `"Phaser.Geom.Line"`
6. Save `package.json`

Now, edit 