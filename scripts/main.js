let computerMove = '';
let result = '';
let playerMove = '';
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};
function updateResult(playerMove) {
    if (
        (result.wins === 0 && result.losses === 0 && result.ties === 0) ||
        !playerMove
    ) {
        document.querySelector('.result').innerHTML = '';
    } else {
        document.querySelector(
            '.result'
        ).innerHTML = `You picked <img class="move-image" src="Imgs/${playerMove}-emoji.png" alt="" />, Compuer picked <img class="move-image" src="Imgs/${computerMove}-emoji.png" alt="" /> <br/> <br/> It's a ${result}`;
    }
}
function updateScore() {
    document.querySelector(
        '.score'
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function playGame(playerMove) {
    pickComputerMove();
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'loss';
        } else {
            result = 'win';
        }
    }
    if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'win';
        } else if (computerMove === 'paper') {
            result = 'tie';
        } else {
            result = 'loss';
        }
    }
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'loss';
        } else if (computerMove === 'paper') {
            result = 'win';
        } else {
            result = 'tie';
        }
    }
    if (result === 'win') {
        score.wins++;
    } else if (result === 'loss') {
        score.losses++;
    } else {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateResult(playerMove);
    updateScore();
    // alert(
    //     `You picked ${playerMove}, Compuer picked ${computerMove},It's a ${result} \n Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    // );
}
function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 0.3) {
        computerMove = 'rock';
    } else if (randomNumber >= 0.3 && randomNumber < 0.6) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
}
