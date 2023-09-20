// Task 1
// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. 
// Конструкт родительского класса принимает переменные марку авто и тип двигателя. 
// Дочерние классы должны иметь методы выводящие максимальную скорость и цену на соответствующие типы авто. 
// Выводящий текст должен быть таким: This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. 
// Approximately cost of the car is <carCost>. (В задании используйте не только public модификатор, где это возможно)

class Car {
    protected nameCar: string;
    protected engineCar: string;

    constructor(nameCar: string, engineCar: string) {
        this.nameCar = nameCar;
        this.engineCar = engineCar;
    }
}

class SportCar extends Car {
    speedMax: number;
    priceCar: number;

    constructor(nameCar: string, engineCar: string, speedMax: number, priceCar: number) {
        super(nameCar, engineCar) 
        this.speedMax = speedMax;
        this.priceCar = priceCar;
    }

    showInfo() {
        console.log(`This is ${this.nameCar}. It has ${this.engineCar} engine and max speed equal to ${this.speedMax} km/h. Approximately cost of the car is ${this.priceCar} dollars.`)
    }
}

class LuxuryCar extends Car {
    speedMax: number;
    priceCar: number;

    constructor(nameCar: string, engineCar: string, speedMax: number, priceCar: number) {
        super(nameCar, engineCar) 
        this.speedMax = speedMax;
        this.priceCar = priceCar;
    }
    showInfo()  {
        console.log(`This is ${this.nameCar}. It has ${this.engineCar} engine and max speed equal to ${this.speedMax} km/h. Approximately cost of the car is ${this.priceCar} dollars.`)
    }
}

const sport = new SportCar("Toyota Supra", "2JZ-GE", 260, 90000);
sport.showInfo()

const luxury = new LuxuryCar("Porshe Cayman", "powerful", 280, 110);
luxury.showInfo()

// Task 2
// Создайте два объекта людей. Реализуйте метод, который выводит строку My name is <name>. 
// И в зависимости от контекста выполнения, этот метод должен выводить соответствующее имя

class Person {
    namePerson: string;

    constructor(namePerson:string) {
        this.namePerson = namePerson;
    }
}

const personOne = new Person ("Emilia");
const personTwo = new Person ("Adam");

function sayName() {
    console.log(`My name is ${this.namePerson}`)
}

sayName.call(personOne);
sayName.apply(personTwo);

// Task 3
// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль. 
// В зависимости от контекста выполнения, этот метод должен выводить соответствующую информацию о машинах. 
// К примеру This car has 3 doors and this is left-hand drive car

class Automobile {
    doorNumbers: number;
    drive: string;

    constructor(doorNumbers: number, drive: string) {
        this.doorNumbers = doorNumbers;
        this.drive = drive;
    }

}

const leftHandDriveCar = new Automobile (3, "left-hand drive");
const  rightHandDrive = new Automobile (5, "right-hand drive");

function sayInfo() {
    console.log(`This car has ${this.doorNumbers} doors and this is ${this.drive} car`)
}

sayInfo.call(leftHandDriveCar);
sayInfo.apply(rightHandDrive);

