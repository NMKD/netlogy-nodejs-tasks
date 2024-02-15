const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const log = console.log;

const addResult = (file, data) => {
  const pth = path.join(__dirname, `${file}.json`);
  fs.readFile(pth, "utf-8", (err, content) => {
    if (err) throw new Error("Ошибка при чтении лог файла", err);
    try {
      const ct = JSON.parse(content);
      // добавляем результат в массив
      ct.push(data);
      // записываем обнавленные данные лог файла
      writeLog(pth, ct);
    } catch (error) {
      log(chalk.bgRed("ошибка при парсинге данных", error));
    }
  });
};

// запись данных в json
const writeLog = (pth, data) => {
  fs.writeFile(pth, JSON.stringify(data), "utf-8", async (err) => {
    if (err) throw err;
    log(chalk.bgGreenBright("Данные успешно записаны"));
    try {
    } catch (error) {
      log(chalk.red.inverse("Ошибка при записи файла:", error));
    }
  });
};

module.exports = {
  addResult,
};
