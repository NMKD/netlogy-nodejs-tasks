const readline = require("node:readline");
const chalk = require("chalk");
// Создаем интерфейс для чтения и записи из стандартного потока ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const log = console.log;
const secretNumber = Math.floor(Math.random() * 5);

log(chalk.green.inverse("Загадано число в диапазоне от 0 до 100"));

// Функция, которая задает пользователю вопрос и обрабатывает ответ
function guessNumber() {
  rl.question("Введите число: ", (answer) => {
    // Проверяем на пустое значение и число
    if (!answer || isNaN(answer)) {
      log("ОШИБКА!:", chalk.red("Пожалуйста, введите число"));
      guessNumber();
      return;
    }
    const number = parseInt(answer);
    // Сравниваем введенное число с загаданным
    if (number > secretNumber) {
      log(chalk.bgYellow("Меньше"));
      guessNumber();
    } else if (number < secretNumber) {
      log(chalk.bgYellow("Больше"));
      guessNumber();
    } else {
      log(chalk.bgGreen(`Отгадано число ${number}`));
      rl.close();
    }
  });
}

guessNumber();
