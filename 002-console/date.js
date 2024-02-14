#!/usr/bin/env node
const yargs = require("yargs/yargs")(process.argv.slice(2));
const chalk = require("chalk");

/// Task 1
// Команда "current"
yargs.command({
  command: "current",
  describe: "Выводит текущую дату и время в формате ISO",
  builder: {
    year: {
      alias: "y",
      describe: "Выводит текущий год",
      type: "boolean",
    },
    month: {
      alias: "m",
      describe: "Выводит текущий месяц",
      type: "boolean",
    },
    date: {
      alias: "d",
      describe: "Выводит дату в календарном месяце",
      type: "boolean",
    },
  },
  handler: (argv) => {
    const now = new Date();
    if (argv.year) {
      console.log("Сейчас год:", chalk.green(now.getFullYear()));
    } else if (argv.month) {
      console.log("Месяц сейчас:", chalk.green(now.getMonth() + 1));
    } else if (argv.date) {
      console.log("Дата сейчас:", chalk.green(now.getDate()));
    } else {
      console.log("ISO Date:", chalk.green(now.toISOString()));
    }
  },
});

// Команда "add"
yargs.command({
  command: "add",
  describe: "Прибавляет указанное количество времени к текущей дате и времени",
  builder: {
    days: {
      alias: "d",
      describe: "Количество дней для прибавления",
      type: "number",
    },
    months: {
      alias: "m",
      describe: "Количество месяцев для прибавления",
      type: "number",
    },
  },
  handler: (argv) => {
    const now = new Date();
    const { days, months } = argv;
    now.setDate(now.getDate() + (days || 0));
    now.setMonth(now.getMonth() + (months || 0));
    console.log(now.toISOString());
  },
});

// Команда "sub"
yargs.command({
  command: "sub",
  describe: "Вычитает указанное количество времени из текущей даты и времени",
  builder: {
    days: {
      alias: "d",
      describe: "Количество дней для вычитания",
      type: "number",
    },
    months: {
      alias: "m",
      describe: "Количество месяцев для вычитания",
      type: "number",
    },
  },
  handler: (argv) => {
    const now = new Date();
    const { days, months } = argv;
    now.setDate(now.getDate() - (days || 0));
    now.setMonth(now.getMonth() - (months || 0));
    console.log(now.toISOString());
  },
});

yargs.parse();
