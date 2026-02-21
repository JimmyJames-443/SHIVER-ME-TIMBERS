//variables i'll use in the snake game.
let px=10, py=10;
let gs=20, tc=20;
let ax=15, ay=15;
let xv=0,  yv=0;
let trail = [];
let tail=5;
let stop=false;
let no_cats=true;

setInterval(() => {

     if(!no_cats){
        execute();
       
    }
}, 10000);

//before game the controls for buttons in the web.
const button = document.getElementById('mybutton');
button.addEventListener('click', () => {
    alert('Ahoy! You clicked the button!');
});

const hullInfo = document.getElementById('hull-info');

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



//the snake game for the web
const canv = document.getElementById("gc");
const ctx = canv.getContext("2d");
function game(){

   if(!stop){
    px+=xv;
    py+=yv;
}

  
//reappearing after bitting the wall.
if(px<0) px=tc-1 ; if(px>tc-1) px=0;
if(py<0) py=tc-1 ; if(py>tc-1) py=0;
//background
ctx.fillStyle="maroon"
ctx.fillRect(0,0,canv.width,canv.height);

ctx.fillStyle="purple"
for(let i=0;i<trail.length;i++){
    ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);//boilerplate..dont touch.legacy!!
    if(trail[i].x==px && trail[i].y==py)tail=5;
}
trail.push({x:px,y:py});
while(trail.length>tail){trail.shift();}


if(ax==px && ay==py){
    tail++;
    ax=Math.floor(Math.random()*tc);
    ay=Math.floor(Math.random()*tc);
}

ctx.fillStyle="green";
ctx.fillRect(ax*gs+4,ay*gs+4,gs-8,gs-8);
}
document.addEventListener("keydown", (e) =>{
   
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
        e.preventDefault();
    }

  if((e.key==="ArrowLeft"||e.key==="a") && xv!==1){xv=-1;yv=0;}
  if((e.key==="ArrowUp"||e.key==="w") && yv!==1){xv=0;yv=-1;}
  if((e.key==="ArrowRight"||e.key==="d") && xv!==-1){xv=1;yv=0;}
  if((e.key==="ArrowDown"||e.key==="s") && yv!==-1){xv=0;yv=1;}
  if(e.key===" "){ 
    e.preventDefault();
    statue();}
});

setInterval(game, 1000/15);


    const control_up = document.getElementById("up");
control_up.addEventListener('click',()=>{
   if(yv !== 1){
     xv=0;yv=-1;};
});

    const control_left = document.getElementById("left");
control_left.addEventListener('click',()=>{
  if(xv !== 1){
     xv=-1;yv=0;};
});
    const control_right = document.getElementById("right");
control_right.addEventListener('click',()=>{
    if(xv !== -1){
    xv=1;yv=0;};
});
    const control_down = document.getElementById("down");
control_down.addEventListener('click',()=>{
    if(yv !== -1){
     xv=0;yv=1;};
   
});




   
    const alt =document.getElementById("pause");
 
  function statue(){
    stop=!stop
    confetti({
    particleCount: 150,
    spread: 30,
    origin: { y: 0.2 },
  });
  }
 alt.addEventListener('click',statue)

function execute(){
fetch("https://api.thecatapi.com/v1/images/search")
.then(res => res.json())
.then(data  => {
    //golden code
    document.getElementById("cat_image").src = data[0].url;
});
};



const cats = document.getElementById("api");
cats.addEventListener('click',() => {

    no_cats = !no_cats;

    if(!no_cats){
        execute();
        cats.textContent="see no cats";
    }
    else{
        
        document.getElementById("cat_image").remove();
        alert("your unfriendly approach to the cats has led to their permanent removal");
        console.log("you is a bitch for real.")
     };

});

