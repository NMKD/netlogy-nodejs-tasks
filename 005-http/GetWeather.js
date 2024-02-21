const { CONFIG } = require("./config");
const chalk = require("chalk");
class GetWheather {
  constructor(name) {
    this.name = name;
  }

  async handleRequest(path, name, accessKey) {
    if (
      typeof name === "string" &&
      name.toLowerCase() === CONFIG.cities.moscow.city.toLowerCase()
    ) {
      try {
        const response = await fetch(
          `${path}lat=${CONFIG.cities.moscow.lat}&lon=${CONFIG.cities.moscow.lon}`,
          {
            headers: { "X-Yandex-Weather-Key": accessKey },
          }
        );
        return await response.json();
      } catch (error) {
        throw new Error(
          chalk.bgRedBright("Ошибка REST API Яндекс Погода"),
          error
        );
      }
    }
  }
}

module.exports = {
  GetWheather,
};
