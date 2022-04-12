'use strict';
// Материал взял здесь https://www.youtube.com/playlist?list=PLA0M1Bcd0w8x9TltCzZDhw0SatK1d10yy

//#region #2: способы объявления переменных и констант в стандарте ES6+
console.log("#2: способы объявления переменных и констант в стандарте ES6+");
//#region 0. Это моя первая программа
let obj = document.getElementById('id_div');
console.log(obj);
//#endregion
//#region 1. Просто прогон и создании переменных
console.log("//#region 1. Просто прогон и создании переменных");
let user = "ALex",
    age = 25,
    email = 'sdfsdf@fg.ru';

console.log(user);
console.log(age);
console.log(email);
//#endregion
//#region 2. Переназначение переменных
console.log("//#region 2. Переназначение переменных");
age = 28;
user = "Dmitry";

console.log(user);
console.log(age);
//#endregion
//#region 3. Константа
console.log("//#region 3. Константа");
const PI = 3.1415;

// Переменную PI нельзя переназначить

console.log(PI);
//#endregion
//#endregion
//#region #3: примитивные типы number, string, Infinity, NaN, boolean, null, undefined, Symbol
console.log("#3: примитивные типы number, string, Infinity, NaN, boolean, null, undefined, Symbol");

//#region 4. Определение типа данных
console.log("//#region 4. Определение типа данных");
let a = 5;
let b = 3.42;

console.log(typeof a);
console.log(typeof b);
//#endregion
//#region 5. Специальные числовые значения
console.log("//#region 5. Специальные числовые значения");

let c = 1 / 0;
let d = Infinity;
let e = -Infinity;
let inf = 1e1000;

console.log(c);
console.log(d);
console.log(e);
console.log(inf);
//#endregion 
//#region 6. Не число NaN
console.log("//#region 6. Не число NaN");
let a1 = "Строка" / 2;
console.log(a1);
//#endregion
//#region 7. String
console.log("//#region 7. String");
let msg1 = "Строка 1";
let msg2 = 'Строка 2';
let msg3 = `Строка 3`; // Включен в последнюю ES6


console.log(msg1);
console.log(msg2);
console.log(msg3);

// В JS нет понятия CHAR; let ch = "1"; - Это всегда стринг
//#endregion
//#region 8. Интерполяция ``
console.log("//#region 8. Интерполяция ``");

let a2 = 5, b2 = 2;
let msg4 = `a = ${a2}, b = ${b2}`;

console.log(msg4);
//#endregion
//#region 9. Экранирование 
console.log("//#region 9. Экранирование ");

let c1 = "class =\"myclass\"";
console.log(c1);

// Есть вариант без использования слэша. Нужны одинарные кавычки
let c2 = 'class ="myclass"';
console.log(c2);

//#endregion
//#region 10. Bool
console.log("//#region 10. Bool");

let isWin = true, isChecked = false;
let isGreater = 4 < 1;

console.log(isWin);
console.log(isChecked);
console.log(isGreater);
//#endregion
//#region 11. Null and Undefined
console.log("//#region 11. Null and Undefined");
// Разница между Null и Undefined, в том, что Null говорит что переменная создана, но пока не имеет значени
// а undefined что она никак не определенна

let idProcess = null;
console.log(idProcess);

let someUndefiend;
console.log(someUndefiend);

//#endregion
//#region 12. Symbol. Новая в ES6. Похоже история про ХЕШ
console.log("//#region 12. Symbol. Новая в ES6. Похоже история про ХЕШ");

let id = Symbol();
let id2 = Symbol("id");
console.log(id === id2); // сравнение уникальных значение. false
//#endregion
//#endregion
//#region #4: приведение типов, оператор присваивания, функции alert, prompt, confirm
console.log("//#region #4: приведение типов, оператор присваивания, функции alert, prompt, confirm");
//#region 13. Приведение типов с bool в string
console.log("//#region 13. Приведение типов с bool в string");

let a3 = true;
a3 = String(a3); // Сама конвертация в string
console.log(a3);
console.log(typeof a3);

//#endregion
//#region 14. Приведение в Number
console.log("//#region 14. Приведение в Number");

let a4 = "123";
let b4 = Number(a4);
console.log(b4);
console.log(typeof b4);

// Обрезка, NaN и из bool

console.log(Number("   123   ")); // 123
console.log(Number("123z"));      // NaN (ошибка чтения числа в "z")
console.log(Number(true));        // 1
console.log(Number(false));       // 0


//#endregion
//#region 15. Автоматическое приведение к number при делении
console.log("//#region 15. Автоматическое приведение к number при делении");
let z = "6" / "3";

console.log(z);
console.log(typeof z);
//#endregion
//#region 16. Конкатенация
console.log("//#region 16. Конкатенация");
console.log("Необходимо быть аккуратным при сложении цифр. Если хоть одна будет определенна как строка, то математического сложения не будет");
console.log("6" + "3"); //63
console.log("6" + 3);   //63
console.log(6 + "3");   //63

console.log(6 + 3);     //9

let a5 = "6", b5 = "3";
console.log(Number(a5) + Number(b5)); // 9

let z1 = "SomeText";
console.log(Number(z1)); // NaN


console.log(5+"6"); //56
console.log("6"+10); // 610
console.log("6.46"+10); //6.4610
console.log(-2+"1.3"); //-21.3


