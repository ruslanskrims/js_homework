//////
// a = 7;
// b = 11;
//не создавая 3 переменную
var a = 11;
var b = 7;

//Решение
a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a} \nb = ${b}`);
//или
// b = [a, (a = b)][0];
// console.log(`a = ${a} \nb = ${b}`);
