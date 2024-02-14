const readline = require("node:readline");

// Создаем интерфейс для чтения и записи из стандартного потока ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = Math.floor(Math.random() * 101);

console.log("Загадано число в диапазоне от 0 до 100");

// Функция, которая задает пользователю вопрос и обрабатывает ответ
function guessNumber() {
  rl.question("Введите число: ", (answer) => {
    // Проверяем, является ли введенное значение числом
    if (isNaN(answer)) {
      console.log("Пожалуйста, введите число");
      guessNumber();
      return;
    }

    const number = parseInt(answer);

    // Сравниваем введенное число с загаданным
    if (number > secretNumber) {
      console.log("Меньше");
      guessNumber();
    } else if (number < secretNumber) {
      console.log("Больше");
      guessNumber();
    } else {
      console.log(`Отгадано число ${number}`);
      rl.close();
    }
  });
}

guessNumber();
