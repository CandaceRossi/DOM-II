//added mouse over mouse out on nav a tags
let nav = document.querySelector('nav');
nav.addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
});

nav.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
});
let funBus = document.querySelector('.logo-heading');
funBus.addEventListener('click', function(event) {
    TweenMax.to('.logo-heading', 1, { x: 100 });
});