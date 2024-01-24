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
