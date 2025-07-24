// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const arr of currencyValues) {
      if (arr.currency === exchangeCurrency) {
          return sumUAH / arr.value;
      }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));