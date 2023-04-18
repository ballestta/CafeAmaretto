function modalReserva() {
    document.getElementById("modalFormularioRes").style.display="block";
    document.documentElement.style.overflow="hidden";
}

function modalReserva () {
    document.getElementById("modalFormularioRes").style.display="block";
    document.documentElement.style.overflow="hidden";

    var nombre = document.getElementById("formNombre").value;
    var fecha = document.getElementById("formFecha").value;
    var hora = document.getElementById("formHora").value;

    var mensaje;

    mensaje = "Mr/ms " + nombre + ", tiene su reserva confirmada el dia " + fecha + " a las " + hora;

    document.getElementById("mensajeRes").innerHTML = mensaje;
}


function modalPedido () {
    document.getElementById("modalFormularioPed").style.display="block";
    document.documentElement.style.overflow="hidden";

    var nombreApe = document.getElementById("formNombreApe").value;
    var direccion = document.getElementById("formDireccion").value;
    var pedido = document.getElementById("formPedido").value;

    var mensaje;


    mensaje = "Mr/ms " + nombreApe + ", su pedido a " + direccion + " de " + pedido + " ha sido tramitado con éxito";

    document.getElementById("mensajePed").innerHTML = mensaje;
}



function CerrarVentana(){
    document.getElementById("modalFormularioRes").style.display="none";
    document.getElementById("modalFormularioPed").style.display="none";
    document.documentElement.style.overflow="auto";

    document.getElementById("formNombre").value ="";
    document.getElementById("formFecha").value ="";
    document.getElementById("formHora").value ="";
    document.getElementById("formNombreApe").value ="";
    document.getElementById("formDireccion").value ="";
    document.getElementById("formPedido").value ="";

}

/* Slideshow */ 

var bgCounter = 0;

function heroSlideshow() {

    var listaImgBg = [
        "url('Media/Hero.jpg')", 
        "url('Media/Hero2.jpg')",
        "url('Media/Hero3.jpg')",
        "url('Media/Hero4.jpg')",
        "url('Media/Hero5.jpg')"

    ];

    bgCounter++;

    if(bgCounter == listaImgBg.length){
        bgCounter = 0;
    }

    document.getElementById("encabezado").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))," + listaImgBg[bgCounter];
}

    //slideshow automatico

    var counterNext = 0;
    var counterMain = 0;

    function slideshowAnim() {

        var listaImgBgAnim = document.getElementsByClassName("fondosHero");
        counterNext++;
        counterMain = counterNext-1;

        if(counterNext == listaImgBgAnim.length){
            counterNext = 0;
        }

        if(counterMain <0){
            counterMain = listaImgBgAnim.length-1;
        }


        for (var i=0; i<listaImgBgAnim.length; i++){
            
            listaImgBgAnim[i].classList.remove("nextSlide");
            listaImgBgAnim[i].classList.remove("mainSlide");
            listaImgBgAnim[i].classList.remove("hiddenSlide");

            if(i == counterNext){
                listaImgBgAnim[i].classList.add("nextSlide");
            }

            else if (i == counterMain){
                listaImgBgAnim[i].classList.add("mainSlide");
            }
            else {
                listaImgBgAnim[i].classList.add("hiddenSlide");
            }
        }

    }






var posPreviaScroll = document.documentElement.scrollTop;


window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu() {

    var posActualScroll = document.documentElement.scrollTop;

    if (posPreviaScroll>posActualScroll){

        document.getElementById("navBar").style.top = "0";
    }
    else{
        document.getElementById("navBar").style.top = "-150px"
    }
    
    posPreviaScroll = posActualScroll;
}

/*Codigo Lightbox*/

var listaRutaImgGal = [];
var numeroImg =0;



function readyLightbox() {
    
    var listaImagenesGaleria = document.getElementsByClassName("imgGal");
    
    

    for (var i=0; i<listaImagenesGaleria.length ;i++){
        listaRutaImgGal.push(listaImagenesGaleria[i].src);
    }

    for(var i=0; i<listaImagenesGaleria.length; i++) {
        listaImagenesGaleria[i].addEventListener('click', openLightbox);
    }

    function openLightbox() {
        var rutaImgClicked = event.currentTarget.src;
        numeroImg = listaRutaImgGal.indexOf(rutaImgClicked);

        
        document.getElementById("imagenParaMostrar").innerHTML = "<img class='imagenLightbox' src=" + listaRutaImgGal[numeroImg] +">";
        document.getElementById("modalLightboxGaleria").style.display = "block";
        document.documentElement.style.overflow = "hidden";
        closeLightbox();

    }

    function closeLightbox() {
        window.addEventListener("click", function(event){

            if (!event.target.matches(".imagenLightbox") && !event.target.matches(".imgGal") && !event.target.matches(".botonesLightbox") && !event.target.matches(".fa-solid")){
                document.getElementById("modalLightboxGaleria").style.display = "none";
                document.documentElement.style.overflow = "auto";
            }
        });
    }

}




function nextImgGal() {
    numeroImg++;

    if(numeroImg == listaRutaImgGal.length){
        numeroImg = 0;
    }

    document.getElementById("imagenParaMostrar").innerHTML = "<img class='imagenLightbox' src=" + listaRutaImgGal[numeroImg] +">";

}





function prevImgGal() {
    numeroImg--;

    if(numeroImg < 0) {
        numeroImg = listaRutaImgGal.length -1;
    }

    document.getElementById("imagenParaMostrar").innerHTML = "<img class='imagenLightbox' src=" + listaRutaImgGal[numeroImg] +">";

}

/* Carta */ 

function marcarPestania(contenedorAMostrar, tabClicked) {
    var listaConPestanias = document.getElementsByClassName("contenedorPestania");

    for (var i=0; i<listaConPestanias.length; i++){
        listaConPestanias[i].style.display="none";
    }

    document.getElementById(contenedorAMostrar).style.display = "block";


var tabLinks= document.getElementsByClassName("etiquetaPestania");

for(var i=0; i<tabLinks.length; i++){
    tabLinks[i].classList.remove("pestaniaActiva");
}

document.getElementById(tabClicked).classList.add("pestaniaActiva");
console.log("pestaniaActiva");

}


