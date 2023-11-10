var choices = ["R", "P", "S"];

var rounds = 10;
var userScore = 0;
var computerScore = 0;
var tieScore = 0;

for (var i = 0; i < rounds; i++) {
  var userInput = prompt("Whats your choice rock(R), paper(P) or scissors(S)?");
  var computerInput = choices[Math.floor(Math.random() * choices.length)];
  //iteration 1:
  //random 0.6
  //0.6 * 3(length) = 1.8
  //floor - 1
  //choices[1]

  console.log("User input is " + userInput);
  console.log("Computer input is " + computerInput);

  if (userInput !== "R" && userInput !== "P" && userInput !== "S") {
    alert("Invalid Input! Please enter R, P or S only.");
    var userInput = prompt(
      "Try Again! Whats your choice rock(R), paper(P) or scissors(S)?"
    );
  }

  if (userInput === computerInput) {
    tieScore++;
    alert(
      "It's a tie! User input: " +
        userInput +
        " Computer input: " +
        computerInput
    );
  } else if (
    (userInput === "R" && computerInput === "P") ||
    (userInput === "S" && computerInput === "R") ||
    (userInput === "P" && computerInput === "S")
  ) {
    //user-rock computer-paper
    computerScore++;
    alert(
      "Computer wins!  User input: " +
        userInput +
        " Computer input: " +
        computerInput
    );
  } else if (
    (userInput === "R" && computerInput === "S") ||
    (userInput === "P" && computerInput === "R") ||
    (userInput === "S" && computerInput === "P")
  ) {
    //user-rock computer-scissors
    userScore++;
    alert(
      "User wins! User input: " +
        userInput +
        " Computer input: " +
        computerInput
    );
  }
}

if (computerScore > userScore) {
  confirm(
    "ENDGAME - Computer Wins! Computer scored " +
      computerScore +
      " User scored " +
      userScore +
      " Ties: " +
      tieScore
  );
} else if (computerScore < userScore) {
  confirm(
    "ENDGAME - User Wins! User scored " +
      userScore +
      " Computer scored " +
      computerScore +
      " Ties: " +
      tieScore
  );
} else {
  confirm(
    "ENDGAME - It's a Tie! Computer scored " +
      computerScore +
      " User scored " +
      userScore +
      " Ties: " +
      tieScore
  );
}
