const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const hiddenDiv = document.getElementById('hidden');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getResult();
    hiddenDiv.style.display = "inline-block";
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    } else if (randomNumber === 2) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    } else if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You win!'
    } else if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You lose!'
    } else if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You win!'
    } else if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You lose!'
    } else if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You lose!'
    } else {
        result = 'You win!'
    }

    resultDisplay.textContent = result;
}
