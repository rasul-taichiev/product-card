class Drink {
    #temperature;
    constructor(name,size,price,temperature){
        this.name = name
        this.size = size
        this.price = price
        this.#temperature = temperature
    }

    getDrinkInfo () {
        console.log(`Ваш напиток: ${this.name}`)
    }
    getDrinkTemperature () {
        console.log(`Температура напитка: ${this.#temperature}`)
    }

    #controlTemperature () {
        console.log("Начинаю проверку температуры напитка.")
        if(this.#temperature < 15) {
            console.log("Вода ниже 15 градусов, человек может заболеть, по правилам нужно повысить, т.к вкус не поменяется.")
            this.#temperature =  20
            console.log("К цене прибавится 15 рублей за услуги контроля.")
            this.price = this.price + 15
            return
        }else if(this.#temperature > 60) {
            console.log("Вода выше 60 градусов, человек может получить микроожоги,по правилам нужно снизить до 50 градусов,т.к вкус не поменяется.")
            this.#temperature = 50
            console.log("К цене прибавится 15 рублей за услуги контроля.")
            this.price = this.price + 15
            return
        }
        console.log(`Вы выбрали хорошую температуры напитка.`)
    }

    #makeDrink () {
        console.log("Стакан поставлен, собираю все нужные ингридиенты.")
        this.#controlTemperature()
    }

    serveDrink () {
        this.#makeDrink()
        console.log("Ваш напиток готов, Держите.")
    }

}

/**
При заказе напитка мы будем передавать аргументом сам напиток и вызывать его внутренние методы, например - подать напиток, 
А этот метод внутри себя вызывает метод для готовки напитка и выполняет всякие побочные действия, по типу изменения температуры и прочее. 
*/


class BubbleTea extends Drink {
    constructor(name,size,price,temperature,typeOfMilk){
        super(name,size,price,temperature)
        this.typeOfMilk = typeOfMilk
    } 

    getDrinkInfo () {
        super.getDrinkInfo()
        console.log(`Вид молока вашего баблти : ${this.typeOfMilk}`)
    }
}

class Tea extends Drink {
    constructor(name,size,price,temperature,teaProduction){
        super(name,size,price,temperature)
        this.teaProduction = teaProduction
    } 

    getDrinkInfo () {
        super.getDrinkInfo()
        console.log(`Страна производства вашего чая: ${this.teaProduction}`)
    }
}

class Coffee extends Drink {
    constructor(name,size,price,temperature,typeOfBean){
        super(name,size,price,temperature)
        this.typeOfBean = typeOfBean
    }
    
    getDrinkInfo () {
        super.getDrinkInfo()
        console.log(`Вид зерна вашего кофе: ${this.typeOfBean}`)
    }
}

class Milk extends Drink {
    constructor(name,size,price,temperature,milkFat){
        super(name,size,price,temperature)
        this.milkFat = milkFat
    }
    
    getDrinkInfo () {
        super.getDrinkInfo()
        console.log(`Процент жира вашего молока: ${this.milkFat}`)
    }
}


class Cafe {
    constructor(name,location){
        this.name = name
        this.location = location
    }

    getCafeInfo () {
        console.log(`${this.name} - это потрясающее кафе, находится оно в ${this.location}`)
    }

    orderDrink (drink) {
        drink.serveDrink()
    }
}

const cafe = new Cafe ("CoffeeFree", "Bishkek")
const bubbleTea = new BubbleTea ("Americano","Medium",100,65,"CowMilk")
cafe.getCafeInfo()
cafe.orderDrink(bubbleTea)
