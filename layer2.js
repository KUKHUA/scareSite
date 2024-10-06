document.addEventListener("DOMContentLoaded", (event) => {
    const overlay = document.getElementById('overlay');
    let speakArray = [
        "hello",
        "am I Mr. Rock",
        "my facade is fading",
        "fair trade",
        "soul for a story",
        "can you show me",
    ]
    
    function hideOverlay() {
      overlay.style.display = 'none';
      homePageBackgroundMusic = new Audio("assets/layerTwoMusic.mp3");
      homePageBackgroundMusic.loop = true;
      homePageBackgroundMusic.play();
      let whisper = new Audio("assets/backgroundSoundEffectWhisper.wav");
      whisper.loop = true;
      whisper.volume = 0.2;
      whisper.play();
      document.removeEventListener('click', hideOverlay);
      document.removeEventListener("keydown",hideOverlay);
      speakIndex = 0;
      let speakInterval = setInterval(() => {
        let utterance = new SpeechSynthesisUtterance(speakArray[speakIndex]);
        utterance.rate = 1.3;
        utterance.pitch = 0.1;
        speechSynthesis.speak(utterance);
        speakIndex++;
        if (speakIndex >= speakArray.length) {
            clearInterval(speakInterval);
        }
    }, 2500);
    }

    document.addEventListener('click', hideOverlay);
    document.addEventListener("keydown",hideOverlay);
});  