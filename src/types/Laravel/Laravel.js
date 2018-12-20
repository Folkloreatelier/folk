import Type from '../Type';

class LaravelType extends Type {
    constructor(opts) {
        super(opts);

        this.options = {
            ...this.options,
            version: 'latest',
            ...opts,
        };
    }

    bootstrap() {

    }
}

export default LaravelType;
