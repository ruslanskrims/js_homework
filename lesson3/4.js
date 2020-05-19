/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`,
 * которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

const PRICE = "$120";

// Решение
const extractCurrencyValue = (source) => {
  if (typeof source !== "string") {
    throw new Error("Should be a String type parameter");
    source = null;
  } else {
    source = Number(source.slice(1));
  }
  return source;
};

const result = extractCurrencyValue(PRICE); // 120
console.log(result); //120
console.log(typeof result); //number

exports.extractCurrencyValue = extractCurrencyValue;
