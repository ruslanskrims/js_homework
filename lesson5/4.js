/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 *
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение
const f = (num) => {
  let result = null;

  if (typeof num !== "number") {
    throw new Error("Parameter should be a number type!");
  } else if (num < 1 || num > 7) {
    throw new Error("Number was used out of range of 1-7");
  }

  switch (num) {
    case 1:
      result = "Воскресенье";
      break;
    case 2:
      result = "Понедельник";
      break;
    case 3:
      result = "Вторник";
      break;
    case 4:
      result = "Среда";
      break;
    case 5:
      result = "Четверг";
      break;
    case 6:
      result = "Пятница";
      break;
    case 7:
      result = "Суббота";
      break;
  }

  return result;
};

console.log(f(1)); // Воскресенье
console.log(f(4)); // Среда

exports.f = f;
