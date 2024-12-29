let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const playGame = (userChoice) => {
    if(userChoice===genCompChoice)
    // const compChoice = genCompChoice();

    console.log('This match is draw')
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("Choice was clicked:", choiceId);
        playGame(choiceId);
    });
});
