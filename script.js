const mario = document.querySelector('.mario');
const shell = document.querySelector('.shell');

const jump = ()=>{ 
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const shellPosition = shell.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    if (shellPosition <= 130 && shellPosition > 0 && marioPosition < 67){
        shell.style.animation = 'none';
        shell.style.left = `${shellPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop)
    }
}, 10);



document.addEventListener('touch', jump);

var dataId;
var contador = 0;
var x;
var i;
 
function carregarErros() {
    localStorage.erros = Number(erros);
}
 
document.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
    dataId = event.dataTransfer.getData("text");
});
 
document.addEventListener("dragover", function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
});
 
document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (contador === 0 && event.target.id === dataId) {
        event.target.parentNode.appendChild(document.getElementById(dataId));
        event.target.style.display = "none";
        document.getElementById('proximo').style.display = "inline";
    } else if (event.target.id === dataId) {
        event.target.parentNode.appendChild(document.getElementById(dataId));
        event.target.style.display = "none";
        contador++;
 
    } else {
        erros++;
    }
});


