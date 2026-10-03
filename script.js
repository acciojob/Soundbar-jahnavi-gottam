//your JS code here. If required.
const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

const buttons = document.getElementById("buttons");

let currentAudio = null;

// Create buttons
sounds.forEach((sound) => {
  const button = document.createElement("button");

  button.classList.add("btn");
  button.textContent = sound;

  button.addEventListener("click", () => {
    // Stop currently playing sound
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Create and play selected sound
    currentAudio = new Audio(`./sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttons.appendChild(button);
});

// Create Stop button
const stopButton = document.createElement("button");

stopButton.classList.add("stop");
stopButton.textContent = "stop";

stopButton.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttons.appendChild(stopButton);