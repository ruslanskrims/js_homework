/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ["Доброе утро!", "Добрый вечер!", 3, 512, "#", "До свидания!"];

// Решение

const filter = (arr, cb) => {
  let filteredArr = [];
  try {
    if (!Array.isArray(arr)) {
      throw new Error("First argument should be an array!");
    }

    if (typeof cb !== "function") {
      throw new Error("Second argument should be a function!");
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }

  let res = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (cb(value, i, array)) {
      res.push(value);
    }
  }
  return res;
};

const filteredArray = filter(array, (element, index, arrayRef) => {
  console.log(`Index: ${index}:, Element: ${element}, Array Ref: ${arrayRef}`);

  return element === "Добрый вечер!";
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
