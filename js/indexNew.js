//1.added mouseover on nav a tags
let nav = document.querySelector('nav');
nav.addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
});

//2.added mouseout on nav a tags

nav.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
});

//3.added mouse wheel animation on logo
let funBus = document.querySelector('body');
funBus.addEventListener('wheel', function(event) {
    TweenMax.to('.logo-heading', 1, { x: 100 });
});
//4.added mouse wheel animation on heading
let heading1 = document.querySelector('body');
heading1.addEventListener('wheel', function(event) {
    TweenMax.to('.intro h2', 3, { x: 220 });
});
//5.added mouse wheel animation on smaller headings
let headings = document.querySelector('body');
headings.addEventListener('wheel', function(event) {
    TweenMax.to('.text-content h2, .content-destination h2', 3, { x: 100 });
});
//6.added background color change with mouse wheel
let color = document.querySelector('body');
color.addEventListener('wheel', function(event) {
    color.style.backgroundColor = 'lightblue';
});
//7.added zoom in and out feature to main img
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
//8.added background color change with keydown
color.addEventListener('keydown', function(event) {
    color.style.backgroundColor = 'green';
});
//9.added y axis shift in 'p' with wheel
let words = document.querySelector('body');
words.addEventListener('wheel', function(event) {
    TweenMax.to('p', 2, { y: 40 });
});