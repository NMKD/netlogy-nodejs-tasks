#!/usr/bin/env node
const yargs = require("yargs/yargs")(process.argv.slice(2));
const chalk = require("chalk");
const { GetWheather } = require("./GetWeather");
const { CONFIG } = require("./config");
const pathConfig = CONFIG.requiest.path;
const key = CONFIG.requiest.api_key;

const csl = console.log;

yargs.command({
  command: "weather",
  describe: "Получить данные о погоде",
  builder: {
    name: {
      alias: "n",
      describe: "Передать нименование города",
      type: "string",
    },
  },
  handler: async (argv) => {
    const param = argv._[1];
    csl("Наименование города", chalk.green(param));
    if (param) {
      const city = new GetWheather(param);
      const res = await city.handleRequest(pathConfig, city.name, key);
      csl("Результат:", res);
    } else {
      csl(
        chalk.bgCyan(
          `Введите опцию %-n% с параметром %Наименование города% на английском языке`
        )
      );
    }
  },
});

yargs.parse();
