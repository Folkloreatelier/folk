import program from 'commander';

import addDefaultOptions from '../lib/addDefaultOptions';

addDefaultOptions(program)
    .description('Create an image of the app')
    .parse(process.argv);
