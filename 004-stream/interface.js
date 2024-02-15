const readline = require("node:readline");
const chalk = require("chalk");
const { addResult } = require("./addResult");
// Создаем интерфейс
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const log = console.log;
const oneOrTwo = Math.floor(Math.random() * 2) + 1;

// Начинаем игру
const startGame = (file) => {
  rl.question(
    chalk.bgCyan("Я подкинул монетку, введи число: Орел - 1 или Решка - 2:"),
    (answer) => {
      const num = parseInt(answer);

      // Проверяем на пустое значение и число
      if (!answer || isNaN(answer) || answer === 0 || answer > 2) {
        log("ОШИБКА!:", chalk.red("Пожалуйста, введите число от 1 до 2"));
        startGame();
        return;
      }
      const now = new Date().toLocaleDateString();
      if (num === oneOrTwo) {
        log(chalk.green("Молодец, угадал!"));
        addResult(file, { win: true, time: now });
        rl.close();
      } else {
        log(chalk.red("В следующий раз, повезет!"));
        addResult(file, { win: false, time: now });
        rl.close();
      }
    }
  );
};

module.exports = {
  startGame,
};
