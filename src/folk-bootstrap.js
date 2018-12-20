import program from 'commander';
import addDefaultOptions from './lib/addDefaultOptions';
import getType from './lib/getType';
import loadConfig from './lib/loadConfig';

addDefaultOptions(program)
    .option('-e, --env [env]', 'Environment', 'local')
    .action((...args) => {
        console.log(args);
    })
    .parse(process.argv);

const bootstrap = async (configPath) => {
    const config = await loadConfig(configPath);
    const { source } = config;
    const Type = getType(source.type);
    console.log(Type);
};


bootstrap(program.config);
