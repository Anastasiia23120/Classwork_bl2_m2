// const minutes = -15;

// if (minutes >= 0 && minutes < 15) {
//   console.log('перша чверть години');
// } else if (minutes >= 15 && minutes < 30) {
//   console.log('друга чверть години');
// } else if (minutes >= 30 && minutes < 45) {
//   console.log('третя чверть години');
// } else if (minutes >= 45 && minutes < 60) {
//   console.log('четверта чверть години');
// } else {
//   console.log('некоректна кількість хвилин!');
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/
// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

// switch (number) {
//   case 0: {
//     console.log('Ви ввели число 0');
//     break;
//   }
//   case 1: {
//     console.log('Ви ввели число 1');
//     break;
//   }
//   case 2:
//   case 3: {
//     console.log('Ви ввели число 2, а може й 3');
//     break;
//   }
//   default: {
//     console.log('Ви ввели якесь інше число');
//   }
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
*/

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = isFriend && isOnline && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
? Що буде виведено в консоль?
*/
// console.log(true && 3);
// 3;

// console.log(false && 3);
// false;

// console.log(true && 4 && 'kiwi');
// ('kiwi');

// console.log(true && 0 && 'kiwi');
// 0;

// console.log(true || 3);
// true;

// console.log(true || 3 || 4);
// true;

// console.log(true || false || 7);
// true;

// console.log(null || 2 || undefined);
// 2;

// console.log((1 && null && 2) > 0);
// false;

// console.log(null || (2 && 3) || 4);
// 3;
