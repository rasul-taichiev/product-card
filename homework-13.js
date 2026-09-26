class Drink {
    #temperature;
    constructor(name, size, price) {
        this.name = name;
        this.size = size;
        this.price = price;
    }

    getDrinkInfo() {
        console.log(`Ваш напиток: ${this.name}`);
    }
    getDrinkTemperature() {
        console.log(`Температура напитка: ${this.#temperature}`);
    }
    setTemperature(temperature) {
        if (temperature >= 0 && temperature <= 100) {
            this.#temperature = temperature;
        } else {
            console.log("Вы указали нереальную температуру");
        }
    }

    #controlTemperature(temperature) {
        console.log("Начинаю проверку температуры напитка.");
        this.#temperature = temperature;
        if (this.#temperature < 15) {
            console.log(
                "Вода ниже 15 градусов, человек может заболеть, по правилам нужно повысить, т.к вкус не поменяется.",
            );
            this.#temperature = 20;
            console.log("К цене прибавится 15 рублей за услуги контроля.");
            this.price = this.price + 15;
            return;
        } else if (this.#temperature > 60) {
            console.log(
                "Вода выше 60 градусов, человек может получить микроожоги,по правилам нужно снизить до 50 градусов,т.к вкус не поменяется.",
            );
            this.#temperature = 50;
            console.log("К цене прибавится 15 рублей за услуги контроля.");
            this.price = this.price + 15;
            return;
        }
        console.log(`Вы выбрали хорошую температуры напитка.`);
    }

    #makeDrink(temperature) {
        console.log("Стакан поставлен, собираю все нужные ингридиенты.");
        this.#controlTemperature(temperature);
    }

    serveDrink(temperature) {
        this.#makeDrink(temperature);
        console.log("Ваш напиток готов, Держите.");
    }
}

/**
При заказе напитка мы будем передавать аргументом сам напиток и вызывать его внутренние методы, например - подать напиток, 
А этот метод внутри себя вызывает метод для готовки напитка и выполняет всякие побочные действия, по типу изменения температуры и прочее. 
*/

class BubbleTea extends Drink {
    constructor(name, size, price, typeOfMilk) {
        super(name, size, price);
        this.typeOfMilk = typeOfMilk;
    }

    getDrinkInfo() {
        super.getDrinkInfo();
        console.log(`Вид молока вашего баблти : ${this.typeOfMilk}`);
    }
}

class Tea extends Drink {
    constructor(name, size, price, teaProduction) {
        super(name, size, price);
        this.teaProduction = teaProduction;
    }

    getDrinkInfo() {
        super.getDrinkInfo();
        console.log(`Страна производства вашего чая: ${this.teaProduction}`);
    }
}

class Coffee extends Drink {
    constructor(name, size, price, typeOfBean) {
        super(name, size, price);
        this.typeOfBean = typeOfBean;
    }

    getDrinkInfo() {
        super.getDrinkInfo();
        console.log(`Вид зерна вашего кофе: ${this.typeOfBean}`);
    }
}

class Milk extends Drink {
    constructor(name, size, price, milkFat) {
        super(name, size, price);
        this.milkFat = milkFat;
    }

    getDrinkInfo() {
        super.getDrinkInfo();
        console.log(`Процент жира вашего молока: ${this.milkFat}`);
    }
}

class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getCafeInfo() {
        console.log(
            `${this.name} - это потрясающее кафе, находится оно в ${this.location}`,
        );
    }

    orderDrink(drink) {
        drink.serveDrink(65);
    }
}

const cafe = new Cafe("CoffeeFree", "Bishkek");
const bubbleTea = new BubbleTea("Americano", "Medium", 100, "CowMilk");
cafe.getCafeInfo();
cafe.orderDrink(bubbleTea);
