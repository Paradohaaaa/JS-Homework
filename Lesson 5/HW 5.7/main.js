// – створити функцію, яка створює ul з трьома елементами li.
// - Текст li задати через аргумент всім однаковий.
// - Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


const getList = (text, number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

getList('Hello world!', 6);