const showInfo = document.getElementById("storage-info");
const showAllCardsBtn = document.getElementById("show-all-cards-btn");
const removeAllCardsBtn = document.getElementById("remove-all-cards-btn");
const removeCardBtn = document.getElementById("remove-card-btn");
const cardTemplate = document.getElementById("card-template");
const cardClearList = document.querySelector(".clear-list");

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

const doesUsersExist = () => !!localStorage.getItem("users")

showAllCardsBtn.addEventListener("click", async () => {
    if (!doesUsersExist()) {
        const users = await getUsers();
        renderCards(users);
    } else {
        const usersFromLS = JSON.parse(localStorage.getItem("users"))
        renderCards(usersFromLS)
    }
});

removeAllCardsBtn.addEventListener("click", () => {
    cardClearList.innerHTML = "";
});

const getUserId = () => {
    const answer = Number(prompt("Какую карточку вы хотите удалить?"));
    if (answer >= 1 && answer <= 5) {
        return answer;
    }
    alert("Введите число только от 1 до 5!");
    return undefined;
};

removeCardBtn.addEventListener("click", async () => {
    const idCard = getUserId();
    if (idCard !== undefined) {
        let usersFromLS = JSON.parse(localStorage.getItem("users"));
        let filterUsersFromLS = usersFromLS.filter((users) => users.id !== idCard);
        localStorage.setItem("users", JSON.stringify(filterUsersFromLS));
        renderCards(filterUsersFromLS);
    }
});
