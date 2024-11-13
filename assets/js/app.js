function menuBurger(){ // Affiche la modal de navigation mobile au clic
    var burgerIcon = document.getElementById('burgerIcon');
    var header = document.getElementById('header');
    var nav = document.getElementById('modalNav');
    burgerIcon.classList.toggle('change');
    header.classList.toggle('change');
    nav.classList.toggle('change');
}

window.onscroll = function() { myFunction() };
function myFunction() {
  const header = document.getElementById("header");
  header.classList.toggle("sticky", document.documentElement.scrollTop > 50);
}