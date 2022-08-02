const hamburguer = document.querySelector('.hamburguer');

const navbar = document.querySelector('.navbar');


hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle("active");
    navbar.classList.toggle("active")

})


document.querySelectorAll(".navbar-link").forEach(a => a.addEventListener('click', () => {
    hamburguer.classList.remove("active");
    navbar.classList.remove("active")
}))

