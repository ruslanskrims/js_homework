/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, "Добро пожаловать.", 4, 5, 6];

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

const some = (arr, cb) => {
  checkForArray(arr);
  checkForFunc(cb);
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

try {
  const cb = (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === "string";
  };
  const result = some(array, cb);
  console.log(result);
} catch (error) {
  console.error(error.message);
}

exports.some = some;
