function playRound(player, pc){
    if (player === "rock"){
        if (pc === "rock"){
            console.log("rr");
            return "It's a draw! You both drew Rock!";
        }
        else if (pc === "paper"){
            console.log("rp");
            computerScore++;
            return ("You lose! Paper beats rock!");
        }
        else{
            console.log("rs");
            playerScore++;
            return ("You win! Rock beats Scissors!");
        }
    }

    if (player === "paper"){
        if (pc === "rock"){
            console.log("pr");
            playerScore++;
            return "You win! Paper beats Rock!";
        }
        else if (pc === "paper"){
            console.log("pp");
            return ("It's a draw! You both drew Paper!");
        }
        else{
            console.log("ps");
            computerScore++;
            return ("You lose! Scissors beat Paper!");
        }
    }

    if (player === "scissors"){
        if (pc === "rock"){
            console.log("sr");
            computerScore++;
            return "You lose! Rock beats Scissors!";
        }
        else if (pc === "paper"){
            console.log("sp");
            playerScore++;
            return ("You win! Scissors beats Paper!");
        }
        else{
            console.log("ss");
            return ("It's a draw! You both drew Scissors!");
        }
    }
    return ("That's not a valid entry! You lose a round!")
}

//this allows the PC to choose rock, paper, or scissors randomly
function getComputerChoice(){
    var choices = [
        "rock",
        "paper",
        "scissors"
    ]
    let randomIndex = Math.floor(Math.random()*choices.length);
    console.log(randomIndex);
    return choices[randomIndex];
}


function game(){
    for(i = 0; i < 5; i++){
        
        let computerSelection = getComputerChoice();
        console.log("PC chose: " + computerSelection);
        alert(playRound(playerSelection.toLowerCase(), computerSelection));
    }

    if(playerScore>computerScore)
        alert("You win! " + playerScore + ":" + computerScore);
    else if(playerScore<computerScore)
        alert("You lose! " + playerScore + ":" + computerScore);
    else 
        alert("It's a draw! " + playerScore + ":" + computerScore);
}
let playerScore = 0;
let computerScore = 0;

game();