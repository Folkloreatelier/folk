import program from 'commander';

import addDefaultOptions from '../lib/addDefaultOptions';

addDefaultOptions(program)
    .description('Get the status of an application')
    .action((...args) => {
        console.log(args);
    })
    .parse(process.argv);
