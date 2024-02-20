window.scrollTo(0, 0); // Scroll to the top of the page

window.addEventListener('wheel', function(e) {
    e.preventDefault();
}, { passive: false });

window.onload = function() { 
    document.getElementById("header-arrow-down").onclick = function() {
        $.scrollify.next("section");
    }
    setTimeout(function() {
        $.scrollify({
            section: ".section", // Clase de las secciones
            scrollSpeed: 800, // Velocidad de desplazamiento
            setHeights: false, // Evita que Scrollify ajuste la altura de las secciones
            updateHash: false, // Evita que Scrollify actualice el hash de la URL
        });
    }, 3100); // Delay of 3.5 seconds
}