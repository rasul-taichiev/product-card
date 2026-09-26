import { arrayOfCards } from "./productCards.js";
const cardTemplate = document.getElementById("card-template");
const cardClearList = document.querySelector(".clear-list");
const mainOfCard = document.querySelector(".main");
const containerOfCard = document.querySelector(".container");
const IMAGE_PATH = "./images/";
// 4
const reducedCard = arrayOfCards.reduce((acc, currentValue) => {
    return (
        acc +
        `name: ${currentValue["cardName"]}, description: ${currentValue["description"]}\n`
    );
}, "");

// шаблон
const renderOfCards = (array) => {
    array.forEach((card) => {
        const cardClone = cardTemplate.content.cloneNode(true);
        cardClone.querySelector(".card__image").src =
            `${IMAGE_PATH}${card.image}.png`;
        cardClone.querySelector(".card__name").textContent = card.cardName;
        cardClone.querySelector(".card__description").textContent = card.description;
        cardClone.querySelector(".li-1").textContent = card.li_1;
        cardClone.querySelector(".li-2").textContent = card.li_2;
        cardClone.querySelector(".li-3").textContent = card.li_3;
        cardClone.querySelector(".card__price-value").innerHTML = card.price;
        cardClearList.appendChild(cardClone);
    });
    console.log(cardClearList);
    containerOfCard.appendChild(cardClearList);
    mainOfCard.appendChild(containerOfCard);
};
// 5
const askNumber = () => {
    const answer = Number(prompt("Сколько карточек отобразить? От 1 до 5"));
    if (answer >= 1 && answer <= 5) {
        return answer;
    } else {
        alert("Введите число только от 1 до 5!");
    }
};
// result
const cardsToShow = askNumber();
const limitedCards = arrayOfCards.slice(0, cardsToShow);
renderOfCards(limitedCards);