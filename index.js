const container = document.getElementById('container');
let playerScore = 0;
let computerScore = 0;

//create and append Rock button
const rock = document.createElement("button");
rock.innerText = 'Rock';
container.appendChild(rock);

//create and append Paper button
const paper = document.createElement("button");
paper.innerText = "Paper";
container.appendChild(paper);

//create and append Scissors button
const scissors = document.createElement("button");
scissors.innerText = "Scissors";
container.appendChild(scissors);

//keeps track of who played what
const div1 = document.createElement("div");
div1.innerText = "";
container.appendChild(div1);

//keeps track of score
const div = document.createElement("div");
div.innerText = "";
container.appendChild(div);


//creates eventListener that runs PlayRound() when a button is pressed, and when score of a player is 5
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(playerScore === 5)
            div1.innerText = "You Won! :)";
        else if (computerScore === 5)
            div1.innerText = "You Lost! :(";
        else{
            playRound(button.innerText.toLowerCase(), getComputerChoice());
        }
    });
    div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
});

//plays round of rock, paper, and scissors
function playRound(player, pc){
    console.log(player);
    if (player === "rock"){
        if (pc === "rock"){
            div1.innerText = "You played " + player + ", and PC played " + pc + ". It's a tie!";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
        else if (pc === "paper"){
            computerScore++;
            div1.innerText = "You played " + player + ", and PC played " + pc + ".";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
        else{
            playerScore++;
            div1.innerText = "You played " + player + ", and PC played " + pc + ".";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
    }

    if (player === "paper"){
        if (pc === "rock"){
            playerScore++;
            div1.innerText = "You played " + player + ", and PC played " + pc + ".";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
        else if (pc === "paper"){
            div1.innerText = "You played " + player + ", and PC played " + pc + ". It's a tie!";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
        else{
            computerScore++;
            div1.innerText = "You played " + player + ", and PC played " + pc + ".";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
    }

    if (player === "scissors"){
        if (pc === "rock"){
            computerScore++;
            div1.innerText = "You played " + player + ", and PC played " + pc + ".";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
        else if (pc === "paper"){
            playerScore++;
            div1.innerText = "You played " + player + ", and PC played " + pc + ".";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
        else{
            div1.innerText = "You played " + player + ", and PC played " + pc + ". It's a tie!";
            div.innerText = "Score: You - " + playerScore + ", PC - " + computerScore;
        }
    }
    return;
}

//this allows the PC to choose rock, paper, or scissors randomly
function getComputerChoice(){
    var choices = [
        "rock",
        "paper",
        "scissors"]
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}