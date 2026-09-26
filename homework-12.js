/**3.Создать структуру на ваш выбор, как было показано в лекции 
(имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов */

class Gadget {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    turnOn() {
        console.log(`${this.brand} ${this.model} включился.`);
    }
}

class Phone extends Gadget {
    constructor(brand, model, memory, battery) {
        super(brand, model);
        this.memory = memory;
        this.battery = battery;
    }

    turnOn() {
        super.turnOn();
        console.log(
            `Телефон имеет память ${this.memory} и батарею ${this.battery}`,
        );
    }
}

const myIphone = new Phone("Iphone", "17 pro", "516gb", "5000mah");
myIphone.turnOn();
