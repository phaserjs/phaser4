# Phaser 4

Needless to say, you can't use Phaser 4 in production yet, so please don't even try.

## Contributor Guide

1. Checkout the Phaser 4 repo.
2. `npm i`.
3. The `packages` folder contains all of the Phaser 4 modules.
4. The `bundles` folder contains all of the Phaser 4 bundles.

### To create a new module

1. Go into the `scripts/` folder and copy the `_template` folder.
2. Paste it into the `packages/` folder.
3. Rename the `_template` folder it to whatever the module is called, i.e. `geom-line`.
4. Inside the new folder, edit the `package.json` file.
5. Replace the `"name"` property with the module name, i.e. `"@phaserjs/geom-line"`.
5. Change the `"description"` property to be the Phaser namespace for the module, i.e. `"Phaser.Geom.Line"`.
6. Save `package.json`.

Now, edit the TypeScript source in the `src` folder, making sure to properly export the module.

Once you're ready to publish:

7. First, commit your changes to git, as you can't publish with uncommited changes.
8. Run `lerna-wizard`.
9. Pick `publish` from the menu and answer `N` to custom publishing and `info` for the log level.
10. It will detect your new package and ask for a version increment. Select `Patch` (0.0.1).
11. Confirm your choices and publish. It should then send it all off to npm and you're done.

### To update a module

1. Edit the TypeScript code to make the changes required.
2. First, commit your changes to git, as you can't publish with uncommited changes.
3. Run `lerna-wizard`.
4. Pick `publish` from the menu and answer `N` to custom publishing and `info` for the log level.
5. It will detect your new package and ask for a version increment. Select `Patch` (0.0.1).
6. Confirm your choices and publish. It should then send it all off to npm and you're done.

### To build a module

1. Change into the package directory, i.e. `cd packages/geom-line`.
2. Run `npm run build`.
3. TypeScript will do its thing. If there are errors in the source, fix them.
4. If the build completes, the files will be in the `dist` folder.
5. Commit the build files and publish then to npm via the `lerna-wizard` -> `publish` option.

## Creating package tests

### Link the packages together

First, to aid in testing, link the packages together:

1. In the _package_ folder in the Phaser 4 repo, i.e. `packages/geom-line` and run the command `npm link`.
2. In the **Phaser 4 Dev** repo, add the package you've just created, i.e. `npm i @phaserjs/geom-line`.
3. Now link them together: `npm link @phaserjs/geom-line`.
4. It should create a symlink between phaser4-dev and the roaming node_modules package.
5. This means you can write a test in Phaser 4 Dev and edit the package source inside of Phaser 4 without needing to publish every time. 

When you've finished an edit, just build the package as usual with `npm run build`, and npm link will see the changes automatically.

### To create a test for a module

Do the following in the Phaser 4 Dev Repo (_not_ this repo)

1. Run the command `npm run create`. This will create a brand new folder in which you can build a test. The folder name will automatically increment from the previous one, i.e. `009`, `010`, etc. If you want a specific folder name, use the command `npm run create -- -f folderName` instead.
2. Edit the test file, i.e. if the folder it created was called `009` then edit `test009.ts`:

```
import { Angle, Line } from '@phaserjs/geom-line';

const test: Line = new Line(0, 100, 400, 50);

console.log(Angle(test));
```

3. Build the test with `npm run build`. It will create the build file in the test folder.
4. Open the test in a browser, i.e. `localhost/phaser4-dev/src/009/` and the test will load.
5. If you want to do lots of edits, use `npm run watch` and it'll rebuild the test on each save.
6. If you want to test for errors, use `npm run test`.
7. If you want to check to see which modules the test depends on, use `npm run trace` for a full trace resolution.

### To check for outdated packages

This repo uses https://www.npmjs.com/package/npm-check-updates - which you can run from the cli via `ncu`.

Use this in the root folder to check for out dated packages for the core scripts.

Then, use the script `npm run packagencu` to run ncu on all sub-packages and update each of them in turn.

Also, use `lerna-wizard` to check for out-dated packages across sub-packages.
