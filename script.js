let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");

const genChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const rndINx = Math.floor(Math.random() * 3);
    return options[rndINx];
}

const draw = ()=>{
    msg.innerHTML = "Game was Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        userpara.innerHTML = userScore;
        msg.innerHTML = "You Win!" ;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comppara.innerHTML = compScore;
        msg.innerHTML = "You Lose";
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userChoice)=>{
    const compChoice1 = genChoice()

    if(userChoice === compChoice1){
        draw();
    }else{
        let userwin=true;
        if(userChoice === "rock"){
            userwin = compChoice1 ==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userwin = compChoice1 === "scissor"? false:true;
        }else{
            userwin = compChoice1 === "rock"? false:true;
        }
        showWinner(userwin);
}

}


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked ",userChoice);
        playgame(userChoice);
    })
});
