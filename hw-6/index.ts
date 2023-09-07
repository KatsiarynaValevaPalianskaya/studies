// Task 1
// Создать любой объект с двумя ключами и любыми значениями в них, а затем удалить ключи из объекта.

type User = {
    firstName?: string;
    phoneNumber?: number | string | null;
}
const person: User = {
    firstName: "Kat",
    phoneNumber: "12344234",
};
delete person.firstName; 
delete person.phoneNumber;

// Task 2
// Создать любой объект с двумя ключами и любыми значениями в них, а затем проверить есть ли в объекте определенный ключ и если есть вывести в консоль **true**

type UserTwo = {
    firstName?: string;
    phoneNumber: number | string | null;
}
const personTwo: UserTwo = {
    firstName: "Kat",
    phoneNumber: "12344234",
};
console.log("phoneNumber" in personTwo);

// Task 3
// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей объекта.

type UserThree = {
    firstName?: string;
    phoneNumber: number | string | null;
    [prop: string]: number | string | null | undefined;
};
const personThree: UserThree = {
    firstName: "Kat",
    phoneNumber: "12344234",
};

for (const key in personThree) {
    console.log(key);
    console.log(personThree[key]);
}

// Task 4
// Вывести в консоль слово красный и синий, обращаясь к ключам объекта.

const colors = {
    "ru pum pu ru rum": {
        red: "red",
        green: "green",
        blue: "blue",
    }
};
console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue);

// Task 5
// Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации. Затем данные записать в объект. 
// Второй метод принимает данные пользователя и объект зарегистрированного пользователя. Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**.

const validatorObject = {
    register: function (login: string, password: string): Object {
      const newUser = {
        login: login,
        password: password,
      }
      return newUser;
    },
    login: function (log: string, pass: string, obj: Object) {
      if ("login" in obj && "password" in obj) {
        if (log == obj.login && pass == obj.password) {
          console.log("Добро пожаловать");
        } else {
          console.log("Введены неверные данные");
        }
      }
    }
  }
  
  validatorObject.login("kat","1234", validatorObject.register("kat","1234"));

  // Task 6
  // Дан объект. Дан объект. Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

  let salaries: {
    andrey: number;
    sveta: number;
    anton: number;
    alexey: number;
    alexandra: number;
    [key: string]: number;
} = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    alexey: 664,
    alexandra: 199,
};

let denominator: number = 0;
let salarySum: number = 0;

for (const key in salaries) {
    denominator += 1;
    salarySum += salaries[key];
}

const mediumSalary = salarySum/denominator;




export{};