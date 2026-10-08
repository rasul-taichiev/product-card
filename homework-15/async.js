const showInfo = document.getElementById("storage-info");
const showAllCardsBtn = document.getElementById("show-all-cards-btn");
const removeAllCardsBtn = document.getElementById("remove-all-cards-btn");
const removeCardBtn = document.getElementById("remove-card-btn");
const cardTemplate = document.getElementById("card-template");
const cardClearList = document.querySelector(".clear-list");

localStorage.removeItem("users");
async function getUsers() {
    try {
        const result = await new Promise((resolve, reject) => {
            showInfo.textContent = "Данные загружаются";
            setTimeout(async () => {
                showInfo.textContent = "Данные загружаются";
                const response = await fetch("user.json");
                if (!response.ok) {
                    reject(new Error("Проблема с данными"));
                    showInfo.textContent = "Данные не найдены";
                } else {
                    resolve(response);
                }
            }, 1000);
        });
        const users = await result.json();
        localStorage.setItem("users", JSON.stringify(users));
        showInfo.textContent = "Данные успешно загружены и сохранены!";
        return users;
    } catch (error) {
        showInfo.textContent = "Ошибка поймана: " + error.message;
    }
}

const renderCards = (users) => {
    cardClearList.innerHTML = "";

    users.forEach((userCard) => {
        const cardClone = cardTemplate.content.cloneNode(true);
        cardClone.querySelector(".card__id").textContent = userCard.id;
        cardClone.querySelector(".card__name").textContent = userCard.name;
        cardClone.querySelector(".card__surname").textContent =
            userCard.surname;
        cardClone.querySelector(".card__email").textContent = userCard.email;
        cardClone.querySelector(".card__age").textContent = userCard.age;
        cardClearList.appendChild(cardClone);
    });
};

const cardsValidate = () => {
    if (cardClearList.innerHTML !== "") {
        return false;
    } else {
        return true;
    }
};

showAllCardsBtn.addEventListener("click", async () => {
    if (cardsValidate()) {
        const users = await getUsers();
        renderCards(users);
    }
});

removeAllCardsBtn.addEventListener("click", () => {
    cardClearList.innerHTML = "";
});

const removeCard = () => {
    const answer = Number(prompt("Какую карточку вы хотите удалить?"));
    if (answer >= 1 && answer <= 5) {
        return answer;
    }
    alert("Введите число только от 1 до 5!");
    return undefined;
};

removeCardBtn.addEventListener("click", async () => {
    const idCard = removeCard();
    if (idCard !== undefined) {
        let v = JSON.parse(localStorage.getItem("users"));
        let vv = v.filter((users) => users.id !== idCard);
        localStorage.setItem("users", JSON.stringify(vv));
        renderCards(vv);
    }
});
