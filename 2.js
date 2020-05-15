// Перепишите `if..else` с использованием нескольких операторов `?`.
// Для читаемости — оформляйте код в несколько строк.

////////////////// Задание //////////////////
// var message;

// if (login == 'Pitter') {
//   message = 'Hi';
// } else if (login == 'Owner') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'unknown';
// } else {
//   message = '';
// }

////////////////// Решение //////////////////
let message;
let login = "Pitter";
login == "Pitter"
  ? (message = "Hi")
  : login == "Owner"
  ? (message = "Hello")
  : login == ""
  ? (message = "Unknown")
  : (message = "");

console.log(message);
