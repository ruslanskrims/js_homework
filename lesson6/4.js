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
const some = (arr, cb) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("First argument should be an array");
    }
    if (typeof cb !== "function") {
      throw new Error("Second argument should be a function");
    }
  } catch (err) {
    console.log(err.message);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

const result = some(array, (element, index, arrayRef) => {
  console.log(`${index}:`, element, arrayRef);

  return typeof element === "string";
});

console.log(result); // true

exports.some = some;
