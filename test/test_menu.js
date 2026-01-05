document.addEventListener("DOMContentLoaded", async function () {
    const currentPage = window.location.pathname.split("/").pop();

    // Als we NIET op menu.html zitten, injecteer menu
    if (currentPage !== "test_menu.html") {
        try {
            const response = await fetch("/HTML/menu.html");
            if (!response.ok) throw new Error("Menu wordt niet geladen");

            const menuHTML = await response.text();
           
            if (placeholder) {
                placeholder.innerHTML = menuHTML;
            }

            // Voeg CSS toe als die nog niet is toegevoegd
            if (!document.querySelector("link[href='test_menu.css']")) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                // link.href = "/CSS/menu.css";
                document.head.appendChild(link);
            }

            initMenuSounds();

        } catch (error) {
            console.error("Fout bij laden van het menu:", error);
        }
    } else {
        // We zijn op menu.html zelf → geluid gewoon starten
        initMenuSounds();
    }
});