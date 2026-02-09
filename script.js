const button = document.getElementById('mybutton');
button.addEventListener('click', () => {
    alert('Ahoy! You clicked the button!');
});

const hullInfo = document.getElementById('hull info');

button.addEventListener('click', () => {
    hullInfo.textContent = "Within the ship are hidden treasures found from the lost island of JUTSU!";
});

const holla = document.getElementById('tbutton');
holla.addEventListener('click', () =>{
console.log("user wants to send a message asap");
confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
})

});