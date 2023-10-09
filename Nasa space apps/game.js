let isMovingup = false;
let colisaoOuro = false;
let ismovingdown = false;
let ismovingright = false;
let ismovingleft = false;
let horizontalPosition = 0;
let verticalPosition = 0;
let pontos = 0;
const pontoselement = document.querySelector('#pontos');
const maxHeight = 625;
const maxWidth = 1361;
const ouro = document.querySelector('.ouro');
const meteoro = document.querySelector('.meteoro');
const nave = document.querySelector('.nave');
nave.addEventListener('colisão', (event) => {
    nave.classList.add('bateu');

    window.location.href = 'gameover.html'
});


meteoro.style.width = '50px';
nave.style.width = '100px';

function meteoroale() {
    const randomTop = Math.random(100) * (maxHeight - 80) + 80;

    meteoro.style.top = randomTop + 'px'
    setTimeout(meteoroale, 1500);
}

setTimeout(meteoroale, 1250);

function ouroale () {
    const randomTop =Math.random (100) * (maxHeight - 80) + 80;

    ouro.style.top = randomTop + 'px'
    setTimeout(ouroale, 1500);
}

ouroale();

function colisão() {
    const reaçãonave = nave.getBoundingClientRect();
    const reaçãometeoro = meteoro.getBoundingClientRect();
    const reaçãoouro = ouro.getBoundingClientRect();

    if(
        reaçãonave.left < reaçãometeoro.right &&
        reaçãonave.right > reaçãometeoro.left &&
        reaçãonave.top < reaçãometeoro.bottom &&
        reaçãonave.bottom > reaçãometeoro.top
    ){
        window.location.href = 'gameover.html'
    }

    if(
        reaçãonave.left < reaçãoouro.right &&
        reaçãonave.right > reaçãoouro.left &&
        reaçãonave.top < reaçãoouro.bottom&&
        reaçãonave.bottom > reaçãoouro.top
    ) {
        pontos += 20;
        pontoselement.textContent = 'Pontos: ' + pontos;
        colisaoOuro = true

        ouro.style.display = 'none';

        reiniciarOuro();
    }
}

function reiniciarOuro(){
    ouro.style.display = 'block';

    setTimeout(function (){
        const randomTop = Math.random() * (maxHeight -80) + 80;
        ouro.style.top = randomTop + 'px';
        colisaoOuro = false;
    }, 3000);
}

ouro.style.display = 'none';
reiniciarOuro();





function moveNave() {
    const pontoselement = document.querySelector('.pontoselement');
    if (isMovingup && verticalPosition > 0) {
        verticalPosition -= 5;

    }
    if (ismovingdown && verticalPosition < maxHeight) {
        verticalPosition += 5;
    }
    if (ismovingright && horizontalPosition < maxWidth) {
        horizontalPosition += 5;
    }
    if (ismovingleft && horizontalPosition > 0) {
        horizontalPosition -= 5;
    }
    nave.style.top = verticalPosition + 'px';
    nave.style.left = horizontalPosition + 'px';

    colisão();

    requestAnimationFrame(moveNave);
}

document.addEventListener('keydown', (event) => {
    switch (event.key.toLowerCase()) {
        case 'w':
            isMovingup = true;
            break;
        case 's':
            ismovingdown = true;
            break;
        case 'd':
            ismovingright = true;
            break;
        case 'a':
            ismovingleft = true;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key.toLowerCase()) {
        case 'w':
            isMovingup = false;
            break;
        case 's':
            ismovingdown = false;
            break;
        case 'd':
            ismovingright = false;
            break;
        case 'a':
            ismovingleft = false;
            break;
    }
});


moveNave();