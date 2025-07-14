document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("catch_them_all");
    const audio = document.getElementById("pokemonAudio");
    
    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    const startButton = document.getElementById("start");
    startButton.addEventListener("click", function() {
        window.location.href = "generate.html";
    });
});
