/**
 * Задача 3.
 *
 * Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
 * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
 *
 * После отлова ошибки перейдите к выполнению следующего коллбека.
 *
 * Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
 * - свойство `value` содержит результат вычисления всех функций из цепочки;
 * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
 *     - index — индекс коллбека, на котором ошибка была возбуждена;
 *     - name — имя ошибки;
 *     - message — сообщение ошибки.
 *
 * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
 *
 * Поэтому, для продолжения цепочки выполнения
 * необходимо брать результат последней успешно выполненной функции-коллбека.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией (в этой задаче, этой ошибкой нужно именно сломать скрипт, отлавливать её не нужно).
 */

// Решение
const checkForFunction = (func) => {
  if (typeof func !== "function") {
    throw new Error("All arguments should be a function!");
  }
};
const isUndefined = (param, index) => {
  if (param === undefined) {
    throw new Error(`callback at index ${index} did not return any value.`);
  }
};

const calculateAdvanced = (...rest) => {
  for (const func of rest) {
    checkForFunction(func);
  }

  const errors = [];
  const value = rest.reduce((acc, func, index) => {
    try {
      isUndefined(func(acc), index);

      return (acc = func(acc));
    } catch (error) {
      errors.push({ index: index, name: error.name, message: error.message });
      return acc;
    }
  }, null);

  return { value, errors };
};

const result = calculateAdvanced(
  () => {},
  () => {
    return 7;
  },
  () => {},
  (prevResult) => {
    return prevResult + 4;
  },
  () => {
    throw new RangeError("Range is too big.");
  },
  (prevResult) => {
    return prevResult + 1;
  },
  () => {
    throw new ReferenceError("ID is not defined.");
  },
  (prevResult) => {
    return prevResult * 5;
  }
);

console.log(result);

// Функция вернёт:
// { value: 60,
//     errors:
//      [ { index: 0,
//          name: 'Error',
//          message: 'callback at index 0 did not return any value.' },
//        { index: 2,
//          name: 'Error',
//          message: 'callback at index 2 did not return any value.' },
//        { index: 4, name: 'RangeError', message: 'Range is too big.' },
//        { index: 6,
//          name: 'ReferenceError',
//          message: 'ID is not defined.' } ] }

exports.calculateAdvanced = calculateAdvanced;
