window.onload = function() { 
    document.getElementById("header-arrow-down").onclick = function() {
        $.scrollify.next("section");
    }
}

window.onload = function() { 
    $.scrollify({
        section: ".section", // Clase de las secciones
        scrollSpeed: 800, // Velocidad de desplazamiento
        setHeights: false, // Evita que Scrollify ajuste la altura de las secciones
        updateHash: false, // Evita que Scrollify actualice el hash de la URL
    });
}