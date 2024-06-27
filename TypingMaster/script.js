const typingText = document.querySelector('.typing-text p')
const input = document.querySelector('.main .input-field')
const time = document.querySelector('.time span b')
const mistakes = document.querySelector('.mistakes span b')
const wpm = document.querySelector('.wpm span b')
const cpm = document.querySelector('.cpm span b')
const btn = document.querySelector('button')

//set values
let timer;
let maxTime = 60;
let timerLeft = maxTime;
let charIndex = 0;  //which char we are working with
let mistake = 0;  
let isTyping = false;


// random para generation

function loadParagraph(){
    const paragraph = [`Josh had spent year and year,
        accumulating the information. He knew it inside out and, 
        if there was ever anyone looking for an expert in the field, 
        Josh would be the one to call.`,

        `hey! hope you are doing well looking for an expert in the field? 
        Josh would be the one to call. `,

        `The alarm went off at exactly 6:00 AM as it had every morning 
        for the past five years. Barbara began her morning and was ready
        to eat breakfast by 7:00 AM. The day appeared to be as normal as 
        any other, but that was about to change. 
        In fact, it was going to change at exactly 7:23 AM.`,
    
        `A long black shadow slid across the pavement near their feet and 
        the five Venusians, very much startled, looked overhead. They were 
        barely in time to see the huge gray form of the carnivore before it 
        vanished behind a sign atop a nearby building which bore the 
        mystifying information "Pepsi-Cola`
    ];

        const randomparaIndex = Math.floor(Math.random()*paragraph.length);
        typingText.innerHTML = ''
        for(const char of paragraph[randomparaIndex]){
            console.log(char)
        typingText.innerHTML += `<span>${char}</span>`
    }
        typingText.querySelectorAll('span')[0].classList.add('active')
        document.addEventListener('keydown', ()=>input.focus());
        typingText.addEventListener('click',()=>{
            input.focus()
        })

}

//handle user input
function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timerLeft >0){
        if(!isTyping){
            timer = setInterval(initTime,1000);
            isTyping=true;
        }





        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct')
            console.log('correct')
        }
        else{
            mistake++;
            char[charIndex].classList.add('Incorrect')
            console.log('Incorrect')
        }
        charIndex++;
        char[charIndex].classList.add('active')
        mistakes.innerText = mistake;
        cpm.innerText = charIndex - mistake;
    }
    else{
        clearInterval(timer);
        input.value= ''
    }

}

function initTime(){
    if(timerLeft>0){
        timerLeft--;
        time.innerText = timerLeft;
        let wpmVal = Math.round(((charIndex - mistake)/5)/(maxTime - timerLeft)*60);
        wpm.innerText = wpmVal;
    }
    else{
        clearInterval(timer)
    }
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timerLeft = maxTime;
    time.innerText = timerLeft;
    input.value=''
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    wpm.innerText =0;
    cpm.innerText = 0;
    mistakes.innerText = 0;
}

input.addEventListener('input', initTyping)
btn.addEventListener('click',reset)

loadParagraph();