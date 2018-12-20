import program from 'commander';
import path from 'path';
import addDefaultOptions from '../lib/addDefaultOptions';
import loadConfig from '../lib/loadConfig';
import bootstrap from '../lib/bootstrap';
import mergeWithoutUndefined from '../lib/mergeWithoutUndefined';

addDefaultOptions(program)
    .option('-e, --env [env]', 'Environment', 'local')
    .parse(process.argv);

const runBootstrap = async (configPath, opts = {}) => {
    const config = await loadConfig(configPath);
    const { source } = config;
    await bootstrap(mergeWithoutUndefined({}, source, opts));
};

const configPath = program.config;
const srcPath = program.src || path.join(path.dirname(configPath), './src');
runBootstrap(configPath, {
    srcPath,
});
