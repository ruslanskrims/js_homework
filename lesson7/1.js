/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
  false,
  "Привет.",
  2,
  "Здравствуй.",
  [],
  "Прощай.",
  {
    name: "Уолтер",
    surname: "Уайт",
  },
  "Приветствую.",
];

// Решение
const checkArrayType = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument should be an array");
  }
};

const inspect = (arr) => {
  checkArrayType(arr);

  const filteredItems = arr.filter((item) => typeof item === "string");

  return filteredItems.map((item) => item.length);
};

try {
  const result = inspect(array);
  console.log(result); // [ 7, 11, 7, 12 ]
} catch (error) {
  console.error(error.message);
}

exports.inspect = inspect;
