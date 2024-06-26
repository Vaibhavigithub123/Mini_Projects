let button = document.querySelector('.bottom')
let banner = document.querySelector('.banner')


//dark mode
button.addEventListener('click', ()=>{
    banner.classList.toggle('dark-theme')
})

//text animation
let typingEffect = new Typed('#text',{
    strings: ['DropXout',"Coder"],
    loop:true,
    typeSpeed:100,
    backspeed:50,
    backDelay:1000
})
