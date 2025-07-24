function swap(array, index1, index2) {
    for (let i = 0; i < array.length; i++) {
        if (i === index1) {
            array[i] = array[index2];
        }
        if (i === index2) {
            array[i] = array[index1];
        }
    }
    return array;
}

console.log(swap([ [1, 2, 3, 4, 5], 0, 4]));