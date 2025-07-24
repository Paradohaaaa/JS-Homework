// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

const getParagraph = (text) => {
    document.write(`
    <p>${text}</p>
    `);
}

getParagraph('Hello world!');