// Your code goes 

//1. a tags change color

let navColor = document.querySelector('nav');
navColor.addEventListener('mouseover', function(e) {
    event.target.style.color = 'orange';
});

// function logSelection(event) {
//     const log = document.getElementByClass('p');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
// }

// const input = document.querySelector('p');
// input.addEventListener('select', logSelection);
// console.log(logSelection);

//2. keydown background color changes

eventTarget = document.querySelector('body')
eventTarget.addEventListener("keydown", event => {
    eventTarget.style.backgroundColor = "pink";
});

//3. automatic scroll to middle of page

scroll = {
    top: 700,
    left: 200,
    behavior: 'smooth'
};

window.scrollTo(scroll);

// Fun Bus moves 100px right
// const logohead = document.querySelector('logo-heading');
// logohead.addEventListener('click', function(e) {
//     console.log('clicked on FUN BUS!');
//     TweenMax.to('.logo-heading', 1, { x: 100 });
// });

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

// function dragstart_handler(ev) {
//     // Add the target element's id to the data transfer object
//     ev.dataTransfer.setData("text/plain", ev.target.id);
//     ev.dataTransfer.dropEffect = "move";
// }

// function dragover_handler(ev) {
//     ev.preventDefault();
//     // Set the dropEffect to move
//     ev.dataTransfer.dropEffect = "move"
// }

// function drop_handler(ev) {
//     ev.preventDefault();
//     // Get the id of the target and add the moved element to the target's DOM
//     var data = ev.dataTransfer.getData("text/plain");
//     ev.target.appendChild(document.getElementById(h1));
// }