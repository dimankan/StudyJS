'use strict';

//#region #7: операторы циклов for, while, do while, операторы break и continue
console.log("//#region #7: операторы циклов for, while, do while, операторы break и continue");
//#region 33. Оператор цикла while
console.log("//#region 33. Оператор цикла while");

let S = 0, i = 1;
while(i <= 1000){
    S+= 1/i;
    ++i;
}
console.log(S);

console.log("Добавим амперсанды");

S = 0, i = 1;
while(i <= 1000 && S < 5)
{
    S+= 1/i;
    ++i;
}
console.log(S);

console.log("Короткий вариант");

S= 0, i = 1;
while((S+= i++)<100);
console.log(S);


//#endregion
//#region 34. Оператор цикла for
console.log("//#region 34. Оператор цикла for");

S= 0;
for(i=1; i<=1000; ++i){
    S+= 1/i;
}
console.log(S);

console.log("Извращенный вариант с break");

let f, k = 0.5, b = 2;

let x=0;
for(;;) {
         if(x > 1) break;
         f = k*x+b;
         console.log(f);
         x += 0.1;
}
//#endregion
//#region 35. Оператор цикла do while
console.log("//#region 35. Оператор цикла do while");

// const PSW = "dimankan";
// let psw = null;
// do{
//     psw = prompt("Input password", "");
// }
// while(psw != PSW);

console.log("Succses input");

//#endregion
//#region 36. break all 
console.log("//#region 36. break all");
console.log("Если используются вложенные циклы, то можно к херам все остановить через break all");

let M=10, N=5;
S=0;
all: for(i = 1; i<= N; ++i){
    for(let j = 1; j <=M; ++j){
        if(j==5) break all;
        S+= i*j;
    }
}
console.log(S);
//#endregion
//#region 37. Continue
console.log("//#region 37. Continue");

for(i = -5; i<= 5; ++i){
    if(i==0) continue;
    console.log("i = " + i);
}
//#endregion
//#region 38. 
console.log("");
//#endregion
//#region 39. 
console.log("");
//#endregion

//#endregion