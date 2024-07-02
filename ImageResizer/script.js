
const fileInput = document.querySelector('.resize-file')
const widthInput = document.querySelector('.resize-input-width')
const heightInput = document.querySelector('.resize-input-height')
const aspectToggle = document.querySelector('.resize-aspect')
const canvas = document.querySelector('.resize-canvas')

const ctx = canvas.getContext("2d");

let activeImage, imgWidthToHeightRatio;

fileInput.addEventListener('change', (e)=>{
    // console.log(e)
    const reader = new FileReader(); //read file uploaded as data url

    reader.addEventListener('load',()=>{
        openImg(reader.result);
        console.log(reader.result)
    })

    reader.readAsDataURL(e.target.files[0]); //read file uploaded as data url
})

widthInput.addEventListener('change',()=>{
    if(!activeImage) return;

    const heightValue = aspectToggle.checked? widthInput.value / imgWidthToHeightRatio : heightInput.value;

    resize(widthInput.value, heightValue)
})

heightInput.addEventListener('change',()=>{
    if(!activeImage) return;

    const widthValue = aspectToggle.checked? heightInput.value * imgWidthToHeightRatio : widthInput.value;
    resize(widthValue, heightInput.value)
})

function openImg(ImgSrc){
  activeImage = new Image();
  
  activeImage.addEventListener('load',()=>{
    imgWidthToHeightRatio = activeImage.width / activeImage.height;

    resize(activeImage.width, activeImage.height)
  })
    activeImage.src = ImgSrc;
    console.log(activeImage)
}

function resize(width, height){
    canvas.width = Math.floor(width);
    canvas.height =  Math.floor(height);
    widthInput.value = Math.floor(width);
    heightInput.value =  Math.floor(height);

    ctx.drawImage(activeImage, 0, 0, Math.floor(width), Math.floor(height))
}