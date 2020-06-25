/**
 * Задача 4.
 *
 * Напишите функцию createLogger, которая возвращает объект с двумя методами: call и print.
 *
 * Метод call обладает одним обязательным параметром с типом function.
 * Вызов метода call вызывает функцию, переданную методу call в качестве первого аргумента.
 * Все остальные аргументы метода call, кроме первого (который функция),
 * передаются в качестве аргументов этой-же функции (из первого аргумента).
 *
 * Результат каждого вызова функции из первого аргумента метода call нужно сохранять.
 * Вызовы должны сохранятся в массиве.
 *
 * Каждый вызов должен быть объектом с тремя обязательными свойствами:
 * - name — это название функции;
 * - in — хранит массив входящих параметров;
 * - out — хранит то, что функция возвращает.
 *
 * Метод print возвращает массив с историей вызовов функций из первого аргумента метода `call`.
 *
 * Условия:
 * - Если метод call кроме коллбека в первом аргументе не принимает больше ничего, то в свойство in нужно записать пустой массив;
 * - Если функция ничего не возвращает то в out записывается undefined.
 *
 * Генерировать ошибку, если:
 * - В качестве первого аргумента методу call была передана не функция.
 */

// Решение
const checkForFunc = (func) => {
  if (typeof func !== "function") {
    throw new Error("First parameter should be a function");
  }
};
const createLogger = () => {
  const logsArr = [];

  return {
    call: (cb, ...rest) => {
      checkForFunc(cb);
      const result = cb(...rest);
      const object = {
        name: cb.name,
        in: rest,
        out: result,
      };

      logsArr.push(object);
      return result;
    },
    print: () => {
      return logsArr;
    },
  };
};

const returnIdentity = (n) => n;
const sum = (a, b) => a + b;
const returnNothing = () => {};

const logger1 = createLogger();
console.log(logger1.call(returnIdentity, 1)); // 1
console.log(logger1.call(sum, 1, 2)); // 3
console.log(logger1.print()); // [ { name: 'returnIdentity', in: [ 1 ], out: 1 }, { name: 'sum', in: [ 1, 2 ], out: 3 } ]

const logger2 = createLogger();
console.log(logger2.call(sum, 3, 4)); // 7
console.log(logger2.call(returnIdentity, 9)); // 9
console.log(logger2.call(returnNothing)); // undefined
console.log(logger2.print()); // [ { name: 'sum', in: [ 3, 4 ], out: 7 }, { name: 'returnIdentity', in: [ 9 ], out: 9 }, { name: 'returnNothing', in: [], out: undefined } ]

exports.createLogger = createLogger;
