function menuBurger(){ // Affiche la modal de navigation mobile au clic
    var burgerIcon = document.getElementById('burgerIcon');
    var header = document.getElementById('header');
    var nav = document.getElementById('modalNav');
    burgerIcon.classList.toggle('change');
    header.classList.toggle('change');
    nav.classList.toggle('change');
}