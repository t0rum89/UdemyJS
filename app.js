// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
value = Number(Math.PI.toFixed(2));
console.log(value);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
value = Number((Math.random() * 10).toFixed(2));
console.log(value);

// b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
let x = 222;
value = Math.round(Math.random() * x);
console.log(value);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
value = 0.6 + 0.7;
value = parseFloat(value.toFixed(1));
console.log(value);

// 5. Получить число из строки ‘100$’
value = '100$'
value = parseFloat(value);
console.log(value);
