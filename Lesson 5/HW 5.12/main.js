// – створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах

const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp;
    console.log(arr)
}

swap([1, 2, 3, 4, 5], 0, 4)