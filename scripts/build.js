let fs = require('fs-extra');
let parseArgs = require('minimist');
let { exec } = require('child_process');

let source = './packages/';

//  Can do: `npm run build -- 001 (or just npm run build for it to build the most recent folder)
let argv = parseArgs(process.argv);

let folder = argv._[2];

if (!folder)
{
    console.error('No folder specified. Use npm run build -- folder-name');
}
else
{
    let dest = source + folder;
    let dist = source + folder + '/dist/';

    if (fs.existsSync(dest))
    {
        fs.emptyDirSync(dist);

        const w = exec('tsc --build ' + dest + '/tsconfig.json');
    
        w.stdout.on('data', (data) => {
            console.log(data);
        });
    
        w.stderr.on('data', (data) => {
            console.log(data);
        });
    }
    else
    {
        console.log('Failed to find package', dest);
    }
}
