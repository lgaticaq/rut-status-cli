#!/usr/bin/env node

'use strict';

const program = require('commander');
const rutStatus = require('rut-status');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const ora = require('ora');

updateNotifier({pkg}).notify();

program
  .version(pkg.version)
  .usage('-r <rut> -t <type> -s <serial>')
  .description('Check rut status in registro civil')
  .option('-r, --rut [rut]', 'Add rut. Ex: 11111111-1', /^(\d{6,8})-[0-9k]$/i)
  .option('-t, --type [type]', 'Availables CEDULA, CEDULA_EXT, PASAPORTE_PG, PASAPORTE_DIPLOMATICO, PASAPORTE_OFICIAL', /^(CEDULA|CEDULA_EXT|PASAPORTE_PG|PASAPORTE_DIPLOMATICO|PASAPORTE_OFICIAL)$/i, 'CEDULA')
  .option('-s, --serial [serial]', 'Add serial. Ex. A111111111', /^a(\d{9})$/i)
  .parse(process.argv);

if (program.rut && program.type && program.serial) {
  const spinner = ora('Searching...');
  spinner.start();
  const options = {
    rut: program.rut,
    type: program.type.toUpperCase(),
    serial: program.serial
  };
  rutStatus(options).then(status => {
    spinner.stop();
    console.log(chalk.green(`Status: ${status}`));
  }).catch(err => {
    spinner.stop();
    console.log(chalk.red(err.message));
  });
} else {
  program.help();
}
