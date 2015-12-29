# rut-status-cli

[![npm version](https://img.shields.io/npm/v/rut-status-cli.svg?style=flat-square)](https://www.npmjs.com/package/rut-status-cli)
[![npm downloads](https://img.shields.io/npm/dm/rut-status-cli.svg?style=flat-square)](https://www.npmjs.com/package/rut-status-cli)
[![dependency Status](https://img.shields.io/david/lgaticaq/rut-status-cli.svg?style=flat-square)](https://david-dm.org/lgaticaq/rut-status-cli#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/rut-status-cli.svg?style=flat-square)](https://david-dm.org/lgaticaq/rut-status-cli#info=devDependencies)
[![Join the chat at https://gitter.im/lgaticaq/rut-status-cli](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square)](https://gitter.im/lgaticaq/rut-status-cli?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Check rut status in registro civil CLI

## Installation

```bash
npm i -g rut-status-cli
```

## Use

Available types:

- **CEDULA**: Cédula de identidad chilena
- **CEDULA_EXT**: Cédula de identidad a extranjeros
- **PASAPORTE_PG**: Pasaporte
- **PASAPORTE_DIPLOMATICO**: Pasaporte diplomático
- **PASAPORTE_OFICIAL**: Pasaporte oficial

```bash
Usage: rut-status [options]

Options:

  -h, --help             output usage information
  -V, --version          output the version number
  -r, --rut [rut]        Add rut
  -t, --type [type]      Add type Default: CEDULA
  -s, --serial [serial]  Add serial
```

## Example

```bash
rut-status -r 11111111-1 -s A111111111 // Vigente
rut-status -r 11111111-1 -s A111111111 -t CEDULA // Vigente
```

Status:

- Vigente
- No Vigente
- No Vigente ( No Emitido)