console.log(5+2);       // 7
console.log(true+10);   // 11
console.log(null+10);   // 10
console.log(-2 + +"1.3");// 0.7
console.log(+"6" + +"3");// 9

console.log(3+2+"2");   //52

//#endregion
//#region 17. Приведение к bool
console.log("//#region 17. Приведение к bool");

console.log(Boolean(1)); // true
console.log(Boolean("0")); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello!")); // true
console.log(Boolean("")); // false
//#endregion
//#region 18. Оператор присваивания
console.log("//#region 18. Оператор присваивания");

let a6, b6, c6;
a6 = b6 = c6 = 2 + 2;
console.log(a6, b6, c6); //4 4 4

let a7, b7 = 1;
let c7 = 3 - (a7 = b7 + 1);
console.log( a7, b7, c7 ); //2 1 1

//#endregion
//#region 19. Функции alert, prompt, confirm
console.log("//#region 19. Функции alert, prompt, confirm");
console.log("Предполагается что запущено в браузере");
// Alert - Модальное окно
//alert("Hello");

// Prompt - Ввод данных 
// Синтаксис: result = prompt(title, [default]);
// // let age1 = prompt("Сколько вам лет?");
// let age1 = prompt("Сколько вам лет?", "28");
// console.log(age1);

// // Confirm - модальное окно с вопросом, который возвращает bool. result = confirm(question);
// let isCar = confirm("У тебя есть машина?");
// console.log(isCar);

//#endregion

//#endregion
//#region #5: арифметические операции: +, -, *, /, **, %, ++, --
console.log("//#region #5: арифметические операции: +, -, *, /, **, %, ++, --");

//#region 20. Унарный минус
console.log("//#region 20. Унарный минус");

let a8 = 1;
a8=-a8;   //унарный минус // -1
console.log(a8);

// Порой удобно вместо явной конвертации в number использовать унарный оператор

let a10 = "5";
-a10;
console.log(typeof a10, a10); // string 5
console.log(typeof -a10, -a10); // number -5

let a11 = -a10;
console.log(typeof a11, a11);

// Также дополнитеьльно можно преобразовывать не только string
console.log("// Также дополнитеьльно можно преобразовывать не только string");


let x1 = true, y1 = null, z2 = undefined;
console.log(-x1);    // -1
console.log(-y1);    // -0
console.log(-z2);     //NaN
console.log(typeof -x1, typeof -y1, typeof -z2);

// Унарный плюс тоже все пытается перевести в числа, если это возможно:
console.log("// Унарный плюс тоже все пытается перевести в числа, если это возможно:");

let x3 = "4", y3 = "не число", z3 = true, t = null, u = undefined;
console.log(typeof +x3, typeof +y3, typeof +z3, typeof +t); // number number number number
console.log(+x3, +y3, +z3, +t, +u); // 4 NaN 1 0 NaN

//#endregion
//#region 21. Бинарный минус 
console.log("//#region 21. Бинарный минус");
let a9 = 1, b9 = 2;
console.log(b9-a9);    //бинарный минус // 1

// Если один string а другой number, то string конвертируется в number
let x = "2.8", y = 7.3;
let xy = x-y;
console.log(xy); // 4.5
console.log(typeof x); // string
console.log(typeof xy); // number

console.log(-2 + +"1.3");// 0.7
console.log(+"6" + +"3");// 9

console.log(3+2+"2");   //52

//#endregion
//#region 22. Операторы * / % ** ++ -- относятся к арифметическим и выполняют автоматическое преобразование выражения к числу.
console.log("//#region 22. Операторы * / % ** ++ -- относятся к арифметическим и выполняют автоматическое преобразование выражения к числу.");

let x11="2", y11 = 5;
console.log(x11/y11);   //0.4

console.log(x11*y11);   // 10 

console.log(x11*y11+1.3/6-10); // 0.21666666666666679

console.log(x11*(y11+1.3)/6-10); // -7.9

// Остаток
console.log("// Остаток");

console.log( 5 % 2 ); // 1, остаток от деления 5 на 2
console.log( 8 % 3 ); // 2, остаток от деления 8 на 3
console.log( 6 % 3 ); // 0, остаток от деления 6 на 3

console.log( 5.2 % 2.3 ); // примерно 0.6

// Возведение в степень
console.log("// Возведение в степень");

console.log( 2 ** 2 ); // 4  (2 * 2)
console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
console.log( 4 ** 2 ); // 16  (4 * 4)

console.log( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
console.log( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

//++ (инкремент) и -- (декремент) увеличивают и уменьшают значение переменной на 1:
console.log("//++ (инкремент) и -- (декремент) увеличивают и уменьшают значение переменной на 1:");
let counter = 2, cnt = 5;
counter++; // работает как counter = counter + 1 
cnt--; // работает как cnt = cnt - 1 
console.log( counter, cnt ); // 3, 4

let a21, b21, c21 = 10, d21 = 10;
a21 = c21++;
b21 = ++d21;
console.log( a21, b21, c21, d21 );

//#endregion
//#region 23. 
console.log("");
//#endregion
//#region 24. 
console.log("");
//#endregion
//#region 25. 
console.log("");
//#endregion
//#region 26. 
console.log("");
//#endregion

//#endregion
