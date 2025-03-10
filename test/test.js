console.log("Script is geladen!");

document.getElementById('random-button').addEventListener('click', function () {
  console.log("Knop is ingedrukt!"); // Check of de knop werkt

  fetch('test.json')  // Controleer of de JSON wordt geladen
    .then(response => {
      console.log("Fetch gestart...");
      if (!response.ok) {
        throw new Error('Kan test.json niet laden');
      }
      return response.json();
    })
    .then(data => {
      console.log("JSON ingeladen:", data); // Debugging: kijken of de JSON-data binnenkomt

      const randomPokemon = data.pokemons[Math.floor(Math.random() * data.pokemons.length)];
      const pokemonDisplay = document.getElementById('pokemon-display');
      const pokemonImg = document.getElementById('pokemon-img')
      const pokemonAudio = document.getElementById('pokemon-audio')

      pokemonDisplay.innerHTML = `<h3>${randomPokemon.name} (#${randomPokemon.number})</h3>`;
    })
    .catch(error => {
      console.error('Fout bij het inladen van JSON:', error);
    });
});
