const colorPicker = document.getElementById('colorPicker')
const canvasColor =document.getElementById('canvascolor')
const fontPicker = document.getElementById('fontPicker')
const canvas = document.getElementById('myCanvas')
const clearBtn = document.getElementById('clearBtn')
const saveBtn =document.getElementById('saveBtn')
const retriveBtn = document.getElementById('retriveBtn')

const ctx = canvas.getContext('2d') //2d context obj to draw on canvas
//provides properties & method to draw on canvas

colorPicker.addEventListener('change', (e)=>{
    ctx.strokeStyle = e.target.value; // sets the color used for strokes
    ctx.fillStyle = e.target.value; //sets color used to fill the drawing
})

canvas.addEventListener('mousedown',(e)=>{
    isDrawing =true;
    lastX = e.offsetX; //returns horizontal coordinate when clicked on particular area
    lastY = e.offsetY; //returns vertical coordinate when clicked on particular area
})

canvas.addEventListener('mousemove',(e)=>{
    if(isDrawing){
        ctx.beginPath() //start/reset path to draw on canvas
        ctx.moveTo(lastX,lastY) //moving path from current pt to desired cordinate
        ctx.lineTo(e.offsetX,e.offsetY) //draw line between coordinates
        ctx.stroke() //starts drawing with selected stroke

        lastX = e.offsetX; //current mouse position will be according to lastx pt nd y
        lastY = e.offsetY;
    }

})

canvas.addEventListener('mouseup',()=>{
    isDrawing =false;
})

canvasColor.addEventListener('change', (e)=>{
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0,0,800,500) //draw a rectangle by filling the color and specifying width & height

})

fontPicker.addEventListener('change',(e)=>{
    ctx.lineWidth = e.target.value //sets line width in px
})

clearBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
})

saveBtn.addEventListener('click',()=>{
    localStorage.setItem('canvasContents', canvas.toDataURL())

    let link = document.createElement('a');
    link.download = 'my-canvas.png';
    link.href=canvas.toDataURL();
    link.click();
})

retriveBtn.addEventListener('click', ()=>{
    let savedCanvas = localStorage.getItem('canvasContents')

    if(savedCanvas){
        let img = new Image();
        img.src = savedCanvas;
        ctx.drawImage(img,0,0)
    }
})