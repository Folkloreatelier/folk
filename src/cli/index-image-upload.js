import program from 'commander';

import addDefaultOptions from '../lib/addDefaultOptions';

addDefaultOptions(program)
    .description('Upload an image of the app')
    .parse(process.argv);
