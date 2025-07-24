// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

const getArray = arr => {
    document.write(`<ul>`)
    for (item of arr) {
        document.write(`
        <li>${item}</li>
        `)
    }
    document.write(`</ul>`)
}

getArray([1, 'Hello', true, 20]);