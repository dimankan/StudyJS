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
//#region 40. Внешний, внутренний контекст 
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
//#region 39. Вызов ф-ии с передачей парамметра
console.log("");
//#endregion
//#region 39. Вызов ф-ии с передачей парамметра
console.log("");
//#endregion
//#region 39. Вызов ф-ии с передачей парамметра
console.log("");
//#endregion

//#endregion