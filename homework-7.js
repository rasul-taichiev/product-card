const getCityAmdTemperature = (city, temperature) => {
  console.log(
    `Сейчас в ${city} температура -- ${temperature} градусов по Цельсию`,
  );
};

getCityAmdTemperature("Bishkek", "38");

//2
const lightSpeed = 299792458;
const getSpeed = (speed) => {
  if (speed > lightSpeed) {
    console.log("Сверхсветовая скорость");
  } else if (speed === lightSpeed) {
    console.log("Скорость света");
  } else {
    console.log("Субсветовая скорость");
  }
};

getSpeed(12983838);

//3
const product = "Cheaps";
const price = 200;
const buyProduct = (budget) => {
  if (budget > price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const lackOfMoney = price - budget;
    console.log(`Вам не хватает ${lackOfMoney}$, пополните баланс`);
  }
};
buyProduct(180);

//4
const earns = 5000;
const earnBonus = 1000;
const accumulation = 70000;

const buyHouse = (price, percent = 10) => {
  const totalBudget = earns + earnBonus + accumulation;
  if (totalBudget >= price) {
    console.log("Вы можете купить дом за вашу зарплату и накопления.");
  } else if (totalBudget < price) {
    const markup = price * (percent / 100); // Наценка
    const priceWithMarkup = price + markup;
    const lackOfBudget = priceWithMarkup - totalBudget;
    const earnPerMonth = earns + earnBonus;
    const payPerMonth = Math.ceil(lackOfBudget / earnPerMonth);
    console.log(
      `Цена дома: ${price}. Наценка (${percent}%): ${markup}$. Итого: ${priceWithMarkup}$.`,
    );
    console.log(`Вы можете купить дом в рассрочку на ${payPerMonth} месяца.`);
  }
};

buyHouse(200000);
