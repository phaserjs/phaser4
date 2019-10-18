# Phaser 4

Needless to say, don't use this yet.

## Contributor Guide

1. Checkout the Phaser 4 repo
2. `npm i`
3. The `packages` folder contains all of the Phaser 4 modules
4. The `bundles` folder contains all of the Phaser 4 bundles

### To create a new module

1. Go into the `scripts/` folder and copy the `_template` folder
2. Paste it into the `packages/` folder
3. Rename the `_template` folder it to whatever the module is called, i.e. `geom-line`
4. Inside the new folder, edit the `package.json` file
5. Replace the `"name"` property with the module name, i.e. `"@phaserjs/geom-line"`
5. Change the `"description"` property to be the Phaser namespace for the module, i.e. `"Phaser.Geom.Line"`
6. Save `package.json`

Now, edit the TypeScript source in the `src` folder, making sure to properly export the module.

Once you're ready to publish:

7. First, commit your changes to git, as you can't publish with uncommited changes
8. Run `lerna-wizard`
9. Pick `publish` from the menu and answer `N` to custom publishing and `info` for the log level
10. It will detect your new package and ask for a version increment. Select `Patch` (0.0.1)
11. Confirm your choices and publish. It should then send it all off to npm and you're done

### To update a module

1. Edit the TypeScript code to make the changes required
2. First, commit your changes to git, as you can't publish with uncommited changes
3. Run `lerna-wizard`
4. Pick `publish` from the menu and answer `N` to custom publishing and `info` for the log level
5. It will detect your new package and ask for a version increment. Select `Patch` (0.0.1)
6. Confirm your choices and publish. It should then send it all off to npm and you're done

### To build a module

1. Change into the package directory, i.e. `cd packages/geom-line`
2. Run `npm run build`
3. TypeScript will do its thing. If there are errors in the source, fix them
4. If the build completes, the files will be in the `dist` folder

### To create a test for a module

1. In the Phaser 4 Dev Repo (_not_ this repo) run the command `npm run create`. This will create a brand new folder in which you can build a test. The folder name will automatically increment from the previous one, i.e. `009`, `010`, etc. If you want a specific folder name, use the command `npm run create -- -f folderName` instead.
2. 



### To check for outdated packages

This repo uses https://www.npmjs.com/package/npm-check-updates - which you can run from the cli via `ncu`.
Also, use `lerna-wizard` to check for out-dated packages across sub-packages.
