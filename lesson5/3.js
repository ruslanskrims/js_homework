/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
const f = (first, second, third) => {
  if (
    typeof first !== "number" ||
    typeof second !== "number" ||
    typeof third !== "number"
  ) {
    throw new Error("Parameters should be a number type!");
  }
  return (first - second) / third;
};

console.log(f(9, 3, 2)); // 3
console.log(f(10, 2, 2)); // 4

exports.f = f;
