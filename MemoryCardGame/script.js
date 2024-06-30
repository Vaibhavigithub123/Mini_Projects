const section = document.querySelector('section')
const playerLivesCount = document.querySelector('span')
let playerLives = 6;

//Link variable to the span
playerLivesCount.textContent = playerLives;

//Generate data by adding imgsrc and text associated with it
const getData = ()=> [
    {imgSrc: "./images/beatles.jpeg", name: "beatles"},
    {imgSrc: "./images/5sos5.jpeg", name: "5sos5"},
    {imgSrc: "./images/fleetwood.jpeg", name: "fleetwood"},
    {imgSrc: "./images/joy-division.jpeg", name: "joy-division"},
    {imgSrc: "./images/ledzep.jpeg", name: "ledzep"},
    {imgSrc: "./images/maroon5.jpeg", name: "maroon5"},
    {imgSrc: "./images/1D.jpeg", name: "1D"},
    {imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd"},
    {imgSrc: "./images/beatles.jpeg", name: "beatles"},
    {imgSrc: "./images/5sos5.jpeg", name: "5sos5"},
    {imgSrc: "./images/fleetwood.jpeg", name: "fleetwood"},
    {imgSrc: "./images/joy-division.jpeg", name: "joy-division"},
    {imgSrc: "./images/ledzep.jpeg", name: "ledzep"},
    {imgSrc: "./images/maroon5.jpeg", name: "maroon5"},
    {imgSrc: "./images/1D.jpeg", name: "1D"},
    {imgSrc: "./images/pinkfloyd.jpeg", name:"pinkfloyd"},    
];

//randomized cards
const  randomize = () => {
    const cardData =  getData();
    cardData.sort(()=> Math.random() - 0.5);
    return cardData;
}
randomize();

//Card generator in html
const cardGenerator = () =>{
    const cardData = randomize();
    console.log(cardData)
    //Generate html
    cardData.forEach((item) => {
        // console.log(item)

        //generated cards according to the cardData array
        const card = document.createElement('div')
        const face = document.createElement('img')
        const back = document.createElement('div')
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        //attach img src info to img tag now
        face.src = item.imgSrc;
        card.setAttribute("name", item.name)

        //attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back)

        card.addEventListener('click', (e)=>{
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
        
    });
}

const checkCards = (e)=>{
    const clickedCards = e.target;
    clickedCards.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCard = document.querySelectorAll('.toggleCard')
    //card flip logic

    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("name")===
            flippedCards[1].getAttribute("name")
        ){
            console.log("match")
            flippedCards.forEach((card)=>{
                card.classList.remove('flipped')
                card.style.pointerEvents = 'none'
            })
            
        } else{
            console.log('wrong')
            flippedCards.forEach((card)=>{
                card.classList.remove('flipped')
                setTimeout(()=>{
                    card.classList.remove('toggleCard')
                },1000)
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0){
                restart("😣try again!")
            }
        }
    }
    if(toggleCard.length === 16){
        restart("🥳You won!")
    }
}

//restart game when lives hit 0
const restart = (text) =>{
    let cardData = randomize();
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')
    section.style.pointerEvents = "none"
    cardData.forEach((item,index)=>{
        cards[index].classList.remove('toggleCard');
        //randomize cards when game restarted
        setTimeout(()=>{
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all"
        },1000)
    })
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(()=> window.alert(text),100)
}
cardGenerator();