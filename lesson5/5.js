/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
const isPositive = (num) => {
  if (typeof num !== "number") {
    throw new Error("Parameter should be a number type!");
  }

  return num <= 0 ? false : true;
};

console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true
console.log(isPositive(0)); // false

exports.isPositive = isPositive;
