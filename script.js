
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
        <div class="project-content-flex">
        <p class="project-content-subtit">UI Design & App Development</p>
        <p>${new Date().toLocaleString().split(',')[0]}</p>
        </div>
        <div class="div-img-aricle-3"></div>
        <p class="project-content-body">${data[1].body}</p> `
        document.getElementById("apidata2").innerHTML = apiData;
    })
}

getApiData2();



// Validate contact form

// Variables que apuntan a los id de cada input del form

const form = document.querySelector(".contact-form");

const contactName = document.querySelector("#contact-name");
const contactEmail = document.querySelector("#contact-email");
const contactPhone = document.querySelector("#contact-phone");
const contactMessage = document.querySelector("#contact-message");

// escucha para eventos en caso de submit form

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
})

//funcion que muestra mensaje de error

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error")
    inputControl.classList.remove("success")
}

//funcion que muestra mensaje de exito

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
}

//validar email mediante expresiones

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//validamos el valor introducido por el usuario de todos los inputs despues de submit

function validateInputs(){
    const contactNameValue = contactName.value;
    const contactEmailValue = contactEmail.value;
    const contactPhoneValue = contactPhone.value;

    //condicional para accionar funcion mostrar error si nombre está vacio

    if(contactNameValue === ""){
        setError(contactName, "¡Indica tu nombre!")
    }else{
        setSuccess(contactName)
    }

    //condicional para accionar funcion mostrar error si email está vacio o no cumple con los requisitos de la funcion isValidEmail

    if(contactEmailValue === ""){
        setError(contactEmail, "¡Indica tu email!")
    }else if(!isValidEmail(contactEmailValue)){
        setError(contactEmail, "Email incorrecto, introduce un email válido")
    }else{
        setSuccess(contactEmail)
    }

    //condicional para accionar funcion mostrar error si telefono está vacio 

    if(contactPhoneValue.length < 9){
        setError(contactPhone, "¡Indica tu num de telefono correcto!")
    }else{
        setSuccess(contactPhone)
    }


}


// ENVIAR DATOS FORMULARIO POST

// Enviar mediante el fetch method un post usando un objeto dentro del fetch como segundo parametro que dentro del mismo pasaremos cierta informacion, esta informacion es asociada con los HTTP methods, [CREATE, READ, UPDATE, DELETE]. Vamos a enviar la informacion del formulario al API falso y veremos como se registra el ID correspondiente a la sequencia de objetos que nos presenta el API.
document.getElementById("addPost").addEventListener("submit", addPost);
function addPost(preventForm) {
  
    preventForm.preventDefault(); // Omite que se envie la info del formulario
  
    // Nos traemos la informacion que esta dentro del Input Tag para el titulo y el textArea para el body del post
    let name = document.getElementById("contact-name").value;
    let phone = document.getElementById("contact-phone").value;
    let email = document.getElementById("contact-email").value;
    let message = document.getElementById("contact-message").value;

    
    // Using fetch to push to API
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: {
        Accept: "text/plain, application/json, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: name, phone: phone, email:email, message:message }),
    })
      .then((response) => response.json())
      .then((dataDeFormulario) => {
        console.log(dataDeFormulario);
      });
    /* body.value = ""; */

    
  }


