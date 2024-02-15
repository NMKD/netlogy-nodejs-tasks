#!/usr/bin/env node
const yargs = require("yargs/yargs")(process.argv.slice(2));
const chalk = require("chalk");
const { startGame } = require("./interface");
const { getReport } = require("./getReport");

const csl = console.log;

yargs.command({
  command: "start",
  describe: "Начать игру: орел или решка",
  builder: {
    log: {
      alias: "l",
      describe: "Запись результат игры в лог файл game",
      type: "string",
    },
    report: {
      alias: "r",
      describe: "Сформировать отчет о результатах игры",
      type: "boolean",
    },
  },
  handler: (argv) => {
    const { log, report } = argv;

    if (report && log) {
      getReport(log);
    } else if (log) {
      startGame(log);
    } else {
      csl(
        `Введите дополнительные опции:\n${chalk.green(
          `Начало игры: "-l=game"\nСформировать отчет: -r`
        )}`
      );
    }
  },
});

yargs.parse();
