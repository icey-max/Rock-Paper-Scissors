let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random()* 3);
    
}


function getHumanChoice(){
    return prompt("What are you choosing? |rock|paper|scissor");
}

const humanSelection =getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection){
    if (humanSelection === "rock" && computerSelection === "paper" ){
        return computerScore += 1; // Computer wins 
    }

    else if(humanSelection === "rock" && computerSelection === "scissor"){
        return humanScore += 1; // Human  wins 
    }

    else if(humanSelection === "paper" && computerSelection === "scissor"){
        return computerScore += 1; // Computer  wins 
    }
    else if(humanSelection === "paper" && computerSelection === "rock"){
        return humanScore += 1 // Human  wins 
    }
    else if(humanSelection === "scissor" && computerSelection === "paper"){
        return humanScore += 1 // Human  wins 
    }
    else if(humanSelection === "scissor" && computerSelection === "rock"){
        return humanScore += 1 // Computer   wins 
    }

    else{
        return console.log("Draw")
    }



}

