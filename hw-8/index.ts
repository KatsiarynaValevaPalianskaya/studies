// Task 1
// Выведи все элементы массива в консоль с помощью метода **`forEach`**
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function` для функции - коллбэка.

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach((item) => {
    console.log(item);
});

function getValues(par: number): void {
    for (let i = 0; i < par; i++) {
        console.log(fibonacci[i]);
    };
};
getValues(fibonacci.length);

// Task 2
// Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ... etc]
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function` для функции - коллбэка.

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
const usersTwo = users.map((value: string, index: number) => {
        return `member ${index + 1}: ${value}`;
    });
    console.log(usersTwo);

// Task 3
// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

const numbersNew = [7, -4, 32, -90, 54, 32, -21];
const numbersThree = numbersNew.filter((item: number) => {
    return item > 0});
    console.log(numbersThree);
 
// Task 4
// Используя метод **`reduce`** получите сумму всех чисел массива

const fibonacciNew = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
console.log(fibonacciNew.reduce((valueOne: number, valueTwo: number) => {
    return valueOne + valueTwo}));
  

// Task 5
// Используя метод **`find`** найдите в массиве первое четное число

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbers.find((item: number) => {
    return item % 2 === 0}));
   

// Task 6
// Используя метод **`some`** проверьте есть ли в массиве элемент кратный 3 и 5
const numbersNext = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbersNext.some((item: number) => {
        if (item % 3 === 0 && item % 5 === 0) {
            return true;
        }
        return false;
    }));
    

// Task 7
// Используя метод **`every`** проверьте то, в массиве **каждая** сумма цифр числа, полученного из элемента, возведённого в квадрат, четная.
const numbersOld = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbersOld.every((item: number) => {
    let value = Math.pow(item, 2).toString();
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      sum += Number(value[i]);
    };
    if (sum % 2 === 0) {
      return true;
    } else return false;
  }));

// Task 8
// Используя коллекцию **`Map`** создайте список ингредиентов к салату с количеством необходимым для добавления в салат.
// Например: `cucumber` - 300, `tomato` - 200, `salt` - 10, `sour cream` - 110
// После этого выведите все продукты, количество которых больше 100 гр.

let recipeMap = new Map<string, number>([
    ["cucumber", 300],
    ["tomato", 200],
    ["salt", 10],
    ["sour cream", 110]
]);
for(let [product, amount] of recipeMap.entries()) {
    if (amount > 100) {
        console.log(product);
    }
}

// Task 9
// Используя коллекцию **`Set`** создайте массив неповторяющихся значений

const numbersNine = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
const setOne = new Set(numbersNine);
console.log(new Set (setOne));













