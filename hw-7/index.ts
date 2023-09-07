// Task 1
// Дан массив. Выведите в консоль его длину

const colors = ["red", "green", "blue"];
console.log(colors.length);

// Task2
// Дан массив. Выведите в консоль его последний элемент вне зависимости от его длинны

const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

// Task 3
// Дан массив. Удалите все элементы в массиве и выведите в консоль полученный результат
// Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

numbers.splice(0, 5);
console.log(numbers);

// Task 4
// Дан массив. 
// - Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// - Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// - Полученный результат не забудьте вывести в консоль.

const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);

// Task 5
// Дан массив. Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**

const cats = ["Gachito", "Tom", "Batman"];
for(let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
};
for (let catNew of cats) {
    console.log(catNew);
};

// Task 6
// - Соедините два массива чисел в один
// - В полученном массиве попробуйте найти индекс числа **`8`**

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const newNumbers = [...evenNumbers, ...oddNumbers];  // можно через `concat` const newNumbers = evenNumbers.concat(oddNumbers);

console.log(newNumbers);
console.log(newNumbers.indexOf(8));

// Task 7
// Дан массив. 
// - Наш бинарный массив неполный, в нем явно не хватает единиц.
// - Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0];
console.log(binary.join("1"));




export {}