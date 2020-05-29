/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
const isEven = (num) => {
  if (typeof num !== "number") {
    throw new Error("Parameter should be a number type!");
  }

  return num % 2 === 0 ? true : false;
};

console.log(isEven(3)); // false
console.log(isEven(4)); // true

exports.isEven = isEven;
