var icons = document.getElementsByTagName('i');

//Codigo para el boton de tema en la version movil.
var themeMobile = document.querySelector('#themeMobile');

themeMobile.addEventListener('change', function() {
    var checked = themeMobile.checked;

    var html = document.querySelector('#html');
    
    //Si esta chequeado el tema debe de ser claro.
    if (checked)
    {
        html.setAttribute('data-bs-theme', 'light');
        document.querySelector('.nav-mobile').style.background = "#fff";
    }
    //Si no esta chequeado el tema debe de ser oscuro.
    else
    {
        html.setAttribute('data-bs-theme', 'dark');
        document.querySelector('.nav-mobile').style.background = "#212529";

    }
});

//Codigo para el boton de tema en la version desktop.
var themeDesktop = document.querySelector('#themeDesktop');

themeDesktop.addEventListener('change', function() {
    var checked = themeDesktop.checked;

    var html = document.querySelector('#html');
    
    //Si esta chequeado el tema debe de ser claro.
    if (checked)
    {
        html.setAttribute('data-bs-theme', 'light');
    }
    //Si no esta chequeado el tema debe de ser oscuro.
    else
    {
        html.setAttribute('data-bs-theme', 'dark');
    }
});

//Creacion de evento que hace rotar al boton de menu  y muestra la lista del menu en la version movil.
var nav = document.querySelector(".bi-list");

var navMobile = document.querySelector('.nav-mobile');

nav.addEventListener('click', () => {
    navMobile.classList.toggle('nav-mobile-hidden');

    nav.classList.toggle('rotar');
});