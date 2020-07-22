const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let diff = Math.round((now - today) / 1000);

    const seconds = now.getSeconds();
    const secondsDeg = diff * 6 + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = (minutes * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = (hours * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}
setInterval(setDate, 1000);