const audio = new Audio("assets/audios/sitemusicbackground.mp3");
audio.loop = true;
audio.volume = 0.03;

const savedTime = localStorage.getItem("ambientTime");
const savedState = localStorage.getItem("ambientState");
const savedVolume = localStorage.getItem("ambientVolume");

if (savedTime) audio.currentTime = parseFloat(savedTime);
if (savedVolume) audio.volume = parseFloat(savedVolume);

if (savedState === "playing" || savedState === null) {
    audio.play().catch(() => {});
}

setInterval(() => {
    localStorage.setItem("ambientTime", audio.currentTime);
}, 1000);

window.addEventListener("beforeunload", () => {
    localStorage.setItem("ambientState", audio.paused ? "paused" : "playing");
});
