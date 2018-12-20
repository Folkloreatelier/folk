import path from 'path';
import download from 'download-git-repo';
import GitHub from 'github-api';
import Type from '../Type';

class LaravelType extends Type {
    constructor(opts) {
        super(opts);

        this.options = {
            ...this.options,
            version: 'latest',
            laravelPath: './laravel',
            ...opts,
        };
    }

    async bootstrap(srcPath) {
        await this.downloadLaravel(srcPath);
    }

    async downloadLaravel(srcPath) {
        const { laravelPath } = this.options;
        const destPath = path.join(srcPath, laravelPath);
        const version = await this.getVersion();
        return new Promise((resolve, reject) => {
            download(`laravel/laravel#${version}`, destPath, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }

    async getVersion() {
        const { version } = this.options;
        if (version === 'latest') {
            return await this.getLatestVersion();
        }
        return version;
    }

    async getLatestVersion() {
        const github = new GitHub();
        const repo = github.getRepo('laravel', 'laravel');
        const { data } = await repo.listBranches();
        return data.reduce((version, { name }) => {
            const matches = name.match(/^([0-9]+\.[0-9]+)$/);
            if (matches === null) {
                return version;
            }
            return parseFloat(matches[1]) > parseFloat(version) ? matches[1] : version;
        }, 0);
    }
}

export default LaravelType;
