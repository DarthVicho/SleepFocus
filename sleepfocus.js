// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link-btn");

    links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // evita que abra en la misma pestaña
        const url = link.getAttribute("href");
        if (url) {
        window.open(url, "_blank"); // abre el link en nueva pestaña
            }
        });
    });
});