import program from 'commander';

import addDefaultOptions from './lib/addDefaultOptions';

addDefaultOptions(program)
    .option('-y, --yes', 'confirm')
    .action((...args) => {
        console.log(args);
    })
    .parse(process.argv);

console.log(program.config);
