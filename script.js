// Variables for Console.log messages 
const youWin = "You win!";
const youLose = "You lose!";
const tie = 'A tie!'


// Main play game function call
playGame();


// Computer Choice function
function getComputerChoice()  
{
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(4);
  let computerChoice = Math.floor(
    Math.random() * (maxFloored - minCeiled) + minCeiled
  );
  //Copied above function code from mdn docs
  return computerChoice;
} 

// User choice function
function getHumanChoice()
{
    let humanChoice = prompt("Press 1 for Rock, 2 for Paper, 3 for Scissors");
    return parseInt(humanChoice);
}


//Main play game function (5 rounds)
function playGame()
{
    // Variables for Game score
    let humanScore = 0;
    let computerScore = 0;

    // Call round play function 5 times    
    for(let i=1; i<=5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore === computerScore)
        console.log('The game is tied');
    else if(humanScore > computerScore)
        console.log('The user wins');
    else
        console.log('The computer wins')
        
    
    // Single round play function
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === 1 && computerChoice === 2) {
        console.log(youLose);
        computerScore++;
      } else if (humanChoice === 1 && computerChoice === 3) {
        console.log(youWin);
        humanScore++;
      } else if (humanChoice === 2 && computerChoice === 3) {
        console.log(youLose);
        computerScore++;
      }

      if (computerChoice === 1 && humanChoice === 2) {
        console.log(youWin);
        humanScore++;
      } else if (computerChoice === 1 && humanChoice === 3) {
        console.log(youLose);
        computerScore++;
      } else if (computerChoice === 2 && humanChoice === 3) {
        console.log(youWin);
        humanScore++;
      }

      if (computerChoice === humanChoice) console.log(tie);
    }
    
}



