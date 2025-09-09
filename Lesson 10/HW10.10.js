//#NKB0tgWIK1G
//
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

const array = [
    {name: 'Ivan', age: 20},
    {name: 'Petr', age: 25},
    {name: 'Vasya', age: 30},
    {name: 'Masha', age: 35},
    {name: 'Kolya', age: 40},
    {name: 'Oleg', age: 45},
    {name: 'Nikita', age: 50},
    {name: 'Vlad', age: 55},
    {name: 'Vladimir', age: 60},
    {name: 'Vladislav', age: 65},
    {name: 'Vladislav', age: 70},
    {name: 'Vladislav', age: 75},
    {name: 'Vladislav', age: 80},
    {name: 'Vladislav', age: 85},
    {name: 'Vladislav', age: 90},
    {name: 'Vladislav', age: 95},
    {name: 'Vladislav', age: 100},
    {name: 'Vladislav', age: 105},
    {name: 'Vladislav', age: 110},
    {name: 'Vladislav', age: 115},
    {name: 'Masha', age: 35},
    {name: 'Kolya', age: 40},
    {name: 'Oleg', age: 45},
    {name: 'Nikita', age: 50},
    {name: 'Vlad', age: 55},
    {name: 'Vladimir', age: 60},
    {name: 'Vladislav', age: 65},
    {name: 'Vladislav', age: 70},
    {name: 'Vladislav', age: 75},
    {name: 'Vladislav', age: 80},
    {name: 'Nikita', age: 50},
    {name: 'Vlad', age: 55},
    {name: 'Vladimir', age: 60},
    {name: 'Vladislav', age: 65},
    {name: 'Vladislav', age: 70},
    {name: 'Vladislav', age: 75},
    {name: 'Vladislav', age: 80},
    {name: 'Vladislav', age: 85},
    {name: 'Vladislav', age: 90},
    {name: 'Vladislav', age: 95},
    {name: 'Vladislav', age: 100},
    {name: 'Vladislav', age: 105},
    {name: 'Vladislav', age: 110},
    {name: 'Vladislav', age: 115},
    {name: 'Masha', age: 35},
    {name: 'Kolya', age: 40},
    {name: 'Oleg', age: 45},
    {name: 'Nikita', age: 50},
    {name: 'Vlad', age: 55},
    {name: 'Vladimir', age: 60},
    {name: 'Vladislav', age: 70},
    {name: 'Vladislav', age: 75},
    {name: 'Vladislav', age: 80},
    {name: 'Nikita', age: 50},
    {name: 'Vlad', age: 55},
    {name: 'Vladimir', age: 60},
    {name: 'Vladislav', age: 65},
    {name: 'Vladislav', age: 70},
    {name: 'Vladislav', age: 75},
    {name: 'Vladislav', age: 80},
    {name: 'Vasya', age: 30},
    {name: 'Masha', age: 35},
    {name: 'Kolya', age: 40},
    {name: 'Oleg', age: 45},
    {name: 'Nikita', age: 50},
    {name: 'Vlad', age: 55},
    {name: 'Vladimir', age: 60},
    {name: 'Vladislav', age: 65},
    {name: 'Vladislav', age: 70},
    {name: 'Vladislav', age: 75},
    {name: 'Vladislav', age: 80},
    {name: 'Vasya', age: 30},
    {name: 'Masha', age: 35},
    {name: 'Kolya', age: 40},
    {name: 'Oleg', age: 45},
    {name: 'Nikita', age: 50},
    {name: 'Vlad', age: 55},
    {name: 'Vladimir', age: 60},
    {name: 'Vladislav', age: 65},
    {name: 'Vladislav', age: 70},
    {name: 'Ivan', age: 20},
    {name: 'Petr', age: 25},
    {name: 'Vasya', age: 30},
    {name: 'Masha', age: 35},
    {name: 'Kolya', age: 40},
    {name: 'Oleg', age: 45},
    {name: 'Nikita', age: 50},
    {name: 'Vlad', age: 55},
    {name: 'Vladimir', age: 60},
    {name: 'Vladislav', age: 65},
    {name: 'Vladislav', age: 70},
    {name: 'Vladislav', age: 75},
    {name: 'Vladislav', age: 80},
    {name: 'Vladislav', age: 85},
    {name: 'Vladislav', age: 90},
    {name: 'Vladislav', age: 95},
    {name: 'Vladislav', age: 100},
    {name: 'Vladislav', age: 105},
    {name: 'Vladislav', age: 110},
    {name: 'Vladislav', age: 115}
];

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let container = document.getElementById('obj');

let currentPage = 1;
const itemPerPage = 10;
const totalPages = Math.ceil(array.length / itemPerPage);

function showPage(page) {
    container.innerHTML = '';
    let start = (page - 1) * itemPerPage;
    let end = start + itemPerPage;
    let result = array.slice(start, end);
    for (let item of result) {
        let div = document.createElement('div');
        div.innerText = item.name + ' ' + item.age;
        container.appendChild(div);
    }
};

next.addEventListener('click', () => {
    if(currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

prev.addEventListener('click', () => {
    if(currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

showPage(currentPage);