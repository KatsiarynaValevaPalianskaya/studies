// Task 1
// Пользователь передает через переменную свою фамилию и имя. Выведите приветствие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр
let firstName: string = "Ivan";
let lastName: string = "Smith";
console.log(`Hello, ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()} \n`.repeat(5));

// Task 2
// Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку `Данной подстроки нет`
let nextPhrase: string = "Я учу typescript!";
if (nextPhrase.includes("учу")) {
    console.log(nextPhrase.indexOf("учу"));
} else {
    console.log("Данной подстроки нет");
}

// Task 3
// Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке. 
// Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`
let arbitraryStr: string = "I live in Berlin";
let inputIndex: number = 51;
if (inputIndex < arbitraryStr.length) {
    console.log(arbitraryStr[inputIndex]);
} else {
    console.log("Вы вышли за границу строки")
}

// Task 4
// Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет. 
// Если оканчивается, вывести предложение - `Данное предложение закончено`, если нет, то `В конце предложения не хватает точки`
let arbitraryPhrase: string = "I like walking in the forest";
let dot: string = ".";
if (arbitraryPhrase.endsWith(dot)) {
    console.log("Данное предложение закончено");
} else {
    console.log("В конце предложения не хватает точки");
}

// Task 5
// Дана строка 'я учу typescript!'. Вырежьте из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).
let anotherPrase: string = "Я учу typescript!";
console.log(anotherPrase.slice(2, 5), anotherPrase.substring(2, 5));

// Task 6
// Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let newPhrase: string = "Я учу typescript!";
console.log(newPhrase.split(" "));

// Task 7
// Дана строка '                я учу typescript!                '. Выведите строку, без начальных и пробелов в конце строки.
let singlePhrase: string = "                Я учу typescript!                ";
console.log(singlePhrase.trim());

// Task 8
// Дано число 8.829734872948. Выведите число с 3 значными цифрами после точки
let numberFractional: number = 8.829734872948;
console.log(numberFractional.toFixed(3));

// Task 9
// Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. Если является - вывести его, если нет - округлить до целой части.
let arbitraryNumber: number = 231.9356787;
if (Number.isInteger(arbitraryNumber)) {
    console.log(arbitraryNumber);
} else {
    console.log(Math.round(arbitraryNumber));
}

// Task 10
// Дано произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.
let piNumber: number = 3.1415926;
console.log(Math.floor(piNumber), Math.ceil(piNumber), Math.round(piNumber));

// Task 11
// Дано произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу.
let indexNumber: number = 2547;
console.log(Math.pow(indexNumber, 2));

// Task 12
// Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами функции
let randomNumber = Math.random();
console.log(Math.round(randomNumber * 100));

// Task 13
// Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами функции
let randomNum = Math.random();
console.log(randomNum * 100);

// Task 14
// Выведите дату сегодняшнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.
const date: Date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

































export{}