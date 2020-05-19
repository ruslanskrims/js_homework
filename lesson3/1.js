/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
const upperCaseFirst = (val) => {
  if (typeof val !== "string") {
    throw new Error("Paramete must be a String type");
  }
  const result = val.charAt(0).toUpperCase() + val.slice(1);

  return result;
};
console.log(upperCaseFirst("pitter")); // Pitter
console.log(upperCaseFirst("")); // ''

exports.upperCaseFirst = upperCaseFirst;
