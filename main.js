let mainBox = document.querySelector("#main-content");
let btnFormacion = document.querySelector("#formacion");
let btnExperiencia = document.querySelector("#exp");
let btnProyectos = document.querySelector("#btn-proyectos");
let boxProyectos = document.querySelector("#box-proyectos");

//CLASES
let mainContainerClass = "w-full flex flex-col md:flex-row justify-between p-1 gap-1 p-3 cv__main--body-content";
let btnRotated = "fa-solid fa-greater-than hover:text-orange-400 rotate-90 mb-3";
let btnDefault = "fa-solid fa-greater-than hover:text-orange-400 hover:rotate-90 transition-transform mb-3";
let boxProyectosClass = "flex flex-col sm:flex-row w-full justify-between gap-1 mb-3 cv__main--projects-box";

//HTML
let formacionHTML = `<div class="w-full lg:w-1/3 shadow-sm shadow-sky-200 hover:shadow-lg transition-shadow duration-300 rounded-md p-3">
        <div class="w-full border-b-1 border-sky-200 font-bold">
          <h3 class="text-sky-100 text-sm md:text-base">Bootcamp Full Stack Developer</h3>
          <p class="ms-1 text-sm md:text-base">4Geeks Academy 2025</p>
        </div>
        <div class="w-full flex mt-3">
          <ul class="w-1/2">
            <li><i class="fa-brands fa-html5 hover:text-orange-600"></i></i> HTML</li>
            <li><i class="fa-brands fa-css3-alt hover:text-sky-500"></i> CSS</li>
            <li><i class="fa-brands fa-js hover:text-yellow-300"></i> JavaScript</li>
            <li><i class="fa-brands fa-react hover:text-cyan-400"></i> React</li>
            <li><i class="fa-brands fa-python hover:text-white"></i> Python</li>
          </ul>
          <ul class="w-1/2">
            <li><i class="fa-brands fa-css hover:text-cyan-400"></i> TailwindCSS</li>
            <li><i class="fa-brands fa-bootstrap hover:text-purple-600"></i> Bootstrap</li>
            <li><i class="fa-solid fa-wifi hover:text-teal-500"></i> Netlify</li>
            <li><i class="fa-brands fa-sass hover:text-pink-300"></i> SASS y SCSS</li>
            <li><i class="fa-brands fa-git-alt hover:text-red-500"></i> Git</li>
          </ul>
        </div>
      </div>
      <div class="w-full lg:w-1/3 shadow-sm shadow-sky-200 hover:shadow-lg transition-shadow duration-300 rounded-md p-3">
        <div class="w-full border-b-1 border-sky-200 font-bold">
          <h3 class="text-sky-100 text-sm md:text-base">Curso Superior en Desarrollo de Páginas Web</h3>
          <p class="ms-1 text-sm md:text-base">MasterD 2021-2022</p>
        </div>
        <div class="w-full flex mt-3">
          <ul class="w-1/2">
            <li><i class="fa-brands fa-html5 hover:text-orange-600"></i></i> HTML</li>
            <li><i class="fa-brands fa-css3-alt hover:text-sky-500"></i> CSS</li>
            <li><i class="fa-brands fa-js hover:text-yellow-300"></i> JavaScript</li>
          </ul>
          <ul class="w-1/2">
            <li><i class="fa-brands fa-php hover:text-indigo-400"></i> PHP</li>
            <li><i class="fa-brands fa-linux hover:text-black"></i> Linux</li>
            <li><i class="fa-solid fa-server hover:text-red-600"></i> Apache</li>
          </ul>
        </div>
      </div>
      <div class="w-full lg:w-1/3 shadow-sm shadow-sky-200 hover:shadow-lg transition-shadow duration-300 rounded-md p-3">
        <div class="w-full border-b-1 border-sky-200 font-bold">
          <h3 class="text-sky-100 text-sm md:text-base">W3Schools</h3>
          <p class="ms-1 text-sm md:text-base">w3schools.com</p>
        </div>
        <div class="w-full flex mt-3 mb-2">
          <ul class="w-1/2">
            <li><i class="fa-brands fa-js hover:text-yellow-300"></i> JavaScript</li>
            <li><i class="fa-brands fa-git-alt hover:text-red-500"></i> Git</li>
            <li><i class="fa-brands fa-github hover:text-black"></i> GitHub</li>
          </ul>
        </div>  
        <div class="w-full border-b-1 border-t-1 border-sky-200 font-bold mt-2">
          <h3 class="text-sky-100 text-sm md:text-base">freeCodeCamp</h3>
          <p class="ms-1 text-sm md:text-base">freeCodeCamp.org</p>
        </div>    
        <div class="w-full flex mt-3">
          <ul class="w-1/2">
            <li><i class="fa-brands fa-html5 hover:text-orange-600"></i></i> HTML</li>
            <li><i class="fa-brands fa-css3-alt hover:text-sky-500"></i> CSS</li>
          </ul>
        </div> 
      </div>
    </div>`;

