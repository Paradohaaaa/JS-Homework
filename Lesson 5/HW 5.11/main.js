// – створити функцію sum(arr), яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = arr => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    console.log(sum)
}

sum([1, 2, 10])

