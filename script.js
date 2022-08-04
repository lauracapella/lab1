
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
    .then((data) => {
        let apiData = `<h1 class="project-content-tit">${data[1].title}</h1>
        <div class="div-img-aricle-3"></div>
        <p class="project-content-body">${data[1].body}</p> `
        document.getElementById("apidata2").innerHTML = apiData;
    })
}

getApiData2();

console.log(Date())

// Validate contact form

let nameError = document.getElementById('name-error');
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let submitError = document.getElementById("submit-error");

let contactname = document.getElementById('contact-name');
contactname.addEventListener('contact-name', validateName);

function validateName(){
    evento.preventDefault();
    let name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = "Correcto"
        return false;
     /* }else if(!name.matches(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/)){
        nameError.innerHTML = "Write a correct name";
        return false;  */
    }else{
        nameError.innerHTML = "Indica tu nombre";
    }    
}


validateName()