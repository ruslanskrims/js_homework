/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
const checkSpam = (source, example) => {
  if (typeof source !== "string" || typeof example !== "string") {
    throw new Error("Both parameters should be a String type");
  }
  const s = source.toLowerCase();
  const e = example.toLowerCase();
  const result = s.includes(e);
  return result;
};

console.log(checkSpam("pitterXXX@gmail.com", "xxx")); // true
console.log(checkSpam("pitterxxx@gmail.com", "XXX")); // true

exports.checkSpam = checkSpam;
