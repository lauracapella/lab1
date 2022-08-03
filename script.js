
// Hamburguer menu

const hamburguer = document.querySelector('.hamburguer');
const navbar = document.querySelector('.navbar');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".navbar-link").forEach(a => a.addEventListener('click', () => {
    hamburguer.classList.remove("active");
    navbar.classList.remove("active")
}))

// Llamada api 

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function getApiData(){
    fetch(apiUrl)
    .then((response) => response.json())
    .then((res) => {
        let resApiData ="";
        res.forEach((projects)=>{
            if (projects.id <= 3){
            resApiData += `
            <article class="recent-projects-article">
            <div class="div-img-aricle-1"></div>
            <div class="projects-home-content">
            <h4 class="recent-projects-tit">${projects.title}</h4>
            <p class="recent-projects-desc">${projects.body}</p>
            <a class="projects-link" href="#">Learn More</a>
            </div>
            </article>`}
        });
        document.getElementById("apidata").innerHTML = resApiData;
    })

   
}

getApiData();



function getApiData2(){
    fetch(apiUrl)
    .then((response) => response.json())
    .then((res2) => {
            console.log(res2)
    })
}

getApiData2();