let humanScore = 0;
let computerScore = 0;
let computerNumber= 0;


// Get a random number from 0-2 including 0. 
function getComputerChoice(){
    return Math.floor(Math.random()* 3);
    
}

const options = ["rock", "paper", "scissor"];

function getHumanChoice(){
   let userResponse = "";
   // Not allowing weird responses ; Second option checks if the value exists, if it doesn't returns -1. Not required but it was a test of skills.
   while(userResponse === "" || options.indexOf(userResponse) === -1){
    userResponse = prompt("What are you choosing? Options available: rock ; paper ; scissor");
}
return userResponse;
   
}

function convertComputerChoice(){
    const resultFromComputer = getComputerChoice();
    if (resultFromComputer === 0){
        return "paper";
    }
    else if (resultFromComputer === 1){
        return "scissor";
    }
    else {
        return "rock";
    }



}

function convertHumanChoice(){
    const resultFromHuman = getHumanChoice();
    return resultFromHuman.toLowerCase();
}




function playRound(humanSelection, computerSelection){
    
    if (humanSelection === "rock" && computerSelection === "paper" ){
      // Computer wins 
        console.log(`Terminator Wins!`)
        return "computer";

    }

    else if(humanSelection === "rock" && computerSelection === "scissor" ){
         // Human  wins 
         console.log(`Human Wins!`);
         return "human";
    }

    else if(humanSelection === "paper" && computerSelection === "scissor"){
        // Computer  wins 
        console.log(`Terminator Wins!`)
        return "computer";

    }
    else if(humanSelection === "paper" && computerSelection === "rock"){
         // Human  wins 
         console.log(`Human Wins!`);
         return "human";
    }
    else if(humanSelection === "scissor" && computerSelection === "paper"){
        // Human  wins 
        console.log(`Human Wins!`);
        return "human";
        
    }
    else if(humanSelection === "scissor" && computerSelection === "rock"){
         // Computer   wins 
         console.log(`Terminator Wins!`)
         return "computer";
    }
    else if (humanSelection === computerSelection){
        return console.log(`It's a DRAW!`);
    } 
    else{
        console.log(`Your value "${humanSelection}" is invalid. Please type in the right word`)
    }
   

}


function playGame(times){

    // Probably more variables than I need - Went a bit psycho 
    let counter = 0;
    let humanScore = 0;
    let computerScore = 0;
    
    // The Game Engine... bahahaha 
 while(counter < times){
    const humanSelection =convertHumanChoice();
    const computerSelection = convertComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    
    if (result === "human"){
        humanScore += 1;
    }
    else if (result === "computer"){
        computerScore += 1;
    }
    else {
        computerScore += 1;
        humanScore += 1;
    }
    counter += 1;
   
    // Designer Choice - Very useful to debug with this options in place 
    console.log(`Round ${counter} Overview | Choice: ${humanSelection} Human :${humanScore}: | Choice: ${computerSelection} Terminator :${computerScore}:`);
 }
    // Everyone loves some good analytics don't they 
 console.log(`Final Score : Human ${humanScore} | Terminator ${computerScore}`);

}



