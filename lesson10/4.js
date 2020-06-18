/**
 * Задача 4.
 *
 * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске compose() последовательно запускает коллбек-функции из аргументов.
 *
 * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 *
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Функция compose() возвращает ещё одну функцию с одним параметром.
 * Значение, переданное этой функции в качестве аргумента должно стать
 * параметром первой коллбек-функции в цепочке выполнения функции compose().
 *
 * Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией;
 * - Любая функция из аргументов не вернула значение.
 *
 * Заметка:
 * Если функции, которая является возвращаемым значением compose()
 * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

// Решение
const checkForFunction = (func) => {
  if (typeof func !== "function") {
    throw new Error("All arguments should be a function!");
  }
};

const isUndefined = (param, index) => {
  if (param === undefined) {
    throw new Error("Function did'nt return any value.");
  }
};

const compose = (...rest) => {
  for (const func of rest) {
    checkForFunction(func);
  }

  const result = rest.reduceRight((acc, func) => {
    isUndefined(func(acc));

    return (acc = func(acc));
  }, "");

  return (str = "") => {
    return str + result;
  };
};

const result1 = compose(
  (prevResult) => prevResult + "o",
  (prevResult) => prevResult + "l",
  (prevResult) => prevResult + "l",
  (prevResult) => prevResult + "e"
)("h");
const result2 = compose(
  (prevResult) => prevResult + "o",
  (prevResult) => prevResult + "l",
  (prevResult) => prevResult + "l",
  (prevResult) => prevResult + "e",
  () => "h"
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'

exports.compose = compose;
