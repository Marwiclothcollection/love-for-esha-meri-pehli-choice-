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
