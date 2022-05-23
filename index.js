//#! /usr/bin/env node

const { program } = require('commander')
const chalk = require('chalk');
const figlet = require('figlet');
const list = require('./commands/list.js')
const add = require('./commands/add.js')
const markDone = require('./commands/markDone.js')


program
    .command('list')
    .description('List all repository')
    .action(list)

program
    .command('add <task>')
    .description('Add a new repository')
    .action(add)

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)

program.parse()