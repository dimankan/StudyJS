'use strict';

//#region #9: функции по Function Expression, анонимные функции, callback-функции
console.log("//#region #9: функции по Function Expression, анонимные функции, callback-функции");

//#region 43. // Function Expression 
console.log("//#region 43. // Function Expression");
let showMsg = function(){
    let a = 5;
    console.log(a);
}
showMsg();

console.log( showMsg );
console.log( typeof showMsg );

// Копируется ссылка на функцию.
let show = showMsg;

show();		// 1-й вызов функции
showMsg();	//2-й вызов функции
//#endregion

//#region 44. Пример использования передачи функции как переменной. Пример с Cookies
console.log("//#region 44. Пример использования передачи функции как переменной. Пример с Cookies");

function agreeCookies(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
   
  function agreeYes() { 
     console.log("Вы приняли соглашение о cookies");
  }
   
  function agreeNo() {
     console.log("Вы отказались от использования cookies");
  }
   
  agreeCookies("Наш сайт использует cookies. Нам нужно ваше согласие", agreeYes, agreeNo);

//#endregion

//#region 45. Более короткий вариант с печеньками
console.log("//#region 45. Более короткий вариант с печеньками");

function agreeCookies(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
   
  agreeCookies( 
      "Наш сайт использует cookies. Нам нужно ваше согласие",  
      function () { console.log("Вы приняли соглашение о cookies"); },
      function () { console.log("Вы отказались от использования cookies"); }
  );


//#endregion

//#region 45. Адекватный вариант с созданием функции через переменную.  
console.log("//#region 45. Адекватный вариант с созданием функции через переменную.  ");

let age = prompt("Сколько вам лет?", 18);
let setAccess = (age < 18) ?
    function () {console.log("Доступ запрещен: вы слишком молоды"); } :
    function () { console.log("Доступ разрешен"); };
 
setAccess();
//#endregion

//#region 43. 
console.log("");
//#endregion

//#region 43. 
console.log("");
//#endregion

//#region 43. 
console.log("");
//#endregion

//#region 43. 
console.log("");
//#endregion

//#endregion