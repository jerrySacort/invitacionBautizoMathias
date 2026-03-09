/*document.querySelectorAll('.corazon').forEach(elemento => {
  elemento.addEventListener('click', () => {
    const contenedor = document.querySelector('.contenedorParticulas');
    let particulas = '';
    for (let i = 0; i < 200; i++) {
      particulas += '<div class="circle-container"><div class="circle"></div></div>';
    }
    contenedor.insertAdjacentHTML('beforeend', particulas);
  });
});*/

document.querySelectorAll('.corazon').forEach(elemento => {
  elemento.addEventListener('click', () => {
    const contenedor = document.querySelector('.contenedorParticulas1');
    contenedor.classList.remove("contenedorParticulas1")
    contenedor.classList.add("contenedorParticulas");
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 200; i++) {
      const container = document.createElement('div');
      container.className = 'circle-container';
      const circle = document.createElement('div');
      circle.className = 'circle';
      container.appendChild(circle);
      fragment.appendChild(container);
    }
    contenedor.appendChild(fragment);
  });
});