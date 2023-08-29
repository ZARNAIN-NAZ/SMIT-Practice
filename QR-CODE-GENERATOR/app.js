let qrText = document.getElementById('qrText')
let imgBox = document.getElementById('imgBox')
let qrImg = document.getElementById('qrImg')

function qrCodegen(){ //google QR code API /9for generation code)
    if(qrText.value.length>0){
    qrImg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example' +qrText.value;
    imgBox.classList.add('show-img') //classList returns value in array that we can apply crud operations on it that check class in css (simple take class from css and functionality)
}
else{
    qrText.classList.add('error')
    setTimeout(()=>{
        qrText.classList.remove('error')
    },1000)
}
}

