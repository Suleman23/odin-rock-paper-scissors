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


//Main play game function
function playGame()
{
    // Variables for Game score
    let humanScore = 0;
    let computerScore = 0;

    // DOM variables for the buttons
    let rockBtn = document.querySelector(".rockBtn");
    let paperBtn = document.querySelector(".paperBtn");
    let scissorBtn = document.querySelector(".scissorBtn");

    // Event listeners for the buttons
    rockBtn.addEventListener('click', () => {
      const computerSelection = getComputerChoice();
      playRound(1, computerSelection);
    })
    
    paperBtn.addEventListener('click', () => {
      const computerSelection = getComputerChoice();
      playRound(2, computerSelection);
    })
    
    scissorBtn.addEventListener('click', () => {
      const computerSelection = getComputerChoice();
      playRound(3, computerSelection);
    })

    // Variable to dislay results to the web page
    let resultDiv = document.querySelector(".results");

    // function to append results to the web page
    function appendResult(result){
      let p = document.createElement("p");
      let text = document.createTextNode(result);
      p.appendChild(text);
      resultDiv.appendChild(p);
    }

    if (humanScore > computerScore) 
      appendResult("The user wins");
    else if(humanScore < computerScore)
      appendResult("The computer wins");
    
        
    
    // Single round play function
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === 1 && computerChoice === 2) {
        appendResult(youLose);
        computerScore++;
      } else if (humanChoice === 1 && computerChoice === 3) {
        appendResult(youWin);
        humanScore++;
      } else if (humanChoice === 2 && computerChoice === 3) {
        appendResult(youLose);
        computerScore++;
      }

      if (computerChoice === 1 && humanChoice === 2) {
        appendResult(youWin);
        humanScore++;
      } else if (computerChoice === 1 && humanChoice === 3) {
        appendResult(youLose);
        computerScore++;
      } else if (computerChoice === 2 && humanChoice === 3) {
        appendResult(youWin);
        humanScore++;
      }

      if (computerChoice === humanChoice) 
        appendResult(tie);

      appendResult(`User Score: ${humanScore}`);
      appendResult(`Computer Score: ${computerScore}`)

      if(humanScore === 5)
        appendResult('User Wins the game');
      else if(computerScore === 5)
        appendResult('Computer wins the game');
        
    }

    
    
}



