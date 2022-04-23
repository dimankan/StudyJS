'use strict';

//#region #8: объявление функций по Function Declaration, аргументы по умолчанию
console.log("//#region #8: объявление функций по Function Declaration, аргументы по умолчанию");

//#region 38. Простейшее объявление ф-ии
console.log("//#region 38. Простейшее объявление ф-ии");

OutLog();
OutLog();

function OutLog(){
    console.log("Вызов ф-ии");
}



//#endregion
//#region 39. Вызов ф-ии с передачей парамметра
console.log("//#region 39. Вызов ф-ии с передачей парамметра");

OutLogWithInput("Привет");
OutLogWithInput("Пока");
OutLogWithInput(1);
OutLogWithInput(true);


function OutLogWithInput(msg){
    console.log("Msg:" + msg);
}

OutLogWithInputTwoParam("Artem", 26);
OutLogWithInputTwoParam("Dima", 28);

function OutLogWithInputTwoParam(name, age){
console.log("Name: " + name + ". Age: " + age);
}
//#endregion
//#region 40. Глобалный, внутренний контекст 
console.log("//#region 40. Внешний, внутренний контекст");

//"Использование внешнего контекста"
console.log("Использование внешнего контекста");

let email = "dimankan94@mail.ru";
ShowMessage("очень позновательный текст");

function ShowMessage(text){
    let msg = "From " + email + ` ${text}`;
    console.log(msg);
}

//"Использование внутреннего контекста"
console.log("Использование внутреннего контекста");

ShowMessageInside("Какой-то другой интересный текст")

function ShowMessageInside(text){
    let email = "dv08@bk.ru";
    let msg = "From " + email + ` ${text}`;
    console.log(msg);
}

//#endregion
//#region 41. Значения по умолчанию
console.log("//#region 41. Значения по умолчанию");

function showMessageNew(from, text="Как дела?") {
    let msg = from + " " + email + ": " + text;
    console.log(msg);
}

// В стаых версии языка
function showMessageOld(from, text) {
    if(text === undefined) text ="Как дела?";
    let msg = from + " " + email + ": " + text;
    console.log(msg);
}
//#endregion
//#region 42. Возвращаем значение
console.log("//#region 42. Возвращаем значение");

let sum = Sum(5,7);
console.log(sum);

function Sum(a, b){
    return a+b;
}

//#endregion
//#region 39. Вызов ф-ии с передачей парамметра
console.log("");
//#endregion

//#endregion