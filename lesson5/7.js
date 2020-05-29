/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение
const getDivisors = (num) => {
  const arr = [];

  if (typeof num !== "number") {
    throw new Error("Parameter should be a number type!");
  } else if (num < 1) {
    throw new Error("Parameter should not be less than 1");
  }

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors(20)); // [1, 2, 4, 5, 10, 20]

exports.getDivisors = getDivisors;
