// Create your game here!
const main_div = document.querySelector("div");
const main_text = document.querySelector("h1");

const attempts = document.createElement("h2");
attempts.textContent = `You have 10 attempts remaining!`;
main_text.append(attempts)
const btn = document.querySelector("button")

const winningNum = "35";
let countdown = 10;

btn.addEventListener("click", () => {
    let userInput = window.prompt("Guess a number 1-100!")

    if(userInput !== winningNum){
        window.alert("Nope! Try again!")
        decrement()
        changeText()
    } else {
        window.alert("You're a genius! You won!")
        attempts.textContent = `Did you read my mind??!`
    } 

 if(countdown == 0){
        attempts.textContent = "You Lost. Do better."
        btn.style.display = "none";
    }

} )
 



function decrement() {
 countdown = countdown - 1
}
function changeText(){
    attempts.textContent = `You have ${countdown} attempts remaining!`
}











