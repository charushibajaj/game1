let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user_score");
const compScorepara = document.querySelector("#comp_score");

const gencompchoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randomindex = Math.floor(Math.random() * options.length);
    return options[randomindex];
}

const drawgame = () => {
    console.log("It is a draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#421609";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You Lose. ${compchoice} Beats Your ${userchoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playgame = (userchoice) => {
    console.log("User choice is:", userchoice);
    
    // Generate computer choice
    const compchoice = gencompchoice();
    console.log("Computer choice is:", compchoice);

    if(userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "Rock"){
            userwin = compchoice === "Paper" ? false : true;
        } else if(userchoice === "Paper"){
            userwin = compchoice === "Scissor" ? false : true;
        } else {
            userwin = compchoice === "Rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
