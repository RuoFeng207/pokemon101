document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("menu.html");
        if (!response.ok) throw new Error("Menu wordt niet geladen");

        const menuHTML = await response.text();
        document.getElementById("menu-placeholder").innerHTML = menuHTML;

        
        if (!document.querySelector("link[href='menu.css']")) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "menu.css";
            document.head.appendChild(link);
        }

        // Voeg menu.js pas toe nadat menu.html is ingeladen
        const script = document.createElement("script");
        script.src = "menu.js";
        script.onload = () => {
            console.log("menu.js geladen en klaar voor gebruik!");
            initMenuSounds(); 
        };
        document.body.appendChild(script);

    } catch (error) {
        console.error("Fout bij laden van het menu:", error);
    }
});

function initMenuSounds() {
    fetch("sound.json")
        .then(response => response.json())
        .then(data => {
            const pokeballSound = new Audio(data["menu-sound"][0].pokeball_sound);
            const exitSound = new Audio(data["menu-sound"][1].exit_sound);

            const menuCheckbox = document.getElementById("check");
            // cheked of checkbox is aangevinkt
            document.querySelector("label[for='check']").addEventListener("click", () => {
                if (menuCheckbox.checked) {
                    exitSound.play();
                } else {
                    pokeballSound.play();
                }
            });
        })
        .catch(error => console.error("Fout bij laden van geluiden:", error));
}
