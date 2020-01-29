let fs = require('fs-extra');
let ncu = require('npm-check-updates');
let { execSync } = require('child_process');

let source = './packages/';

function getDirectories (path)
{
    return fs.readdirSync(path).filter(function (file)
    {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

let inputDirs = getDirectories(source);

let i = 0;

function updatePackage ()
{
    let dir = source + inputDirs[i];

    console.log('');
    console.log(dir);
    console.log('');

    ncu.run({

        packageFile: dir + '/package.json',
        silent: true,
        upgrade: true

    }).then((upgraded) => {
    
        if (Object.keys(upgraded).length > 0)
        {
            console.log('Dependencies:', upgraded);
        
            execSync('npm install', { cwd: dir, env: process.env, stdio: 'inherit' });
        }
        else
        {
            console.log('Nothing to update');
        }

        i++;

        // if (i < inputDirs.length)
        if (i < 3)
        {
            updatePackage();
        }
    
    });
}

updatePackage();
