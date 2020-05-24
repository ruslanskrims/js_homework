/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */
const today = new Date();
const lastDayOfMonth = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();
const totalDaysLeft = lastDayOfMonth - today.getDate();

// Решение
const person = {
  get salary() {
    return totalDaysLeft > 20 ? "Good salary" : "Bad salary";
  },
};

console.log(person.salary); // Bad salary
exports.person = person;
