// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);

    }
}

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrEven = arr.myFilter(value => value % 2 ===0);
arrEven.myForEach(value => console.log(value));

