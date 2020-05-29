/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
//ES6

const f = function () {
  let result = null;

  for (let arg of arguments) {
    if (typeof arg !== "number") {
      throw new Error("Parameter should be a number type!");
    }
    result += arg;
  }
  return result;
};

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
