const gallery = document.querySelector('.gallery')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

gallery.addEventListener("wheel", (e)=>{
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
    gallery.style.scrollBehavior = "auto";
})

prevBtn.addEventListener('click', ()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -=900;
})

nextBtn.addEventListener('click',()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft +=900;
})