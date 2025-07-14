// let currentPokemon = null;
// document.getElementById("generatePokemon").addEventListener("click",async() =>{
//     try{
//         const response  = await fetch("pokedata.json");
//         const data = await response.json();
//         const randomIndex = Math.floor(Math.random() * data.pokemons.length);
//         currentPokemon = data.pokemons[randomIndex];
//         document.getElementById("pokemon-image").src = currentPokemon.image;
//         document.getElementById("pokemon-container").style.display = "block";

//         document.getElementById("pokemon-name").innerText = currentPokemon.name;
//         document.getElementById("pokemon-name").style.display = "none";
//         // hide audio = true
//         document.getElementById("pokemon-audio").style.display = "none";
//         document.getElementById("pokemon-sound").src = currentPokemon.sound;
//         // laad audio in na juiste inpit
//         document.getElementById("pokemon-audio").load();
//         document.getElementById("feedback").innerText = "";

//     } catch(error){
//         console.error(error);
//     }
// });
let currentPokemon = null;

// Genereer een willekeurige Pokémon
document.getElementById("generatePokemon").addEventListener("click", async () => {
    try {
        const response = await fetch("pokedata.json");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.pokemons.length);
        currentPokemon = data.pokemons[randomIndex];
        document.getElementById("pokemon-image").src = currentPokemon.image;
        document.getElementById("pokemon-container").style.display = "block";

        document.getElementById("pokemon-name").innerText = currentPokemon.name;
        document.getElementById("pokemon-name").style.display = "none";

        // Verberg audio totdat de Pokémon is geraden
        document.getElementById("pokemon-audio").style.display = "none";
        document.getElementById("pokemon-sound").src = currentPokemon.sound;

        // Laad audio in
        document.getElementById("pokemon-audio").load();

        document.getElementById("feedback").innerText = "";
    } catch (error) {
        console.error(error);
    }
});

// Controleer de gok van de gebruiker
document.getElementById("guessBtn").addEventListener("click", () => {
    const guess = document.getElementById("guessInput").value.trim().toLowerCase();  // Verwijder spaties en zet om naar kleine letters
    if (currentPokemon && guess === currentPokemon.name.toLowerCase()) {
        // Correcte gok
        document.getElementById("pokemon-image").style.filter = "brightness(1)";
        document.getElementById("pokemon-name").style.display = "block";

        // Maak de audio zichtbaar en speel het af
        const audio = document.getElementById("pokemon-audio");
        audio.style.display = "block";  // Maak de audio zichtbaar
        audio.play().catch(error => console.error("Audio kon niet automatisch worden afgespeeld:", error));

        document.getElementById("feedback").innerText = "Goed geraden!";
    } else {
        // Foute gok
        document.getElementById("feedback").innerText = "Fout, probeer opnieuw!";
    }
});
