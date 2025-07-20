// charge site-components.js
import '../../js/site-components.js';

import '../js/site-components.js';

console.log('script.js chargé et Web Components initialisés');


// Accordeons pour les chapitres d'articles :
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".sous-chapitre");

    sections.forEach(section => {
        const titre = section.querySelector("h2");
        if (!titre) return;

        titre.addEventListener("click", () => {
            section.classList.toggle("active");
        });

        // Accessibilité clavier (Entrée + Espace)
        titre.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            section.classList.toggle("active");
        }
        });

        // Ouvrir la première section au chargement
        // if (sections[0] === section) section.classList.add("active");
    });
});

