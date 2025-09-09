//#bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку
// з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але
// !!! зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
//
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


let box = document.getElementById('box');

let currentPrice = localStorage.getItem('price');
let timeUpdate = localStorage.getItem('time');

if(!currentPrice) {
    currentPrice = 100;
    timeUpdate = Date.now();
    localStorage.setItem('price', currentPrice);
    localStorage.setItem('time', timeUpdate);

} else {
    currentPrice = +currentPrice;
    timeUpdate = +timeUpdate;
    let now = Date.now();
    let sub = now - timeUpdate;
    if(sub >= 10000) {
        currentPrice += 10;
        localStorage.setItem('price', currentPrice);
        localStorage.setItem('time', now);
    }
}

box.innerText = currentPrice + ' грн';