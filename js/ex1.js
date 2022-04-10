'use strict';

//#region 0. Это моя первая программа
let obj = document.getElementById('id_div');
console.log(obj);
//#endregion
//#region 1. Просто прогон и создании переменных
let user = "ALex",
    age = 25,
    email = 'sdfsdf@fg.ru';
 
console.log(user);
console.log(age);
console.log(email);
//#endregion
//#region 2. Переназначение переменных
age = 28;
user = "Dmitry";

console.log(user);
console.log(age);
//#endregion
//#region 3. Константа
const PI = 3.1415;

// Переменную PI нельзя переназначить

console.log(PI);
//#endregion