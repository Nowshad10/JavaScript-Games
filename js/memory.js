const cardArray = [
    {
        name: 'fries',
        img: '../images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: '../images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: '../images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: '../images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: '../images/milkshake.png'
    },
    {
        name: 'pizza',
        img: '../images/pizza.png'
    },
    {
        name: 'fries',
        img: '../images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: '../images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: '../images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: '../images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: '../images/milkshake.png'
    },
    {
        name: 'pizza',
        img: '../images/pizza.png'
    }

];

// sorts array randomly
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const cardsChosen = [];

function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '../images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard();

function flipCard() {
    console.log(cardArray);
    let cardId = this.getAttribute('data-id');
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    console.log('clicked', cardId);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);
};
