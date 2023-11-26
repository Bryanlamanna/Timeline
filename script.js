const dates = document.querySelectorAll('.date');
const content = document.querySelector('.content');

dates.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        content.style.opacity = '1';
    });

    element.addEventListener("mouseleave", function() {
        content.style.opacity = '0';
    });
});



