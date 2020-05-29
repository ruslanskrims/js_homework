/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение
const f = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Parameter should be a number type");
  }
  return arg * arg * arg;
};

console.log(f(2)); // 8

exports.f = f;
