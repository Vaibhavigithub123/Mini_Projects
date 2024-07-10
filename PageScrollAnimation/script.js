const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const headline = document.querySelector('.headline')

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%"})
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%",})
.fromTo(slider, 1.2 , {x : "-100%"}, {x: "0%"}, "-=1.2")
.fromTo(headline, 0.5, {opacity: 0 , x:"30"}, {opacity:1, x:"0"})