/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение
const forEach = (arr, cb) => {
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

  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
};

const result = forEach(array, (item, idx, arrRef) => {
  console.log(`Item : ${item}, Index: ${idx}, Array Reference: ${arrRef}`);
});
console.log(result); // undefined

exports.forEach = forEach;
