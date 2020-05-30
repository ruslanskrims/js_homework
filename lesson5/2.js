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

const f = (...args) => {
  let result = null;

  for (let arg of args) {
    try {
      if (typeof arg !== "number") {
        throw new Error("Arguments must have numbers");
      }
    } catch (err) {
      throw new Error(`${err.message}`);
    }
    result += arg;
  }
  return result;
};

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
