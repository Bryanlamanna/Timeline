const emojis = document.querySelectorAll('.moment-emoji-right, .moment-emoji-left');
const moments = document.querySelector('.moment-photo');

for (let i = 0; i < emojis.length; i++) {
    emojis[i].addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.481)';
        moments.style.visibility = 'visible';
        moments.style.opacity = '1';
    });   
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.body.style.backgroundColor = 'rgb(236, 213, 213)';
        moments.style.visibility = 'hidden';
        moments.style.opacity = '0';
    }
})