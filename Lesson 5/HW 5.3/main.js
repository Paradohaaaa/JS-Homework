// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

const getArea = (h, r) => 2 * Math.PI * r * r + 2 * Math.PI * r * h;

console.log(getArea(10, 5));;