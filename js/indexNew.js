//added mouse over mouse out on nav a tags
let nav = document.querySelector('nav');
nav.addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
});

nav.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
});
let funBus = document.querySelector('body');
funBus.addEventListener('wheel', function(event) {
    TweenMax.to('.logo-heading', 1, { x: 100 });
});

let heading1 = document.querySelector('body');
heading1.addEventListener('wheel', function(event) {
    TweenMax.to('.intro h2', 3, { x: 220 });
});

let headings = document.querySelector('body');
headings.addEventListener('wheel', function(event) {
    TweenMax.to('.text-content h2, .content-destination h2', 3, { x: 100 });
});
let color = document.querySelector('body');
color.addEventListener('wheel', function(event) {
    color.style.backgroundColor = 'lightblue';

});

function zoom(event) {

    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    img.style.transform = `scale(${scale})`;
}

let scale = 1;
const img = document.querySelector('img');
img.onwheel = zoom;