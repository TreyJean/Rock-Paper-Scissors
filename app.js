let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const rand = Math.floor(Math.random() * 3);
  return choices[rand];
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  const littleU = "user".fontsize(3).sub();
  const littleC = "comp".fontsize(3).sub();
  result_p.innerHTML = `${user}${littleU} beats ${comp}${littleC}! You Win!`;

  document.getElementById(user).classList.add("green-glow");
  setTimeout(() => { document.getElementById(user).classList.remove("green-glow") }, 300); 
}

function lose(user, comp) {
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;

  const littleU = "user".fontsize(3).sub();
  const littleC = "comp".fontsize(3).sub();
  result_p.innerHTML = `${comp}${littleC} beats ${user}${littleU}! You Lose!`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(() => { document.getElementById(user).classList.remove("red-glow") }, 300);
}

function draw(choice) {
  const littleU = "user".fontsize(3).sub();
  const littleC = "comp".fontsize(3).sub();
  result_p.innerHTML = `You both played ${littleU}${choice}${littleC}! Its a Tie!`;
  document.getElementById(choice).classList.add("grey-glow");
  setTimeout(() => { document.getElementById(choice).classList.remove("grey-glow") }, 300);
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + " " + compChoice) {
    case "Rock Paper":
    case "Paper Scissors":
    case "Scissors Rock":
      lose(userChoice, compChoice); //console.log("You Lose!");
      break;
    case "Paper Rock":
    case "Scissors Paper":
    case "Rock Scissors":
      win(userChoice, compChoice); // console.log("You Win!");
      break;
    default:
      draw(userChoice); // console.log("Tie!");
      break;
  }

}

function main() {
  rock_div.addEventListener('click', function() {
    // console.log("You Clicked On Rock!");
    game("Rock");
  })

  paper_div.addEventListener('click', function() {
    // console.log("You Clicked On Paper!");
    game("Paper");
  })

  scissors_div.addEventListener('click', function() {
    // console.log("You Clicked On Scissors!");
    game("Scissors")
  })
}

main();
