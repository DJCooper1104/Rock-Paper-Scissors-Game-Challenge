let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getEmoji(choice) {
    const emojis = {
        'rock': '✊',
        'paper': '✋',
        'scissors': '✌️'
    };
    return emojis[choice];
}

function play(playerChoice) {
    const computerChoice = computerPlay();
    
    document.getElementById('player-move').textContent = 
        `Your move: ${getEmoji(playerChoice)} ${playerChoice}`;
    document.getElementById('computer-move').textContent = 
        `Computer's move: ${getEmoji(computerChoice)} ${computerChoice}`;

    // Determine winner
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }

    // Update score and result
    document.getElementById('result').textContent = result;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = '0';
    document.getElementById('computer-score').textContent = '0';
    document.getElementById('result').textContent = 'Choose your move!';
    document.getElementById('player-move').textContent = 'Your move: -';
    document.getElementById('computer-move').textContent = "Computer's move: -";
}
