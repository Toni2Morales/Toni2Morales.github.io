AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
    {
    title: "Gestor de Tareas con Django",
    cardImage: "assets/images/project-page/GestorDeTareas.png",
    description: "A chess engine for a popular game dev engine.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Githublink: "https://github.com/Toni2Morales/GestorDeTareasDjango",
  },
  {
    title: "Predicción del Parkinson",
    cardImage: "assets/images/project-page/parkinson.png",
    description: "A chess engine for a popular game dev engine.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Githublink: "https://github.com/Toni2Morales/PrediccionParkinson",
  },
  {
    title: "Reddit NLP y Spark",
    cardImage: "assets/images/project-page/Reddit.png",
    description: "A chess engine for a popular game dev engine.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Githublink: "https://github.com/Toni2Morales/ProyectoNLP",
  },
  {
    title: "Predicción sobre carreras de caballos",
    cardImage: "assets/images/project-page/CarreraDeCaballos.jpg",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://www.kaggle.com/code/tonimorales/analysis-and-next-position-prediction",
  },
  {
    title: "Predicción de calidad de mineral",
    cardImage: "assets/images/project-page/Mineria.jpeg",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/Toni2Morales/MachineLearning",
  },
  {
    title: "Predicción y Análisis de vinos(NLP)",
    cardImage: "assets/images/project-page/Vino.jpg",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/Toni2Morales/PrediccionyAnalisisDeVinos",
  },
    {
    title: "Clasificación de Ejercicios",
    cardImage: "assets/images/project-page/Workout.jpg",
    description: "A quiz app built using basic react.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/Toni2Morales/WorkoutClassifier",
  },
  {
    title: "Predicción del precio de motos",
    cardImage: "assets/images/project-page/Moto.jpg",
    description: "A quiz app built using basic react.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/Toni2Morales/PrediccionPrecioMoto",
  },
  {
    title: "Clasificación de imágenes",
    cardImage: "assets/images/project-page/Huevos.jpg",
    description: "Exercise tracker built using basic redux.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Githublink: "https://github.com/Toni2Morales/ClasificadorImagenes.git",
  },



];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="${Githublink}">${title}</a></h1>
                </div>
                <div id="Icono">
                  <a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
