
var modal = document.getElementsByClassName("container-modal")[0];
var titleModal = document.querySelector("#title-modal");
var textModal= document.querySelector("#text-modal");
var cercle= document.getElementsByClassName("cercle");
function openModal(membres){
    if(membres === "tete"){
        titleModal.innerHTML= "La tête";
        textModal.innerHTML="La tête est ce qui nous sert à réfléchir et à développer même si certains ne s'en servent pas assez :P";
        cercle[0].style.backgroundColor= "rgba(255,0,0,0.8)";
    }
    else if ( membres === "epaule"){
        titleModal.innerHTML= "Les Epaules";
        textModal.innerHTML="Les épaules nous servent à supporter le poids de toutes ces connaissances";
        cercle[1].style.backgroundColor= "rgba(255,0,0,0.8)";
    }
    else if ( membres === "ventre"){
        titleModal.innerHTML= "Le Ventre";
        textModal.innerHTML="Là où le stress nous bousille l'estomac et les intestins";
        cercle[2].style.backgroundColor= "rgba(255,0,0,0.8)";

    }
    else if ( membres === "appareil reproducteur"){
        titleModal.innerHTML= "L'appareil reproducteur";
        textModal.innerHTML="Ce dont on a plus le  temps de se servir avec tout ces cours x)";
        cercle[3].style.backgroundColor= "rgba(255,0,0,0.8)";

    }
    else if ( membres === "jambes"){
        titleModal.innerHTML= "Les Jambes";
        textModal.innerHTML="Ce dont on a besoin pour arriver en courant quand on est en retard";
        cercle[4].style.backgroundColor= "rgba(255,0,0,0.8)";

    }
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
    cercle[0].style.backgroundColor= "rgba(0,0,0,0.5)";
    cercle[1].style.backgroundColor= "rgba(0,0,0,0.5)";
    cercle[2].style.backgroundColor= "rgba(0,0,0,0.5)";
    cercle[3].style.backgroundColor= "rgba(0,0,0,0.5)";
    cercle[4].style.backgroundColor= "rgba(0,0,0,0.5)";


}
window.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal();
    }
})
