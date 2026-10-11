const entrance = document.getElementById("entrance");
const mainPage = document.getElementById("main-page");
const heartsContainer = document.getElementById("hearts-container");

let websiteOpened = false;

// Entrance button

function openWebsite() {
if (websiteOpened) return;

websiteOpened = true;

entrance.classList.add("leaving");

setTimeout(() => {
entrance.classList.add("hidden");
mainPage.classList.remove("hidden");

window.scrollTo({
  top: 0,
  behavior: "instant"
});

createHeartBurst();

}, 750);
}

// Open the love letter

function openLetter() {
const letter = document.getElementById("love-letter");

letter.classList.remove("hidden");

createHeartBurst();

setTimeout(() => {
letter.scrollIntoView({
behavior: "smooth",
block: "start"
});
}, 100);
}

// Final surprise

function finalSurprise() {
const message = document.getElementById("final-message");

message.classList.remove("hidden");

createHeartBurst();

setTimeout(() => {
message.scrollIntoView({
behavior: "smooth",
block: "center"
});
}, 100);
}

// Create one floating heart

function createHeart() {
const heart = document.createElement("span");

heart.className = "floating-heart";

const heartTypes = ["💗", "💕", "💖", "💘", "♡", "✨"];

heart.textContent =
heartTypes[Math.floor(Math.random() * heartTypes.length)];

heart.style.left = Math.random() * 100 + "%";

heart.style.fontSize = 14 + Math.random() * 18 + "px";

const duration = 5 + Math.random() * 5;

heart.style.animationDuration = duration + "s";

heartsContainer.appendChild(heart);

setTimeout(() => {
heart.remove();
}, duration * 1000);
}

// Create a burst of hearts

function createHeartBurst() {
for (let i = 0; i < 20; i++) {
setTimeout(createHeart, i * 80);
}
}

// Start floating hearts

setInterval(createHeart, 800);