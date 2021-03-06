import path from 'path';

const addDefaultOptions = program =>
    program
        .option(
            '-c, --config <path>',
            'Config file path',
            path.resolve(path.join(process.cwd(), './app.json'))
        )
        .option('-s, --src <path>', 'Source path');

export default addDefaultOptions;
