const input = document.getElementById('input')
const button = document.getElementById('btn')
const wrongChoice = document.getElementById('wrngGuess')
const chances  = document.getElementById('guess')


let ans = Math.floor(Math.random()*100)+1;
let numGuesses = 0;

button.addEventListener('click', ()=>{
    guessNumber();
})

function guessNumber(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrongChoice.innerHTML = "Enter between 1 to 100"
    }
    else{
        numGuesses++;
        chances.innerHTML = "No. of Guess:"+ numGuesses;

        if(input.value > ans){
            wrongChoice.innerHTML = "You guessed too High!";
            wrongChoice.style.color="red"
            input.value = "";
        }
        else if(input.value < ans){
            wrongChoice.innerHTML = "You guessed too low!"
            wrongChoice.style.color="blue"
            input.value = "";
        }
        else{
            wrongChoice.innerHTML = "Congratulations you guessed the correct answer"
            wrongChoice.style.color="green";
            setTimeout(()=>{
                resetGame()
            },3000)
        }
    }

}

function resetGame(){
    numGuesses = 0;
    ans = Math.floor(Math.random()*100)+1;
    input.value = " ";
    chances.innerHTML = "No. of Guess:0"
}