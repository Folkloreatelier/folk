import path from 'path';
import getType from './getType';

export class Bootstraper {
    constructor({ type, options: typeOptions, ...opts }) {
        this.options = {
            srcPath: path.resolve(path.join(process.cwd(), './src')),
            ...opts,
        };
        const Type = getType(type);
        this.type = new Type(typeOptions);
    }

    async run() {
        const { srcPath } = this.options;
        await this.type.bootstrap(srcPath);
    }
}

const bootstrap = async (source) => {
    const bootstraper = new Bootstraper(source);
    return await bootstraper.run();
};

export default bootstrap;
