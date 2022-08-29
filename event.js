const redmodeButton =document.getElementById('Red-mode');
redmodeButton.onclick=makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='red';
}

const graymodeButton = document.getElementById('Gray-Mode');
graymodeButton.onclick=function makeGray(){
    document.body.style.backgroundColor='gray';
}
