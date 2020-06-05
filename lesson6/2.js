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

const array = ["Доброе утро!", "Добрый вечер!!!", 3, 512, "#", "До свидания!"];

// Решение

const checkForArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("First argument should be an array!");
  }
};

const checkForFunc = (func) => {
  if (typeof func !== "function") {
    throw new Error("Second argument should be a function!");
  }
};

const filter = (arr, cb) => {
  let filteredArray = [];
  checkForArray(arr);
  checkForFunc(cb);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (cb(element, i, arr)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

try {
  const cb = (element, index, arrayRef) => {
    console.log(
      `Index: ${index}:, Element: ${element}, Array Ref: ${arrayRef}`
    );

    return element === "Добрый вечер!!!";
  };
  const filteredArray = filter(array, cb);
  console.log(filteredArray); // ['Добрый вечер!']
} catch (error) {
  console.error(error.message);
}

exports.filter = filter;
