/* Instruction pop up */
function showInstructionsPopup()
{
  var instructionsPopup = document.getElementById("instructions-popup");
  var closeButton = document.getElementById("close-button");

  // Show the instructions popup on page load
  instructionsPopup.style.display = "block";

  // Close the instructions popup when the close button is clicked
  closeButton.addEventListener("click", function() {
    instructionsPopup.style.display = "none";
  });
}

/* Instruction button */
function setupInstructionsPopup() 
{
  var instructionsButton = document.getElementById("instructions-button");
  var instructionsPopup = document.getElementById("instructions-popup");
  var closeButton = document.getElementById("close-button");

  // Show the instructions popup when the instructions button is clicked
  instructionsButton.addEventListener("click", function() {
    instructionsPopup.style.display = "block";
  });

  // Close the instructions popup when the close button is clicked
  closeButton.addEventListener("click", function() {
    instructionsPopup.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", showInstructionsPopup);
document.addEventListener("DOMContentLoaded", setupInstructionsPopup);

/* game fuction */
document.addEventListener("DOMContentLoaded", function() 
{
    var user = {
      score: 0,
      rolls: 0,
      profilePicture: "user-profile.jpg"
    };
  
    var computer = {
      score: 0,
      rolls: 0,
      profilePicture: "comp-profile.jpg"
    };
  
    var rollButton = document.getElementById("roll-button");
    rollButton.addEventListener("click", rollDice);
  
    var resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetGame);
  
    var userOutput = document.getElementById("user-score");
    var compOutput = document.getElementById("computer-score");
    var gameResult = document.getElementById("game-result");
    var rollCount  = document.getElementById("roll-count");
    var userTotalScore = document.getElementById("user-total-score");
    var compTotalScore = document.getElementById("computer-total-score");
  
    function rollDice() {
      if (user.rolls < 3 && computer.rolls < 3) 
      {
        var userDice1 = Math.floor(Math.random() * 6) + 1;
        var userDice2 = Math.floor(Math.random() * 6) + 1;
        var computerDice1 = Math.floor(Math.random() * 6) + 1;
        var computerDice2 = Math.floor(Math.random() * 6) + 1;
  
        user.rolls++;
        computer.rolls++;
  
        var userRoundScore    = calculateScore(userDice1, userDice2);
        var computerRoundScore  = calculateScore(computerDice1, computerDice2);
  
        user.score += userRoundScore;
        computer.score += computerRoundScore;
  
        rollCount.innerHTML = "Roll: " + user.rolls;

        userOutput.innerHTML += "<br>" + "User rolls: " + userDice1 + ", " + userDice2 + "<br>";
        userOutput.innerHTML += "User score: " + userRoundScore + "<br>";
        userTotalScore.innerHTML = "User total score: " + user.score;
  
        compOutput.innerHTML += "<br>" + "Computer rolls: " + computerDice1 + ", " + computerDice2 + "<br>";
        compOutput.innerHTML += "Computer score: " + computerRoundScore + "<br>";
        compTotalScore.innerHTML = "Computer total score: " + computer.score;
  
        if (user.rolls === 3 && computer.rolls === 3) 
        {
          rollButton.classList.add("disable-button")
          if (user.score > computer.score) 
          {
            userTotalScore.classList.add("winner-score");
            compTotalScore.classList.add("loser-score");
            gameResult.innerHTML = "Game Over! The winner is User";
          } 
          else if (user.score < computer.score)
          {
            compTotalScore.classList.add("winner-score");
            userTotalScore.classList.add("loser-score");
            gameResult.innerHTML = "Game Over! The winner is Computer";
          }
          else
          {
            gameResult.innerHTML = "Game Over! No winner this game lol";
          }
        }
      }
    }
  
    function calculateScore(dice1, dice2) 
    {
      if (dice1 === 1 || dice2 === 1) {
        return 0;
      } else if (dice1 === dice2) {
        return (dice1 + dice2) * 2;
      } else {
        return dice1 + dice2;
      }
    }
  
    function resetGame() 
    {
        user.score = 0;
        computer.score = 0;
        user.rolls = 0;
        computer.rolls = 0;
        userOutput.innerHTML = "";
        compOutput.innerHTML = "";
        gameResult.innerHTML = "";
        userTotalScore.innerHTML = "User's total score: " + user.score;
        compTotalScore.innerHTML = "Computer's total score: " + computer.score;
        rollCount.innerHTML = "Roll: " + user.rolls;
        userTotalScore.classList.remove("winner-score", "loser-score");
        compTotalScore.classList.remove("winner-score", "loser-score");
        rollButton.classList.remove("disable-button")
    }
});
  