function acceptLove() {
    document.getElementById("result").innerHTML =
    "💍❤️ Thank You Esha! You made me the happiest person in the world. I promise to love you forever. ❤️";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 300 + "px";
    noBtn.style.top = Math.random() * 500 + "px";
});

noBtn.addEventListener("click", function () {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 300 + "px";
    noBtn.style.top = Math.random() * 500 + "px";
});
setTimeout(function(){
document.getElementById("loader").style.display="none";
},3000);

setInterval(function(){

let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(Math.random()*3+2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},300);
const images = [
"images/esha1.jpg",
"images/esha2.jpg",
"images/esha3.jpg",
"images/shan1.jpg"
];

let current = 0;

setInterval(function(){

current++;

if(current >= images.length){
current = 0;
}

document.getElementById("slider").src = images[current];

},2500);
