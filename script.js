const emojis = document.querySelectorAll('.moment-emoji-right, .moment-emoji-left');
const moments = document.querySelector('.moment-photo');
const closebtn = document.querySelector('.fa-circle-xmark');
const imagem = document.querySelector('.photo');
var album = [
    'assets/imagem (1).jpg',
    'assets/imagem (2).jpg',
    'assets/imagem (3).jpg',
    'assets/imagem (4).jpg',    
    'assets/imagem (5).jpg',
    'assets/imagem (6).jpg',
    'assets/imagem (7).jpg',
    'assets/imagem (8).jpg',
    'assets/imagem (9).jpg',
    'assets/imagem (10).jpg',
    'assets/imagem (11).jpg',
    'assets/imagem (12).jpg',
] 
const music = document.querySelector('.music');
const botaoPlay = document.querySelector('.botao-play');

botaoPlay.addEventListener('click', function() {
    music.play();    
})

closebtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(236, 213, 213)';
    imagem.style.visibility = 'hidden';
    moments.style.visibility = 'hidden';
    moments.style.opacity = '0';
})

for (let i = 0; i < emojis.length; i++) {
    emojis[i].addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.481)';
        imagem.src = album[i];
        imagem.style.visibility = 'visible';
        moments.style.visibility = 'visible';
        moments.style.opacity = '1';
    });   
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.body.style.backgroundColor = 'rgb(236, 213, 213)';
        imagem.style.visibility = 'hidden';
        moments.style.visibility = 'hidden';
        moments.style.opacity = '0';
    }
})

