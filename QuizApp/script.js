const questions = [
    {
        question : "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question : "Which is largest planet of our Solar System?",
        answers: [
            {text: "Mars", correct: false},
            {text: "Venus", correct: false},
            {text: "Jupitar", correct: true},
            {text: "Mercury", correct: false},
        ]
    },
    {
        question : "Which is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
    },
    {
        question : "Which is the largest hot desert in the world?",
        answers: [
            {text: "Sahara", correct: true},
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Antarctina", correct: false},
        ]
    },
    {
        question : "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Africa", correct: false},
            {text: "Europe", correct: false},
            {text: "Australia", correct: true},
        ]
    },
];

const  question = document.getElementById('question')
const  ansbtn = document.getElementById('answer-btns')
const nextbtn = document.getElementById('next-btn')

//to store q index and score
let currQuesIndex = 0;
let score = 0;

function startQuiz(){
    currQuesIndex = 0;
    score=0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState(); //to resetprevious question and answer
    let curreQuestion = questions[currQuesIndex];
    let questionNo = currQuesIndex +1;
    question.innerHTML = questionNo + ". " + curreQuestion.question

    curreQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
    })
}

function resetState(){
    nextbtn.style.display = "none";
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(ansbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block"
}

function showScore(){
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display = "block"
}
function handleNextButton(){
    currQuesIndex++;
    if(currQuesIndex < questions.length){
        showQuestion()
    }else{
        showScore();
    }
}

nextbtn.addEventListener('click',()=>{
    if(currQuesIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})
startQuiz()