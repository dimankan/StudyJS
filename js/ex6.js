'use strict';

//#region #6: условные операторы if и switch, сравнение строк, строгое сравнение
console.log("//#region #6: условные операторы if и switch, сравнение строк, строгое сравнение");


//#region 23. if(<выражение>) оператор;
console.log("//#region 23. if(<выражение>) оператор;");

let x = -5;
if (x < 0) { x = -x; }

console.log("|x| = " + x);

console.log(2 > 1);  // true (верно)
console.log(2 == 1); // false (неверно)
console.log(2 != 1); // true (верно)

let result = 7 > 5; // результат сравнения присваивается переменной result
console.log(result); // true

//#endregion

//#region 24. Сравнение строк
console.log("//#region 24. Сравнение строк");

console.log('Я' > 'А'); // true
console.log('Кот' > 'Код'); // true
console.log('Сонный' > 'Сон'); // true

//#endregion

//#region 25. Сравнение разных типов данных
console.log("//#region 25. Сравнение разных типов данных");

//При сравнении значений разных типов JavaScript приводит каждое из них к числу. Например:
console.log('2' > 1); // true, строка '2' становится числом 2
console.log('01' == 1); // true, строка '01' становится числом 1

//При сравнении булевых значений:
console.log(true == 1); // true (true приводится к 1)
console.log(false == 0); // true (false приводится к 0)
console.log(null == undefined); // true (обе величины приводятся к 0)

//Однако, при использовании сравнения с помощью операторов <, >, <=, >= всюду получим false:
console.log(null >= undefined);  // false (null – к нулю, undefined – к NaN)
console.log(null <= undefined);  // false (null – к нулю, undefined – к NaN)

//Внимание! Странное сравнение null с нулем:
console.log(null > 0);  // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

//#endregion

//#region 27. Строгое сравнение
console.log("//#region 27. Строгое сравнение");

//В JavaScript можно выполнять сравнение двух значений с учетом их типа данных. Для этого используется оператор === (три равно). Применяя его к предыдущему примеру, получим:
console.log(true === 1); //false
console.log(false === 0); //false

//Оба результата дадут ложь – false, так как значения, имеющие разные типы считаются не равными друг другу. Та же ситуация будет и при таком строгом сравнении:
console.log("5" === 5); //false
console.log("7" === 7); //false
console.log(null === undefined); // false

//Здесь также имеем разные типы данных, поэтому результат – false. А вот если взять строгое неравенство, то получим истину во всех случаях:
console.log("5" !== 5); //true
console.log(null !== undefined); // true

//#endregion

//#region 28. if, else if, else
console.log("//#region 28. if, else if, else");

let x1 = -10, sgn = 0;
if (x1 < 0) {
    sgn = -1;
    console.log("x1 отрицательное число", sgn);
}
else if (x1 > 0) {
    sgn = 1;
    console.log("x1 положительное число", sgn);
}
else console.log("x1 равен 0", sgn);


//#endregion

//#region 29. Тернарный условный оператор
console.log("//#region 29. Тернарный условный оператор");

let age = 13;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);

// илли так в данном случае
accessAllowed = age > 18;
console.log(accessAllowed);

//#endregion

//#region 30. Амперсанды И && и ИЛИ || 
console.log("//#region 30. Амперсанды И && и ИЛИ ||");

x = 4;
console.log("x = 4;");
if (x >= 2 && x <= 7)
    console.log("x попадает в [2; 7]");
else
    console.log("x не попадает в [2; 7]");


x = 40;
console.log("x = 40;");
if (x < 2 || x > 7)
    console.log("x не попадает в [2; 7]");
else
    console.log("x попадает в [2; 7]");


//#endregion

//#region 31. Одиночные проверки
console.log("//#region 31. Одиночные проверки");

//Внутри условия можно прописывать и такие одиночные выражения:

x = 4;
let y = true;
let z = false;
console.log("x = 4, y = true, z = false;");

if (x) console.log("x = " + x + " дает true");
if (!0) console.log("0 дает false");
if ("0") console.log("строка 0 дает true");
if (!"") console.log("пустая строка дает false");
if (y) console.log("y = true дает true");
if (!z) console.log("z = false дает false");

//#endregion

//#region 32. Оператор switch 
console.log("//#region 32. Оператор switch");

let item = 3;
switch(item) {
    case 1: console.log("item = 1");break;
    case 2: console.log("item = 2");break;
    case 3: console.log("item = 3");break;
    case 4: console.log("item = 4");break;
    default: console.log("item другое значение");
}

//#endregion

//#endregion