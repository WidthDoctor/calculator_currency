const fs = require("fs");
const cheerio = require("cheerio");
const questions = require("./questions.json");
const city = document.getElementById('city');
console.log(city);

class NewConverter{
    constructor(){

    }
    async currentCource(city, userId) {
        const questionsData = fs.readFileSync("questions.json");
        const questions = JSON.parse(questionsData);
        const cityURL = questions.cityURL[city];
        try {
          const fetchModule = await import("node-fetch");
          const fetch = fetchModule.default;
          const response = await fetch(cityURL);
          const html = await response.text();

          const $ = cheerio.load(html); // Загружаем HTML с помощью Cheerio

          const currencyRates = {}; // Создаем объект для хранения курсов валют

          $("span.kurs").each((index, element) => {
            const id = $(element).attr("id");
            const content = $(element).text();

            // Разделяем id по символу подчеркивания и создаем соответствующий объект
            const [currencyId, exchangeType] = id.split("_");
            if (!currencyRates[currencyId]) {
              currencyRates[currencyId] = {}; // Создаем объект для курсов для данной валюты
            }
            currencyRates[currencyId][exchangeType] = content;
          });

          this.sendCurrentRate(currencyRates, userId, city);
        } catch (error) {
          console.error("Произошла ошибка:", error);
        }
      } //курс
}