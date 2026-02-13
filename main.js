let dvd = document.getElementById("dvd");

let logoIndex = 1, x = 0, y = 0, dirX = 1, dirY = 1;
const LOGO_COUNT = 6;
const imageCache = [];

let width = window.innerWidth;
let height = window.innerHeight;

window.addEventListener("resize", ()=>{
    width = window.innerWidth;
    height = window.innerHeight;
});

const preloadImages = ()=>{
    for(let i=1; i<=LOGO_COUNT; i++){
        let img = new Image();
        img.src = `assets/logo${i}.png`;
        imageCache.push(img);
    }
};

const changeLogo = ()=>{
    logoIndex++;
    if(logoIndex>LOGO_COUNT){
        logoIndex = 1;
    }
    dvd.src = `assets/logo${logoIndex}.png`;
};

const animate = ()=>{

    if(x + dvd.clientWidth > width){
        dirX = -1;
        changeLogo();
    }
    if(x < 0){
        dirX = 1;
        changeLogo();
    }

    if(y + dvd.clientHeight > height){
        dirY = -1;
        changeLogo();
    }
    if(y < 0){
        dirY = 1;
        changeLogo();
    }
    
    x += dirX;
    y += dirY;
    
    dvd.style.transform = `translate(${x}px, ${y}px)`
    requestAnimationFrame(animate);
};

preloadImages();
animate(); 