//added mouse over mouse out on nav a tags
let nav = document.querySelector('nav');
nav.addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
});

nav.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
});