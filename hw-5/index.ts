// Task 1
// Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
// Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

function getSum(par: number): number {
    let sum: number = 0;
    for (let i = 0; i <= par; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(100));

// Task 2
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается (не использовать в качестве суммы кредита внешнюю переменную).

function getCredit(creditSum: number): string {
    let percent: number = 17;
    let numberOfYears: number = 5;
    let overpay = 0;
    for (let i = 0; i < numberOfYears; i++) {
        overpay += (creditSum * percent) / 100;
        creditSum -= (creditSum * percent) / 100;
    }
    return `Переплата по кредиту составляет: ${Math.round(overpay)} рублей!`;
}
console.log(getCredit(5000));

// Task 3
// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

function trimString(newString: string, fromValue: number, toValue: number): string {
    return newString.slice(fromValue, toValue);
}
console.log(trimString("Сегодня хорошая погода", 3, 11));

// Task 4
// Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
// Для 2021 это будет 5.

function getSumNumbers(newNumber: number): number {
    let nextNumber = newNumber.toString();
    let sum: number = 0;
    for (let i = 0; i < nextNumber.length; i++) {
        sum += Number(nextNumber[i]);  
    }
    return sum;
}
console.log(getSumNumbers(2021));

// Task 5
// Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, 
// найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
// getSum(1, 0) === 1   // 1 + 0 = 1
// getSum(1, 2) === 3   // 1 + 2 = 3
// getSum(0, 1) === 1   // 0 + 1 = 1
// getSum(1, 1) === 1   // 1 Since both are same
// getSum(-1, 0) === -1 // -1 + 0 = -1
// getSum(-1, 2) === 2  // -1 + 0 + 1 + 2 = 2

const getSumTwo = (a: number, b: number) => {
     let sum = 0;
     if(a !== b) {
         let min = Math.min(a, b);
         let max = Math.max(a, b);
         while (min <= max) {
             sum += min;
             min++
         }
     } else {
         sum = a;
     }
     return sum;
 };
 console.log(getSumTwo(1,0));
 console.log(getSumTwo(1, 2));
 console.log(getSumTwo(0, 1));
 console.log(getSumTwo(1, 1));
 console.log(getSumTwo(-1, 0));
 console.log(getSumTwo(-1, 2));

// Task 6
// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

// - булевое значение
// - функцию **foo** которая выводит в консоль свое имя
// - функцию **boo** которая выводит в консоль свое имя

// Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

function foo (name: string = "foo"): void {
    console.log(name);
}

function boo (name: string = "boo"): void {
    console.log(name);

}
function fooboo (boolean: boolean, foo: Function, boo: Function): void {
    if (boolean) {
        foo();
    } else {
        boo();
    }
}
fooboo(false, foo, boo);












export{};


