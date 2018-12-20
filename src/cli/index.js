#!/usr/bin/env node

import program from 'commander';
import packageJson from '../../package.json';

program
    .version(packageJson.version)
    .command('bootstrap', 'Bootstrap an app', {
        isDefault: true,
    })
    .command('deploy [env]', 'Deploy an app')
    .command('status [env]', 'Status of an app')
    .command('backup [env]', 'Backup of an app')
    .command('image [action]', 'Manage images of the app')
    .parse(process.argv);
