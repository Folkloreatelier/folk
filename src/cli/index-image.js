import program from 'commander';

program
    .description('Manage images of the app')
    .command('create', 'create an image of the app')
    .command('upload', 'upload an image of the app')
    .parse(process.argv);
