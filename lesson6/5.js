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

const reduce = (arr, cb, init = arr[0]) => {
  checkForArray(arr);
  checkForFunc(cb);
  let result = init;
  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i], i, arr);
  }
  return result;
};

try {
  const cb = (accumulator, element, index, arrayRef) => {
    console.log(`${index}:`, accumulator, element, arrayRef);

    return accumulator + element;
  };
  const result = reduce(array, cb, INITIAL_ACCUMULATOR);

  console.log(result); // 21
} catch (error) {
  console.error(error.message);
}

exports.reduce = reduce;
