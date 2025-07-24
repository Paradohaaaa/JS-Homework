// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.

const getArray = (array) => {
    for (const obj of array) {
        document.write(`<div>`)
        for (const item in obj) {
            document.write(`<p>${item}: ${obj[item]}</p>`)
        }
        document.write(`</div>`)
    }
}

getArray([{ id: 1, name: 'Ivan', age: 20 }, { id: 2, name: 'Petya', age: 25}])