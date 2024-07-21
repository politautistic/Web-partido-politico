document.addEventListener('DOMContentLoaded', function() {
    var cookieAcceptBtn = document.getElementById('cookie-accept-btn');
    var cookieBanner = document.getElementById('cookie-banner');

    if (cookieAcceptBtn) {
        cookieAcceptBtn.addEventListener('click', function() {
            // Ocultar el banner
            cookieBanner.style.display = 'none';
            // Guardar la aceptación en una cookie
            document.cookie = "cookies_aceptadas=true; path=/; max-age=" + 60*60*24*365; // Caduca en 1 año
        });
    }

    // Comprobar si la cookie de aceptación ya está establecida
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie === "cookies_aceptadas=true") {
            cookieBanner.style.display = 'none';
            break;
        }
    }
});