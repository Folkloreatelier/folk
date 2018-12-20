import path from 'path';

class Type {
    constructor(opts) {
        this.options = {
            srcPath: path.resolve(path.join(process.cwd(), './src')),
            ...opts,
        };
    }
}

export default Type;
