document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#3498db'; /* Couleur du texte au survol */
        });

        link.addEventListener('mouseout', function() {
            this.style.color = ''; /* Réinitialise la couleur du texte à la normale */
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.getElementById('menuBurger');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const closeButton = document.getElementById('closeButton');

    menuBurger.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    closeButton.addEventListener('click', function() {
        dropdownMenu.classList.remove('show');
    });
});


// Fonction pour montrer le menu
function showMenu() {
    gsap.to("#dropdownMenu", {
        duration: 0.5,
        right: 0,
        opacity: 1,
        visibility: "visible",
        ease: "power2.inOut",
        onStart: function() {
            document.getElementById("dropdownMenu").classList.add("show");
        }
    });
}

// Fonction pour cacher le menu
function hideMenu() {
    gsap.to("#dropdownMenu", {
        duration: 0.5,
        right: "-100%",
        opacity: 0,
        ease: "power2.inOut",
        onComplete: function() {
            document.getElementById("dropdownMenu").classList.remove("show");
            document.getElementById("dropdownMenu").style.visibility = "hidden";
        }
    });
}

// Supposons que vous avez un bouton pour déclencher l'affichage du menu
document.getElementById("yourMenuButtonId").addEventListener("click", showMenu);

// Pour le bouton de fermeture
document.getElementById("closeButton").addEventListener("click", hideMenu);

gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
gsap.from(".home h1", { duration: 1.5, x: 100, opacity: 0 });
gsap.from(".home p", { duration: 1.5, x: -100, opacity: 0, delay: 0.5 });

