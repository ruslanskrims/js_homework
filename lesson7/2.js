/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

const array1 = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
];

const checkArrayType = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument should be an array");
  }
};
const checkNum = (num) => {
  if (typeof num !== "number") {
    throw new Error("There should be a number or array");
  }
};

const collect = (arr) => {
  checkArrayType(arr);
  const flattedItems = arr.flat(Infinity);
  const result = flattedItems.reduce((prev, current) => {
    checkNum(current);
    return prev + current;
  }, 0);

  return result;
};

try {
  console.log(collect(array1)); // 12
  const array2 = [[[[[1, 2]]]]];
  console.log(collect(array2)); // 3

  const array3 = [[[[[1, 2]]], 2], 1];
  console.log(collect(array3)); // 6

  const array4 = [[[[[]]]]];
  console.log(collect(array4)); // 0

  const array5 = [[[[[], 3, 4, [10]]]]];
  console.log(collect(array5)); // 17
} catch (error) {
  console.error(error.message);
}

exports.collect = collect;
