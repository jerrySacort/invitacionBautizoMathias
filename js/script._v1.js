const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const btnAbrirSobre = document.querySelector(".corazon");
const floresIzquierda = document.querySelector(".floresIzquierda");
const floresDerecha = document.querySelector(".floresDerecha");
const coronaFlores = document.querySelector(".coronaFlores");
const titulo = document.querySelector(".titulo");
const titulo2 = document.querySelector(".titulo2");
const btnCerrarCarta = document.querySelector(".btnCerrar")

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre")
        
        /*QUITAR ANIMACION DE SOBRE*/
        envoltura.classList.remove("animate__animated", "animate__infinite", "animate__tada");
        if (!carta.classList.contains("abierta")) {
           
            setTimeout(() => {
                carta.classList.add("mostrar-carta");
                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                    btnCerrarCarta.classList.remove("hidden");
                    setTimeout(function(){
                        animaciones();
                        

                    },500);

                    floresIzquierda.classList.add("wow","animate__animated","animate__zoomInLeft");
                    floresDerecha.classList.add("wow","animate__animated","animate__zoomInRight");
                    coronaFlores.classList.add("wow","animate__animated","animate__zoomIn");
                    titulo.classList.add("wow","animate__animated","animate__backInDown");
                    titulo2.classList.add("wow","fadeInUp");
                    titulo2.classList.add("wow","animate__animated","animate__backInDown");

                    
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".btnCerrar *")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre")
        btnCerrarCarta.classList.add("hidden");
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");
            setTimeout(() => {
                const particulas = document.querySelector(".contenedorParticulas");
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
                particulas.innerHTML = '';
                particulas.classList.remove("contenedorParticulas");
                particulas.classList.add("contenedorParticulas1");
            }, 500);
            setTimeout(() => {
                envoltura.classList.add("animate__animated","animate__infinite","animate__tada");
            }, 1000);
        }
    }else if(e.target.matches(".linkIglesia *")){
        const linkIglesia = "https://maps.app.goo.gl/uzMTPkEeFvT6oEWC9";
        window.open(linkIglesia, "_blank");
    }else if(e.target.matches(".linkTerraza *")){
        const linkTerraza = "https://maps.app.goo.gl/Bmix81NYKhDxmCcu6";
        window.open(linkTerraza, "_blank");
    }
})

const animaciones = () => {
     const elementos = carta.querySelectorAll(".animar");

    elementos.forEach((el, index) => {

        setTimeout(() => {

            const animacion = el.dataset.animacion;

            el.classList.add("wow", animacion);

        }, index * 500); // efecto uno tras otro

    });
}