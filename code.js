/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre = prompt("Ingresa tu nombre")
 datosPersona.ciudad = prompt("Ingresa tu ciudad de residencia")

 let aActual = new  Date().getFullYear()
 console.log (aActual)
  datosPersona.edad = aActual - parseInt(prompt("Año en que naciste"))

  let interesPorJs = confirm("Te interesa javascript")

  if (interesPorJs == true){
    datosPersona.interesPorJs = "Si"

  }else {
    datosPersona.interesPorJs = "No"
  }

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    let nombre = document.getElementById('nombre')
    let edad = document.getElementById('edad')
    let ciudad = document.getElementById('ciudad')
    let interesPorJs= document.getElementById('javascript')

    nombre.innerHTML = datosPersona.nombre
    edad.innerHTML = datosPersona.edad
   ciudad.innerHTML = datosPersona.ciudad
   interesPorJs.innerHTML = datosPersona.interesPorJs
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let contenedor = document.querySelector("#fila")
  if(contenedor.children.length === 0 ){
    for (let listadomaterias of listado){
      let template =`
      <div class= "caja" >
      <img src ="${listadomaterias.imgUrl}" alt="imagen">
      <p class="lenguajes">${listadomaterias.lenguajes}</p>
      <p class="bimestre">${listadomaterias.bimestre}</p>
      `
      contenedor.innerHTML += template
    }
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 var fondo = document.querySelector('#sitio')
 fondo.classList.toggle('dark')
  
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
 const texto = document.querySelector('body')

 texto.addEventListener("keypress",(event) => {
  if(event.key === "F"){
    const info = document.querySelector('#sobre-mi');
    info.classList.remove('oculto')
  }
})  
