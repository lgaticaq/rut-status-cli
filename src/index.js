#!/usr/bin/env node

'use strict';

import program from 'commander';
import rutStatus from 'rut-status';
import pkg from '../package.json';

program
  .version(pkg.version)
  .option('-r, --rut [rut]', 'Add rut', /^(\d{6,8})-[0-9k]$/i)
  .option('-t, --type [type]', 'Add type', /^(CEDULA|CEDULA_EXT|PASAPORTE_PG|PASAPORTE_DIPLOMATICO|PASAPORTE_OFICIAL)$/i, 'CEDULA')
  .option('-s, --serial [serial]', 'Add serial', /^a(\d{9})$/i)
  .parse(process.argv);

if (program.rut && program.type && program.serial) {
  const options = {
    rut: program.rut,
    type: program.type.toUpperCase(),
    serial: program.serial
  };
  rutStatus(options, (err, status) => {
    if (err) console.log(err.message);
    else console.log(`Status: ${status}`);
  });
} else {
  program.help();
}
