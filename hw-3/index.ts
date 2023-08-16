// Task 1
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика
let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z)

// Task 2
// Создайте переменные:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

let secMin = 60;
let minHour = 60;
let hourDay = 24;
let dayYear = 365;

let myAgeInSeconds = 60 * 60 * 24 * 365 * 41;
console.log(myAgeInSeconds)

// Task 3
// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. 
// Попробуйте реализовать задачу двумя разными способами.

let userName = "42";

console.log(parseInt(userName));
console.log(+"42");

let count = 42;
console.log(String(count));
console.log(`${42}`)

// Task 4
// Имеется три переменные:
// Сложите переменные так, чтобы в результате получилось выражение: **`12 white bears`** и результат выведите в консоль

let a = 1;
let b = 2;
let c = "white bears";

console.log(String(a) + b + " " + "white bears")

// Task 5
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

let word1 = "access";
let word2 = "marine";
let word3 = "ice";
let word4 = "garden";
let word5 = "jaw";

let lengthhWords = word1 + word2 + word3 + word4 + word5;
console.log(lengthhWords.length)

// Task 6
// Создайте переменные и присвойте им значения:
// Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных

let valueA = 'true';
let valueB = false;
let valueC = 17;
let valueD = undefined;
let valueE = null;

console.log(typeof 'true', typeof false, typeof 17, typeof undefined, typeof null);

// Task 7
// Даны две переменные:
// С помощью условий выведите в консоль разработчика наибольшее число

let height = 15;
let width = 20;

if (height > width) {
    console.log(height);
} else if (width > height) {
    console.log(width);
}

// Task 8
// Переберите числа от 1 до 20 (используя циклические конструкции) и выведите в консоль все числа кратные трём.
// Для вычисления кратности обратите внимание на оператор %


for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Tsk 9
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы **`|| &&`**.
// Ответ поместите в переменную **shouldGoToWork**

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = "shouldGoToWork";

if (key && documents && pen && (apple || orange)) {
    console.log(shouldGoToWork);
}

// Task 10
// Написать код, который в зависимости от переданного ему числа выводит сообщение в консоль: 
// 1. Если число делится без остатка на 5 выводим сообщение `Fizz`
// 2. Если число делится без остатка на 3 выводим сообшение `Buzz`
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение `FizzBuzz`

let i = 12;
if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzzz");
} else if (i % 3 === 0) {
    console.log("Buzz");
} else if (i % 5 === 0) {
    console.log("Fizz");
}

// Task 11
// Написать код, который в зависимости от переданного ему числа выводит сообщение в консоль:
// Если число больше 18, то выводит сообщение - `Let's go drink some beer`. 
// Если меньше, то выводит сообщение - `Better drink cola`. 
// Добавить условие, что если возраст от 16-18, выводим сообщение - `You can buy some smokes, but don't tell your mother`.

let value = 23;
if (value > 16 && value < 18) {
    console.log("You can buy some smokes, but don't tell your mother")
} else if (value < 18) {
    console.log("Better drink cola");
} else if (value > 18) {
    console.log("Let's go drink some beer");
}

// Task 12
// Напишем код для туристического терминала. Создать переменную для стороны света в которую пользовател хотел отправиться. 
// После ввода данных мы должны вывести в консоль сообщение из списка. 
// Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз (текст произвольный).
// + `south` - `you need to turn around`
// + `north` - `your path is the straight path`
// + `west` - `on your left`
// + `east` - `just go to the right`
// Используйте конструкцию switch

let side = "east";
switch (side) {
    case "south":
        console.log("you need to turn around");
        break;
    case "north":
        console.log("your path is the straight path");
        break;
    case "west":
        console.log("on your left");
        break;
    case "east":
        console.log("just go to the right");
        break;
    default:
        console.log("try again");
}









