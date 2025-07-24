// – створити функцію, яка приймає масив та виводить кожен його елемент

const getArray = (arr) => {
    for (item of arr) {
        console.log(item);
    }
}

getArray([1, 2, 3, 4, 5]);