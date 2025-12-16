let dvd = document.getElementById("dvd");

let height = window.innerHeight;
let width = window.innerWidth;

let container = document.querySelector(".container");
container.style.height = `${height}px`;
container.style.width = `${width}px`;
window.addEventListener('resize',()=>{
    height = window.innerHeight;
    width = window.innerWidth;
    container.style.height = `${height}px`;
    container.style.width = `${width}px`;
});

let num=1, incrementX=true, incrementY=true, dirX=1, dirY=1;
const changeX = ()=>{
    if(incrementX){
        dirX++;
    }
    else{
        dirX--;
    }
};
const changeY = ()=>{
    if(incrementY){
        dirY++;
    }
    else{
        dirY--;
    }
};   

const animate = ()=>{
    if(num>6){
        num=1;
    }
    dvd.src = `assets/logo${num}.png`;
    dvd.style.left = `${dirX}px`;
    dvd.style.top = `${dirY}px`;
    if(dirX + dvd.clientWidth > width){
        incrementX = false;
        num++;
    }
    if(dirX < 0){
        incrementX = true;
        num++;
    }
    if(dirY + dvd.clientHeight > height){
        incrementY = false;
        num++;
    }
    if(dirY < 0){
        incrementY = true;
        num++;
    }
    changeX();
    changeY();
    requestAnimationFrame(animate);
};

animate(); 