let string = 'some test string';
// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// 1. Получить первую и последнюю буквы строки
let firstLetter = string[0];
let lastLetter = string[string.length - 1];

console.log(firstLetter, lastLetter);

// 2. Сделать первую и последнюю буквы в верхнем регистре
value = `${string[0].toUpperCase()}${string.slice(1, string.length - 1)}${string[string.length - 1].toUpperCase()}`

console.log(value);

// 3. Найти положение слова ‘string’ в строке
value = string.indexOf('string');

console.log(value);

// 4. Найти положение второго пробела (“вручную” ничего не считать)
let firstSpace = string.indexOf(' ');
let secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

// 5. Получить строку с 5-го символа длиной 4 буквы
value = string.substr(5, 4);

console.log(value);

// 6. Получить строку с 5-го по 9-й символы
value = string.slice(5, 10);

console.log(value);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
value = string.slice(0, -6);

console.log(value);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
let a = 20;
let b =16;
string = String(a) + String(b);

console.log(string);