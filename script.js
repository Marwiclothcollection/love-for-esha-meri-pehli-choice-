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
