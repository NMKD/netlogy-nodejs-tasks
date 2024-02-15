const { readFile } = require("node:fs");
const path = require("path");
const chalk = require("chalk");
const log = console.log;
const green = chalk.green;

const getReport = (file) => {
  const pth = path.join(__dirname, `${file}.json`);
  readFile(pth, "utf8", (err, content) => {
    if (err) throw new Error("Ошибка при чтении файла", err);
    try {
      const data = JSON.parse(content);
      const count = data.length;
      const wins = data.filter((item) => item.win).length;
      const fools = data.filter((item) => !item.win).length;
      log("Общее количество партий:", green(count));
      log("Количество выигранных партий:", green(wins));
      log("Количество проигранных партий:", green(fools));
      log(
        "Процентное соотношение выигранных партий:",
        `${green(Math.round((fools * 100) / count))}${green("%")}\n`
      );
    } catch (error) {
      log(chalk.red("Error - ошибка при парсинге данных"), error);
      return;
    }
  });
};

module.exports = {
  getReport,
};
