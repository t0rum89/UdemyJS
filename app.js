// 1. Создать объект с полем product, равным ‘iphone’
const sale = {
  product: 'iphone'
}

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
sale.price = 1000;
sale.currency = 'dollar'

// 3. Добавить поле details, которое будет содержать объект с полями model и color
// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
sale.details = {
  model: 12,
  color: 'black'
}



let value;
value = sale.details.color;

console.log(value);
console.log(sale);