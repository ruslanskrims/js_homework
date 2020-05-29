/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
let i = 0;
const f = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Parameter should be an array!");
  } else if (!arr.length) {
    throw new Error("Should not be an empty array!");
  }
  if (i < arr.length) {
    console.log(arr[i]);
    i++;
    f(arr);
  }
};
f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
