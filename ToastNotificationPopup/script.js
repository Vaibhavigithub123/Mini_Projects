const button = document.querySelector('.button')
const toast = document.querySelector('.toast')
const faxmark = document.querySelector('.fa-xmark')
const progress = document.querySelector('.progress')

button.addEventListener('click', ()=>{
    toast.classList.add('active')
    progress.classList.add('active')

    setTimeout(()=>{
        toast.classList.remove('active')
    },5000)

    setTimeout(()=>{
        progress.classList.remove('active')
    },5300)
})

faxmark.addEventListener('click', ()=>{
    toast.classList.remove('active')

    setTimeout(()=>{
        progress.classList.remove('active')
    },300)
})