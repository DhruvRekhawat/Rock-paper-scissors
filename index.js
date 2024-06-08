const playerEl = document.getElementById('player')
const computerEl = document.getElementById('computer')
const resultEl = document.getElementById('result')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const randomBtn = document.getElementById('randomBtn')
const randomNum = document.getElementById('randomNum')
const drawsEl = document.getElementById('draw')
const playerWinEl = document.getElementById('playerWin')
const computerWinEl = document.getElementById('computerWin')

let playerChoice = ""
let computerChoice = " "
let result = " "
let draws = 0;
let playerWins = 0;
let computerWins = 0;
function computerChoose(){
    let randomNum = Math.floor(Math.random()*3)+1;
    
    switch(randomNum){
        case 1:
            computerChoice = "Rock"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissor"
            break;
    }
    computerEl.textContent = `Computer : ${computerChoice}`

}

function checkResult(){
    if(playerChoice === computerChoice){
        result = "Draw!"
    }
    else if( playerChoice === "Rock" && computerChoice === "Scissor"){
        result = "Player Wins!"

    }
    else if( playerChoice === "Paper" && computerChoice === "Rock"){
        result = "Player Wins!"
    }
    else if( playerChoice === "Rock" && computerChoice === "Paper"){
        result = "Computer Wins!"
    }
    else if( playerChoice === "Scissor" && computerChoice === "Paper"){
        result = "Player Wins!"
    }
    else if( playerChoice === "Paper" && computerChoice === "Scissor"){
        result = "Computer Wins!"
    }
    else if( playerChoice === "Scissor" && computerChoice === "Rock"){
        result = "Computer Wins!"
    }
    else {
        result = "Error Message : Check Your Code"
    }

    resultEl.innerText = `Result : ${result}`
    
    if(result === "Draw!"){
        draws++;
    }
    else if(result==="Player Wins!"){
        playerWins++;
    }
    else if( result=== "Computer Wins!"){
        computerWins++;
    }
    else{
        alert('Error in counting wins')
    }

    drawsEl.innerText = `Draws : ${draws}`
    playerWinEl.innerText = `Player Won : ${playerWins}`
    computerWinEl.innerText = `Computer Won : ${computerWins}`


}



rockBtn.addEventListener('click',()=>{
    playerChoice = "Rock";
    playerEl.innerText = `Player: ${playerChoice}`;
    computerChoose()
    checkResult()
})
scissorBtn.addEventListener('click',()=>{
    playerChoice = "Scissor";
    playerEl.innerText = `Player: ${playerChoice}`;
    computerChoose()
    checkResult()
})
paperBtn.addEventListener('click',()=>{
    playerChoice = "Paper";
    playerEl.innerText = `Player: ${playerChoice}`;
    computerChoose()
    checkResult()
})









































// const count = document.getElementById('count')
// const addition = document.getElementById('add')
// const subtraction = document.getElementById('subtract')
// let counter = 0;
// function add(){
//     counter = counter + 1;
//     count.innerText = `count is : ${counter}`
// }
// function sub(){
//     counter = counter - 1;
//     count.innerText = `count is : ${counter}`
// }


// addition.addEventListener('click',add)
// subtraction.addEventListener('click',sub)


