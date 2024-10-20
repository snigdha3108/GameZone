let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    
    msg.innerText = "Draw -_-";
    msg.style.background = "#eddcd2";
};

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
       
        msg.innerText = `You Won :) Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        
        msg.innerText = `You Lost :( Comp's ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
};

const playgame = (userChoice) => {

    userChoice = userChoice.toLowerCase();
    // Convert user choice to lowercase for comparison

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
