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

let html = document.querySelector("html");
        let musica = document.querySelector("#musica");
        html.addEventListener('keydown', () => {
            musica.play();

        })


document.addEventListener('keydown', jump);


