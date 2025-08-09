// описати колоду карт (від 6 до туза без джокерів).
// Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
//
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

const cardSuit = ["spade", "diamond", "heart", "clubs"];
const cardValue = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let cards = [];
for (const suit of cardSuit) {
    for (const value of cardValue) {
        let color = "";
        if (suit === "spade" || suit === "clubs") {
            color = "black";
        }
        if (suit === "heart" || suit === "diamond") {
            color = "red";
        }
        cards.push({cardSuit: suit, value: value, color: color});
    }
}

let spadeAce = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);
let six = cards.filter(card => card.value === 6);
console.log(six);
let red = cards.filter(card => card.color === "red");
console.log(red);
let diamond = cards.filter(card => card.cardSuit === "diamond");
console.log(diamond);
let clubs = cards.filter(card => cardValue.indexOf(card.value) >= cardValue.indexOf('9') && card.cardSuit === "clubs");
console.log(clubs);


// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
//
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let cardsReduce = cards.reduce((acc, card) => {
    if(card.cardSuit === 'spade') {
        acc.spades.push(card);
    } else if(card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    } else if(card.cardSuit === 'heart') {
        acc.hearts.push(card);
    } else if(card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(cardsReduce);