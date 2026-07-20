const imagenes=[

"./images/pagina1.png",

"./images/pagina2.png",

"./images/pagina3.png",

"./images/pagina4.png"

];

let pagina=0;

function actualizar(){

document.getElementById("imagenCarta").src=imagenes[pagina];

document.getElementById("contador").innerHTML="Página "+(pagina+1)+" de "+imagenes.length;

const botones=document.querySelectorAll(".controles button");

botones[0].disabled=(pagina===0);

botones[1].disabled=(pagina===imagenes.length-1);

}

function siguiente(){

if(pagina<imagenes.length-1){

pagina++;

actualizar();

}

}

function anterior(){

if(pagina>0){

pagina--;

actualizar();

}

}

let inicioX = 0;
let finX = 0;

const imagen = document.getElementById("imagenCarta");

imagen.addEventListener("touchstart", function(e){
    inicioX = e.changedTouches[0].screenX;
});

imagen.addEventListener("touchend", function(e){

    finX = e.changedTouches[0].screenX;

    if(inicioX - finX > 50){
        siguiente();
    }

    if(finX - inicioX > 50){
        anterior();
    }

});

function toggleMenu(){

document.getElementById("menuLinks").classList.toggle("show");

}
