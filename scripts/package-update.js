let fs = require('fs-extra');
let ncu = require('npm-check-updates');

let source = './packages/';

function getDirectories (path)
{
    return fs.readdirSync(path).filter(function (file)
    {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

let inputDirs = getDirectories(source);

for (let i = 0; i < inputDirs.length; i++)
{
    let dir = source + inputDirs[i];

    console.log(dir);

    ncu.run({
        configFilePath: dir,
        upgrade: true
    }).then((upgraded) => {
        console.log('dependencies to upgrade:', upgraded);
    });
}