let experienciaHTML = `<div class="w-full lg:w-1/3 shadow-sm shadow-sky-200 hover:shadow-lg transition-shadow duration-300 rounded-md p-3">
        <div class="w-full flex flex-row gap-1 items-center border-b-1 border-sky-200 font-bold">
          <h3 class="text-sky-100 text-sm md:text-base">Portfolio WIP!</h3>
          <a href="https://github.com/Adr1Est" target="_blank">
            <i class="fa-brands fa-github text-xl hover:text-violet-400"></i>
          </a>
        </div>
        <div class="w-full flex mt-3">
          <ul class="w-full">
            <li><i class="fa-brands fa-github hover:text-black"></i> Enlace github</li>
            <li><i class="fa-brands fa-github hover:text-black"></i> Enlace github</li>
            <li><i class="fa-brands fa-github hover:text-black"></i> Enlace github</li>
            <li><i class="fa-brands fa-github hover:text-black"></i> Enlace github</li>
            <li><i class="fa-brands fa-github hover:text-black"></i> Enlace github</li>
          </ul>
        </div>
      </div>
      <div class="w-full lg:w-1/3 shadow-sm shadow-sky-200 hover:shadow-lg transition-shadow duration-300 rounded-md p-3">
        <div class="w-full border-b-1 border-sky-200 font-bold">
          <h3 class="text-sky-100 text-sm md:text-base">Empaquetador de pedidos de alimentación y mercancía general</h3>
          <p class="ms-1 text-sm md:text-base">El Corte Inglés</p>
        </div>
        <div class="w-full flex mt-3">
          <ul class="w-full">
            <li><i class="fa-solid fa-circle-notch hover:text-green-600"></i> Realizar, empaquetar y etiquetar pedidos a domicilio realizados online y en tienda.</li>
          </ul>
        </div>
      </div>
      <div class="w-full lg:w-1/3 shadow-sm shadow-sky-200 hover:shadow-lg transition-shadow duration-300 rounded-md p-3">
        <div class="w-full border-b-1 border-sky-200 font-bold">
          <h3 class="text-sky-100 text-sm md:text-base">Editor de video</h3>
          <p class="ms-1 text-sm md:text-base">Por cuenta propia</p>
        </div>
        <div class="w-full flex mt-3">
          <ul class="w-full">
            <li><i class="fa-solid fa-eye-dropper hover:text-fuchsia-500"></i> Colorista certificado por Blackmagic</li>
            <li><i class="fa-solid fa-film hover:text-neutral-300"></i> Cortometrajes</li>
            <li><i class="fa-solid fa-hashtag hover:text-neutral-300"></i> Redes sociales</li>
            <li><i class="fa-solid fa-cart-plus hover:text-neutral-300"></i> Publicidad</li>
          </ul>
        </div>
      </div>`;

