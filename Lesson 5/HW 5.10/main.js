// – створити функцію, яка повертає найменше число з масиву

const minArray = (arr) => {
    let min = arr[0]
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    console.log(min)
}

minArray([10, 23, 3, 42, 5, 1]);