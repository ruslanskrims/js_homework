/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом,
 * чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
const truncate = (string, maxLength) => {
  if (typeof string !== "string") {
    throw new Error("First parameter should be a String type");
  }
  if (typeof maxLength !== "number") {
    throw new Error("Second parameter should be a number type");
  }
  const result =
    string.length > maxLength ? string.slice(0, maxLength - 3) + `...` : string;
  return result;
};

const result = truncate("Вот, что мне хотелось бы сказать на эту тему:", 21); // 'Вот, что мне хотел...'
console.log(result);

exports.truncate = truncate;