let proyectosHTML = `<div class="flex flex-col justify-center w-full lg:w-1/4 p-3 rounded-md hover:shadow-lg shadow-sky-200 transition-shadow duration-300 cv__main--projects-box-item">
          <div class="aspect-1/1 mb-1">
            <a href="https://adrian-estevez-bootstrap-ig-feed.netlify.app/" target="_blank">
              <img src="./img/proyecto-feed-ig.png" class="w-full h-full hover:scale-105 transition-transform object-cover rounded-md" alt="">
            </a>
          </div>
          <h4 class="text-center">Clon Feed de Instagram</h4>
          <div class="w-full flex flex-row justify-center gap-1">
            <i class="fa-brands fa-html5 hover:text-orange-600"></i>
            <i class="fa-brands fa-bootstrap hover:text-purple-600"></i>
          </div>
        </div>

        <div class="flex flex-col justify-center w-full lg:w-1/4 p-3 rounded-md hover:shadow-lg shadow-sky-200 transition-shadow duration-300 cv__main--projects-box-item">
          <div class="aspect-1/1 mb-1">
            <a href="#" target="_blank">
              <img src="./img/default.jpg" class="w-full h-full hover:scale-105 transition-transform object-cover rounded-md" alt="">
            </a>
          </div>
          <h4 class="text-center">WIP!</h4>
          <div class="w-full flex flex-row justify-center gap-1">
            <i class="fa-brands fa-html5 hover:text-orange-600"></i>
            <i class="fa-brands fa-css hover:text-cyan-400"></i>
          </div>
        </div>

        <div class="flex flex-col justify-center w-full lg:w-1/4 p-3 rounded-md hover:shadow-lg shadow-sky-200 transition-shadow duration-300 cv__main--projects-box-item">
          <div class="aspect-1/1 mb-1">
            <a href="#">
              <img src="./img/default.jpg" class="w-full h-full hover:scale-105 transition-transform object-cover rounded-md" alt="">
            </a>
          </div>
          <h4 class="text-center">WIP!</h4>
          <div class="w-full flex flex-row justify-center gap-1">
            <i class="fa-brands fa-html5 hover:text-orange-600"></i>
            <i class="fa-brands fa-css hover:text-cyan-400"></i>
          </div>
        </div>

        <div class="flex flex-col justify-center w-full lg:w-1/4 p-3 rounded-md hover:shadow-lg shadow-sky-200 transition-shadow duration-300 cv__main--projects-box-item">
          <div class="aspect-1/1 mb-1">
            <a href="#">
              <img src="./img/default.jpg" class="w-full h-full hover:scale-105 transition-transform object-cover rounded-md" alt="">
            </a>
          </div>
          <h4 class="text-center">WIP!</h4>
          <div class="w-full flex flex-row justify-center gap-1">
            <i class="fa-brands fa-html5 hover:text-orange-600"></i>
            <i class="fa-brands fa-css hover:text-cyan-400"></i>
          </div>
        </div>`;

window.onload = () => {
  mainBox.innerHTML = "";
}

function manejoBotones(btn) {
  let mainHTML;
  if (btn === btnExperiencia) {
    btn.className = (btn.className === btnRotated) ? btnDefault : btnRotated;
    btnFormacion.className = btnDefault;

    if (btn.className === btnRotated) {
      mainHTML = experienciaHTML;
      mainBox.className = mainContainerClass;
      mainBox.innerHTML = mainHTML;
    } else {
      mainBox.className = "";
      mainBox.innerHTML = "";
    }
  }

  if (btn === btnFormacion) {
    btn.className = (btn.className === btnRotated) ? btnDefault : btnRotated;
    btnExperiencia.className = btnDefault;

    if (btn.className === btnRotated) {
      mainHTML = formacionHTML;
      mainBox.className = mainContainerClass;
      mainBox.innerHTML = mainHTML;
    } else {
      mainBox.className = "";
      mainBox.innerHTML = "";
    }
  }
}

btnExperiencia.addEventListener("click", () => { manejoBotones(btnExperiencia); });
btnFormacion.addEventListener("click", () => { manejoBotones(btnFormacion); });
btnProyectos.addEventListener("click", () => {
  btnProyectos.className = (btnProyectos.className === btnRotated) ? btnDefault : btnRotated;

  if (btnProyectos.className === btnRotated) {
    boxProyectos.innerHTML = proyectosHTML;
    boxProyectos.className = boxProyectosClass;
  } else {
    boxProyectos.innerHTML = "";
    boxProyectos.className = "";
  }
});