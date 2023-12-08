const emojis = document.querySelectorAll('.moment-emoji');
const moments = document.querySelector('.moment-photo');
const closebtn = document.querySelector('.fa-circle-xmark');
const imagem = document.querySelector('.photo');
const caption = document.querySelector('.caption');
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
    'assets/imagem (13).jpg',
    'assets/imagem (14).jpg',
    'assets/imagem (15).jpg',
    'assets/imagem (16).jpg',
    'assets/imagem (17).jpg',
    'assets/imagem (18).jpg',
    'assets/imagem (19).jpg',
    'assets/imagem (20).jpg',
    'assets/imagem (21).jpg',
    'assets/imagem (22).jpg',
    'assets/imagem (23).jpg',
    'assets/imagem (24).jpg',
    'assets/imagem (25).jpg',
    'assets/imagem (26).jpg',
    'assets/imagem (27).jpg',
    'assets/imagem (28).jpg',
    'assets/imagem (29).jpg',
    'assets/imagem (30).jpg',
    'assets/imagem (31).jpg',
    'assets/imagem (32).jpg',
] 
const music = document.querySelector('.music');
const botaoPlay = document.querySelector('.botao-play');
const intro = document.querySelector('.intro');
var playn = false;
var captions = [
    'Explore the fascinating world of dung beetles and their remarkable abilities!',
    'Embark on a smelly adventure through the sewage system of a bustling city!',
    'Discover the hidden treasures of a composting facility and learn about the magic of decomposition!',
    'Join us on a journey to the land of manure, where you can fill witness the art of fertilizer production!',
    'Experience the aromatic wonders of a sewage treatment plant and learn how it helps keep our environment clean!',
    'Travel to a farm and witness the circle of life as animals turn waste into valuable resources!',
    'Delve into the science of feces and learn about its role in the ecosystem!',
    'Explore the fascinating world of dung beetles and their remarkable abilities!',
    'Embark on a smelly adventure through the sewage system of a bustling city!',
    'Discover the hidden treasures of a composting facility and learn about the magic of decomposition!',
    'Join us on a journey to the land of manure, where you can fill witness the art of fertilizer production!',
    'Experience the aromatic wonder of a sewage treatment plant and learn how it helps keep our environment clean!',
    'Travel to a farm and witness the circle of life as animals turn waste into valuable resources!',
    'Delve into the science of feces and learn about its role in the ecosystem!',
    'Explore the fascinating world of dung beetles and their remarkable abilities!',
    'Embark on a smelly adventure through the sewage system of a bustling city!',
    'Discover the hidden treasures of a composting facility and learn about the magic of decomposition!',
    'Join us on a journey to the land of manure, where you can fill witness the art of fertilizer production!',
    'Experience the aromatic wonder of a sewage treatment plant and learn how it helps keep our environment clean!',
    'Travel to a farm and witness the circle of life as animals turn waste into valuable resources!',
    'Delve into the science of feces and learn about its role in the ecosystem!',
    'Explore the fascinating world of dung beetles and their remarkable abilities!',
    'Embark on a smelly adventure through the sewage system of a bustling city!',
    'Discover the hidden treasures of a composting facility and learn about the magic of decomposition!',
    'Join MACKENZIE CABAÇO us on a journey to the land of manure, where you can fill witness the art of fertilizer production!',
    'Experience the aromatic wonder of a sewage treatment plant and learn how it helps keep our environment clean!',
    'Travel to a farm and witness the circle of life as animals turn waste into valuable resources!',
    'Delve into the science of feces and learn about its role in the ecosystem!',
    'Explore the fascinating world of dung beetles and their remarkable abilities!',
    'Embark on a smelly adventure through the sewage system of a bustling city!',
    'Discover the hidden treasures of a composting facility and learn about the magic of decomposition!',
    'Join us on a journey to the land of manure, where you can fill witness the art of fertilizer production!',
       
]
const leftPannel = document.querySelector('.text-left');
const rightPannel = document.querySelector('.text-right');
const rightOnes = document.querySelectorAll('.right');
const leftOnes = document.querySelectorAll('.left');    

for (let i = 0; i < rightOnes.length; i++) {
    rightOnes[i].addEventListener('mouseenter', function() {
        rightPannel.style.opacity = '1';
        rightPannel.style.top = '25%';
    })
}

for (let i = 0; i < rightOnes.length; i++) {
    rightOnes[i].addEventListener('mouseleave', function() {
        rightPannel.style.opacity = '0';
        rightPannel.style.top = '50%';
    })
}

for (let i = 0; i < leftOnes.length; i++) {
    leftOnes[i].addEventListener('mouseenter', function() {
        leftPannel.style.opacity = '1';
        leftPannel.style.top = '25%';
    })
}

for (let i = 0; i < leftOnes.length; i++) {
    leftOnes[i].addEventListener('mouseleave', function() {
        leftPannel.style.opacity = '0';
        leftPannel.style.top = '50%';
    })
}


document.querySelector('.fa-pause').style.visibility = 'hidden';

function initialize() {
    document.querySelector('.fa-pause').style.visibility = 'visible';   
    intro.style.transform = 'translateY(-100vh)';
    music.play();
    playn = true;
}

botaoPlay.addEventListener('click', function() {

    if (playn) {
        music.pause();
        document.querySelector('.fa-pause').style.visibility = 'hidden';
        document.querySelector('.fa-play').style.visibility = 'visible';
        playn = false;  
    } else {
        music.play();
        document.querySelector('.fa-pause').style.visibility = 'visible';
        document.querySelector('.fa-play').style.visibility = 'hidden';
        playn = true;
    }
     
})

closebtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    imagem.src = '';
    imagem.style.visibility = 'hidden';
    moments.style.visibility = 'hidden';
    moments.style.opacity = '0';
})

for (let i = 0; i < emojis.length; i++) {
    emojis[i].addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.481)';
        imagem.src = album[i];
        caption.innerHTML = captions[i];
        imagem.onload = function() {
            // Quando a imagem estiver carregada, exibe a div moments
            imagem.style.visibility = 'visible';
            moments.style.visibility = 'visible';
            moments.style.opacity = '1';
        };
    });   
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.body.style.backgroundColor = 'white';
        imagem.src = '';
        imagem.style.visibility = 'hidden';
        moments.style.visibility = 'hidden';
        moments.style.opacity = '0';
    }
})

