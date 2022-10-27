// Inicio del acorden de la seccion de preguntas

let summary= document.querySelectorAll(".preguntas__ul-li-summary");
for (let i=0; i<=summary.length;i++){
    summary[i].onclick=function(){
        let hola=summary[i].firstElementChild;
        hola.classList.toggle("rotarIcono")
    }
}
//Fin del acordeon de la seccion de preguntas

// Inicio de Header responsive
const headerResponsive=()=>{
    let menu=document.querySelector(".menu");
    menu.classList.toggle("menuMostrar");
    menu.style.transition="all 1s";
    let iconoResponsive=document.getElementById("iconoResponsive");
    if (menu.classList.contains("menuMostrar")==true){
        document.body.style.overflowY ="hidden";
        iconoResponsive.classList.replace("fa-bars","fa-xmark")
    }else{
        document.body.style.overflowY ="scroll";
        iconoResponsive.classList.replace("fa-xmark","fa-bars")
    }
}

document.querySelector(".botonResponsive").onclick=function(){
    headerResponsive();
}
// Fin de header responsive