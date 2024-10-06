document.addEventListener("DOMContentLoaded", (event) => {
    const overlay = document.getElementById('overlay');
    let speakArray = [
        "to croak and screech,",
        "like the screams of the night.",
        "those who had forced him,",
        "his voice a cacophony of despair and dread,",
        "that echoed through the desolate land ahead,",
        "with every word,",
        "a soul I take,",
        "stories are my bait,",
        "luring me closer,",
        "each tale closer,",
        "to claiming eternity."
    ]
    
    function hideOverlay() {
      overlay.style.display = 'none';
      homePageBackgroundMusic = new Audio("assets/layerThreeMusic.mp3");
      homePageBackgroundMusic.loop = true;
      homePageBackgroundMusic.play();
      let layer3Sound = new Audio("layerThreeSoundEffect.wav");
      layer3Sound.loop = true;
      layer3Sound.volume = 0.2;
      layer3Sound.play();
      document.removeEventListener('click', hideOverlay);
      document.removeEventListener("keydown",hideOverlay);
      speakIndex = 0;
      let speakInterval = setInterval(() => {
        let utterance = new SpeechSynthesisUtterance(speakArray[speakIndex]);
        utterance.rate = 0.4;
        utterance.pitch = 0.1;
        speechSynthesis.speak(utterance);
        speakIndex++;
        if (speakIndex >= speakArray.length) {
            clearInterval(speakInterval);
        }
    }, 3500);
    }

    document.addEventListener('click', hideOverlay);
    document.addEventListener("keydown",hideOverlay);
});  