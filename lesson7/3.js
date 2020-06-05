/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
const createArray = (receiver, amount) => {
  if (
    typeof receiver !== "number" &&
    typeof receiver !== "string" &&
    typeof receiver !== "object" &&
    !Array.isArray(receiver)
  ) {
    throw new Error("Parameter should be number, string, object, or an array");
  }
  if (typeof amount !== "number") {
    throw new Error("Should be a number");
  }

  return new Array(amount).fill(receiver);
};

try {
  const result = createArray("x", 5);
  console.log(result); // [ x, x, x, x, x ]
} catch (error) {
  console.error(error.message);
}

exports.createArray = createArray;
