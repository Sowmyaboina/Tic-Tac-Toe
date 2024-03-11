let boxes = document.querySelectorAll(".box");
let resetGame =document.querySelector("#reset-game");
let newGameButton = document.querySelector("#new-button");
let messageContainer = document.querySelector(".msg-container");
let message = document.querySelector("#message");
let turnO =true;//playerX,playerO

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const restGame = () => {
    turnO = true;
    enableBoxes();
    messageContainer.classList.add("hide");
};

const disableBoxes =  () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
    
const enableBoxes =  () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
    

const showWinner = (winner) => {
    message.innerText = `Congratulations , Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" &&pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }

    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {    
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

newGameButton.addEventListener("click",restGame);
resetGame.addEventListener("click",restGame);



