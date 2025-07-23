// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let values of currencyValues) {
        if (values.currency === exchangeCurrency) {
            sumUAH /= values.value;
        }
    }
    return sumUAH;
}

console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));