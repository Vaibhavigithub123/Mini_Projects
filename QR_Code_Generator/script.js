const input = document.getElementById('qrText')
const imgBoxdiv = document.getElementById('imgBox')
const qrImg = document.getElementById('qrImg')

function generateQr(){
    if(input.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgBoxdiv.classList.add("showImg");
        input.value = ""
    }
    else{
        input.classList.add('error')
        setTimeout(() => {
            input.classList.add('error')
        }, 1000);
    }
}
