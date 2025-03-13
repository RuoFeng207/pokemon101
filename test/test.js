let currentPokemon = null;

document.getElementById("randomPokemonBtn").addEventListener("click", () => {
    fetch("test.json")
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.pokemons.length);
            currentPokemon = data.pokemons[randomIndex];

            document.getElementById("pokemon-image").src = currentPokemon.image;
            document.getElementById("pokemon-image").style.filter = "brightness(0)";
            document.getElementById("pokemon-container").style.display = "block";

            document.getElementById("pokemon-name").innerText = currentPokemon.name;
            document.getElementById("pokemon-name").style.display = "none";

            // Verberg de audio totdat de Pokémon is geraden
            document.getElementById("pokemon-audio").style.display = "none";
            document.getElementById("pokemon-sound").src = currentPokemon.sound;

            // ✅ Forceer het laden van de audio
            document.getElementById("pokemon-audio").load();

            document.getElementById("feedback").innerText = "";
        })
        .catch(error => console.error("Fout bij het inladen van JSON:", error));
});

document.getElementById("guessBtn").addEventListener("click", () => {
    const guess = document.getElementById("guessInput").value.toLowerCase();
    if (currentPokemon && guess === currentPokemon.name.toLowerCase()) {
        document.getElementById("pokemon-image").style.filter = "brightness(1)";
        document.getElementById("pokemon-name").style.display = "block";

        // Maak de audio zichtbaar en speel het af
        const audio = document.getElementById("pokemon-audio");
        audio.style.display = "block"; // Maak de audio zichtbaar
        audio.play().catch(error => console.error("Audio kon niet automatisch worden afgespeeld:", error));

        document.getElementById("feedback").innerText = "Goed geraden!";
    } else {
        document.getElementById("feedback").innerText = "Fout, probeer opnieuw!";
    }
});