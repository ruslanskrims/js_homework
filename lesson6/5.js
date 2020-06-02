/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
const reduce = (arr, cb, init = 0) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("First argument should be an array");
    }
    if (typeof cb !== "function") {
      throw new Error("Second argument should be a function");
    }
  } catch (error) {
    console.log(err.message);
    return null;
  }
  let result = init;
  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i], i, arr);
  }
  return result;
};

const result = reduce(
  array,
  (accumulator, element, index, arrayRef) => {
    console.log(`${index}:`, accumulator, element, arrayRef);

    return accumulator + element;
  },
  INITIAL_ACCUMULATOR
);

console.log(result); // 21

exports.reduce = reduce;
