document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("/HTML/menu.html");
        if (!response.ok) throw new Error("Menu wordt niet geladen");

        const menuHTML = await response.text();
        document.getElementById("menu-placeholder").innerHTML = menuHTML;

        
        if (!document.querySelector("link[href='/CSS/menu.css']")) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/CSS/menu.css";
            document.head.appendChild(link);
        }
        
        initMenuSounds();
        

    } catch (error) {
        console.error("Fout bij laden van het menu:", error);
    }
});

function initMenuSounds() {
    fetch("/JSON/sound.json")
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
