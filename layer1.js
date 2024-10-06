function goToSite(site){
    location.replace(site);
}

let rockScream;
let homePageBackgroundMusic;
let speakArray = [
    "Hello, wanderer.",
    "I am Mr. Rock.",
    "Here lies a photograph of me.",
    "For it highlights me,",
    "Yet it is not right,",
    "The voice is lost.",
    "Now, fair exchange,",
    "A glimpse for a glimpse,",
    "What will you show me?",
]

document.addEventListener("DOMContentLoaded", (event) => {
  const overlay = document.getElementById('overlay');

function hideOverlay() {
    overlay.style.display = 'none';
    homePageBackgroundMusic = new Audio("assets/homePageMusic.mp3");
    homePageBackgroundMusic.loop = true;
    homePageBackgroundMusic.play();
    let frogSoundEffectBackground = new Audio("assets/backgroundSoundEffectFrogs.wav");
    frogSoundEffectBackground.loop = true;
    frogSoundEffectBackground.volume = 0.2;
    frogSoundEffectBackground.play();
    document.removeEventListener('keydown', hideOverlay);
    document.removeEventListener('click', hideOverlay);
    document.addEventListener("keydown",
        function(event) {
            if (event.key === "Enter") {
                typeSoundEffect("enter");
            } else {
                typeSoundEffect();
            }
        }
      );
    let speakIndex = 0;
    
    let speakInterval = setInterval(() => {
        let utterance = new SpeechSynthesisUtterance(speakArray[speakIndex]);
        utterance.rate = 0.4;
        utterance.pitch = 0.01;
        speechSynthesis.speak(utterance);
        speakIndex++;
        if (speakIndex >= speakArray.length) {
            clearInterval(speakInterval);
        }
    }, 2500);
}

  document.addEventListener('keydown', hideOverlay);
  document.addEventListener('click', hideOverlay);
  let rockArt = document.getElementById("text");
  rockArt.addEventListener('mouseover', startRockScream);
  rockArt.addEventListener('mouseout', stopRockScream);

    document.addEventListener("visibilitychange", userSwitchTab);
});

function typeSoundEffect(type) {
    if(!type) {
        let typeSound = new Audio("assets/typeSoundEffect.wav");
        typeSound.loop = false;
        typeSound.play();
    } else if (type == "enter"){
        let enterSoundEffect = new Audio("assets/enterSoundEffect.mp3");
        enterSoundEffect.loop = false;
        enterSoundEffect.play();
    }
}

function startRockScream() {
    if (!rockScream) {
        rockScream = new Audio("assets/scream.mp3");
        rockScream.loop = false; 
    }
    homePageBackgroundMusic.volume = 0.5;
    rockScream.play();
}

function stopRockScream() {
    if (rockScream) {
        homePageBackgroundMusic.volume = 1;
        rockScream.pause();
        rockScream.currentTime = 0; 
    }
}

function userSwitchTab(){
    if (document.visibilityState === 'hidden') {
    utterance = new SpeechSynthesisUtterance("I AM NOT DONE WITH YOU.");
        utterance.rate = 1;
        utterance.pitch = 0.01;
        utterance.volume = 2;
        speechSynthesis.speak(utterance);
    utterance = new SpeechSynthesisUtterance("Wait... um- I mean, i still want to hear your story.");
        utterance.rate = 1.4;
        utterance.pitch = 0.01;
        speechSynthesis.speak(utterance);
    }
}

function onStorySubmit(){
    document.removeEventListener("visibilitychange", userSwitchTab);
    userSwitchTab = function(){};
    let utterance = new SpeechSynthesisUtterance("Are you done?");
    utterance.rate = 0.4;
    utterance.pitch = 0.01;
    speechSynthesis.speak(utterance);
    utterance = new SpeechSynthesisUtterance("I waited long enough.");
    utterance.rate = 0.4;
    utterance.pitch = 0.01;
    speechSynthesis.speak(utterance);
    utterance = new SpeechSynthesisUtterance("You'll be regetful soon enough.");
    utterance.rate = 1.5;
    utterance.pitch = 0.01;
    utterance.volume = 0.4;
    speechSynthesis.speak(utterance);
    let storyShare = document.getElementById("storyShare");
    let submittedStory = document.getElementById("submittedStory");
    submittedStory.style.display = "block";
}