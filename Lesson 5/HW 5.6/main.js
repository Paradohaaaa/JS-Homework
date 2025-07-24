// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const getList = (text) => {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
    `)
}

getList('Hello world!');
