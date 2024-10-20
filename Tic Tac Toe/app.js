let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked.");
        
        if(turnO)
            {
                box.innerText = 'O';
                turnO=false;
            }
        else
            {
                box.innerText = 'X';
                turnO=true;
            }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText= ""
    }
}
const showWinner = (winner) => {
    msg.innerText=`Congratulations!!! ${winner} is the winner!!!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

checkWinner = () => {
    for(pattern of WinPatterns){
       
        let posVal1 = boxes[pattern[0]].innerText; 
        let posVal2 = boxes[pattern[1]].innerText; 
        let posVal3 = boxes[pattern[2]].innerText;
    
        if(posVal1 != "" && posVal2 != "" && posVal3 != "")
            {
                if(posVal1 === posVal2 && posVal2 === posVal3)
                    {
                        console.log("WINNER is ", posVal1);
                        showWinner(posVal1);
                    }
            }
    }
}

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);