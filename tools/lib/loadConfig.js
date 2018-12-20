import fs from 'fs';

const loadConfig = path => new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(JSON.parse(data));
    });
});

export default loadConfig;
