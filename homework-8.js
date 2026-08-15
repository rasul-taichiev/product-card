/* 3.
    Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее.
    Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). Подберите правильное название для переменной 
*/

const userData = {
    name: "Rasul",
    surname: "Taichiev",
    email: "taychiev@gmail.com",
    age: 19,
    country: "Kyrgyzstan",
    city: "Bishkek",
    relationshipStatus: "Not married",
    hobby: "vibeCoding",
    favoriteGame: "minecraft",
};

console.log(Object.entries(userData));

/* 4.
    Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки).
    Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта) 
*/

const autoData = {
    autoBrand: "Toyota",
    model: "Corolla",
    yearOfManufacture: 2008,
    color: "blue",
    machineBox: "automatic",
};

autoData.owner = userData.name;

console.log(Object.entries(autoData));

/* 5.
    Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. 
    Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает
*/

function hasMaxSpeed(auto) {
    if (!("maxSpeed" in auto)) {
        auto.maxSpeed = 200;
    }
}
hasMaxSpeed(autoData);
console.log(Object.entries(autoData));

/* 6.
    Написать функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение. 
*/

function showValue(object, key) {
    if (!(key in object)) {
        console.log("Такого обьекта нет.");
    }
    console.log(object[key]);
}
showValue(autoData, "model");

/* 7.
    Создать массив, который содержит названия продуктов (просто строки)
*/

const products = ["apple", "orange", "pineapple"];

/* 8.
    Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). 
    После, используя известный нам метод массив, добавить еще одну книгу в конец списка. Можете заменить книги на фильмы, или другую сущность, идею вы поняли.
*/

const books = [
    {
        title: "Великий Гэтсби",
        author: "Фрэнсис Скотт Фицджеральд",
        yearOfManufacture: 1925,
        coverColor: "золотая",
        genre: "роман",
    },
    {
        title: "1984",
        author: "Джордж Оруэлл",
        yearOfManufacture: 1949,
        coverColor: "серая",
        genre: "антиутопия",
    },
    {
        title: "Граф Монте-Кристо",
        author: "Александр Дюма",
        yearOfManufacture: 1844,
        coverColor: "синяя",
        genre: "приключенческий роман",
    },
    {
        title: "Убить пересмешника",
        author: "Харпер Ли",
        yearOfManufacture: 1960,
        coverColor: "зеленая",
        genre: "драма",
    },
];

/* 9.
    Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте).
    С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один
*/

const happyBooks = [
    {
        title: "How to stop bad thinking",
        author: "Tyler Pen",
        yearOfManufacture: 1999,
        coverColor: "синяя",
        genre: "будь счастливым",
    },
    {
        title: "Happy cat",
        author: "George Kim",
        yearOfManufacture: 1976,
        coverColor: "белая",
        genre: "будь счастливым",
    },
    {
        title: "Be like a tree",
        author: "Saske Okaharo",
        yearOfManufacture: 2001,
        coverColor: "коричневая",
        genre: "будь счастливым",
    },
];

/* 10.
    Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9.
    Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. 
    Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).
*/

const testMap = happyBooks.map((item) => {
    if (item.yearOfManufacture > 2000) {
        item.isRare = true;
    } else {
        item.isRare = false;
    }

    return item;
});
console.log(testMap);
