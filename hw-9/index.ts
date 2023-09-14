// Task 1
// Создайте класс Animal, в конструктор которого передаются имя, 
// и с помощью метода данного класса можно вернуть фразу `This is a <animalType>. Its name is <name>`. 
// Также данный класс должен иметь статическое поле animalType, значение которого должно подставляться в фразу, 
// которую возвращает метод выше.

class Animal {
    
    name: string;
    static animalType: string = "wolf";
    
constructor(name: string) {
    this.name = name;
  }
  
showAnimal() {
    return `This is a ${Animal.animalType}. Its name is ${this.name}`
    }
}
const animal = new Animal("Oliver");
console.log(animal.showAnimal());




