const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const btnAbrirSobre = document.querySelector(".corazon");
const floresIzquierda = document.querySelector(".floresIzquierda");
const floresDerecha = document.querySelector(".floresDerecha");
const coronaFlores = document.querySelector(".coronaFlores");
const titulo = document.querySelector(".titulo");
const titulo2 = document.querySelector(".titulo2");
const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const senalDeLaCruz = document.querySelector(".senalDeLaCruz");
const versiculo = document.querySelector(".versiculo");
const versiculoPie = document.querySelector(".versiculoPie");
const diaEvento = document.querySelector(".diaEvento");
const fechaEvento = document.querySelector(".fechaEvento");
const mesEvento = document.querySelector(".mesEvento");
const iconoIglesia = document.querySelector(".iconoIglesia");
const direccionIglesia = document.querySelector(".direccionIglesia");
const iconoTerraza = document.querySelector(".iconoTerraza");
const direccionTerraza = document.querySelector(".direccionTerraza");
const pieDePagina = document.querySelector(".pieDePagina");
const btnCerrarCarta = document.querySelector(".btnCerrar");

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
                    
                    /*setTimeout(function(){
                        animaciones();
                        
                    },500);

                    var wow = new WOW();
                    wow.init();

                    floresIzquierda.classList.add("wow","animate__animated","animate__zoomInLeft");
                    floresIzquierda.setAttribute("data-wow-duration","1.1s");
                    floresIzquierda.setAttribute("data-wow-delay","1s");

                    floresDerecha.classList.add("wow","animate__animated","animate__zoomInRight");
                    floresDerecha.setAttribute("data-wow-duration","1.1s");
                    floresDerecha.setAttribute("data-wow-delay","1s");

                    coronaFlores.classList.add("wow","animate__animated","animate__zoomIn");
                    coronaFlores.setAttribute("data-wow-duration","1.1s");
                    coronaFlores.setAttribute("data-wow-delay","1s");

                    titulo.classList.add("wow","animate__animated","animate__backInDown");
                    titulo.setAttribute("data-wow-duration","1s");
                    titulo.setAttribute("data-wow-delay",".9s");

                    titulo2.classList.add("wow","animate__animated","animate__backInDown");
                    titulo2.setAttribute("data-wow-duration","1s");
                    titulo2.setAttribute("data-wow-delay",".9s");

                    nombre.classList.add("animate__fadeInUp");
                    setTimeout(function(){
                        nombre.classList.remove("animate__fadeInUp");
                        nombre.classList.add("animate-aurora");
                    },800);

                    apellido.classList.add("wow","animate__animated","animate__zoomInUp");
                    apellido.setAttribute("data-wow-duration","1.1s");
                    apellido.setAttribute("data-wow-delay","1s");

                    senalDeLaCruz.classList.add("wow","animate__animated","animate__bounceIn");
                    senalDeLaCruz.setAttribute("data-wow-duration","1.1s");
                    senalDeLaCruz.setAttribute("data-wow-delay","1s");

                    versiculo.classList.add("wow","animate__animated","animate__fadeInLeft");
                    versiculo.setAttribute("data-wow-duration","1.1s");
                    versiculo.setAttribute("data-wow-delay","1s");

                    versiculoPie.classList.add("wow","animate__animated","animate__fadeInRight");
                    versiculoPie.setAttribute("data-wow-duration","1.1s");
                    versiculoPie.setAttribute("data-wow-delay","1s");

                    diaEvento.classList.add("wow","animate__animated","animate__fadeInLeft");
                    diaEvento.setAttribute("data-wow-duration","1.1s");
                    diaEvento.setAttribute("data-wow-delay","1s");

                    fechaEvento.classList.add("wow","animate__animated","animate__fadeOut");
                    fechaEvento.setAttribute("data-wow-duration","1.1s");
                    fechaEvento.setAttribute("data-wow-delay","1s");

                    mesEvento.classList.add("wow","animate__animated","animate__fadeInRight");
                    mesEvento.setAttribute("data-wow-duration","1.1s");
                    mesEvento.setAttribute("data-wow-delay","1s");

                    iconoIglesia.classList.add("wow","animate__animated","animate__backInLeft");
                    iconoIglesia.setAttribute("data-wow-duration","1.1s");
                    iconoIglesia.setAttribute("data-wow-delay","1s");

                    direccionIglesia.classList.add("wow","animate__animated","animate__backInLeft");
                    direccionIglesia.setAttribute("data-wow-duration","1.1s");
                    direccionIglesia.setAttribute("data-wow-delay","1s");

                    iconoTerraza.classList.add("wow","animate__animated","animate__backInRight");
                    iconoTerraza.setAttribute("data-wow-duration","1.1s");
                    iconoTerraza.setAttribute("data-wow-delay","1s");

                    direccionTerraza.classList.add("wow","animate__animated","animate__backInRight");
                    direccionTerraza.setAttribute("data-wow-duration","1.1s");
                    direccionTerraza.setAttribute("data-wow-delay","1s");

                    pieDePagina.classList.add("wow","animate__animated","animate__fadeInDown");
                    pieDePagina.setAttribute("data-wow-duration","1.1s");
                    pieDePagina.setAttribute("data-wow-delay","1s");*/

                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".btnCerrar *")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre")
        btnCerrarCarta.classList.add("hidden");
        nombre.classList.remove("animate-aurora");
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