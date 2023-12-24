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
