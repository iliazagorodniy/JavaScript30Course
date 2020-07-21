const keys = document.querySelectorAll(".key");


const keydownEvent = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeClass(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
}

keys.forEach((key) => {
    key.addEventListener("transitionend", removeClass)
});

window.addEventListener("keydown", () => keydownEvent(event))
