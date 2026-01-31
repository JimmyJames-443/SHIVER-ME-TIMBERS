const button = document.getElementById('mybutton');
button.addEventListener('click', () => {
    alert('Ahoy! You clicked the button!');
});

const hullInfo = document.getElementById('hull info');

button.addEventListener('click', () => {
    hullInfo.textContent = "Within the ship are hidden treasures found from the lost island of JUTSU!";
});