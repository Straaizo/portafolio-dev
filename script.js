const proyectos = [
  {
    titulo: "SkateShop",
    descripcion: "E-Commerce con carrito de compras funcional.",
    tecnologias: ["Django", "SQL", "Python"],
    link: "https://github.com/Straaizo/SkateShop",
    imagenes: [
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/main/assets/images/Reservasymemorias.jpeg",
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/main/assets/images/Reservasymemorias.jpeg"
    ]
  },
  {
    titulo: "Reservas de espacios",
    descripcion: "Proyecto para DuocUC.",
    tecnologias: ["React", "NestJS", "Vite", "MongoDB"],
    link: "https://github.com/Shigaxz/Capstone-Project",
    imagenes: [
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/refs/heads/master/assets/images/Reservas/Reservasymemorias.jpeg",
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/refs/heads/master/assets/images/Reservas/ReservasPrincipal.jpeg",
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/refs/heads/master/assets/images/Reservas/Memorias.jpeg",
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/refs/heads/master/assets/images/Reservas/Reserva.jpeg",
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/refs/heads/master/assets/images/Reservas/Reserva%20Aprobada.jpeg",
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/refs/heads/master/assets/images/Reservas/Admin.jpeg"
    ]
  },
  {
    titulo: "Riesgo Crediticio",
    descripcion: "Proyecto Machine Learning / POST ",
    tecnologias: ["Colab / Python", "FastAPi"],
    link: "https://github.com/Shigaxz/Capstone-Project",
    imagenes: [
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/refs/heads/master/assets/images/RiesgoCrediticio/Crediticio1.jpeg",
      "https://raw.githubusercontent.com/Straaizo/portafolio-dev/refs/heads/master/assets/images/RiesgoCrediticio/Crediticio2.jpeg"
    ]
  }
];

const contenedor = document.getElementById('grid-proyectos');

proyectos.forEach((p, i) => {
    const card = `
        <div class="group bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300">
            
            <div class="w-full h-48 overflow-hidden border-b border-slate-700/50">
                <img src="${p.imagenes[0]}"  alt="${p.titulo}" data-index="${i}" class="cursor-pointer w-full h-full object-cover
                 object-center group-hover:scale-110 transition-transform duration-500">
            </div>
            <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-4">
                    ${p.tecnologias.map(t => `<span class="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-900/30 px-2 py-1 rounded">${t}</span>`).join('')}
                </div>
                
                <a href="${p.link}" target="_blank">
                    <h3 class="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition">${p.titulo}</h3>
                    <p class="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-2">${p.descripcion}</p>
                </a>

                <a href="${p.link}" target="_blank" class="inline-flex items-center font-semibold text-sm text-blue-400 hover:text-blue-300 transition-all">
                    Ver código 
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    `;
    contenedor.innerHTML += card;
});
const nameToType =" Enzo Sabattini";
const typingElement = document.getElementById("typing-name");
let index = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = typingElement.textContent;

    if (!isDeleting) {
        // Escribiendo
        typingElement.textContent = nameToType.substring(0, index + 1);
        index++;

        if (index === nameToType.length) {
            // Pausa cuando termina de escribir
            isDeleting = true;
            setTimeout(typeEffect, 1500); 
            return;
        }
    } else {
        // Borrando
        typingElement.textContent = nameToType.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    // Velocidad al escribir y borrar.
    const speed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, speed);
}

// Iniciar animación al cargar
window.addEventListener('load', typeEffect);

// Mantenemos el estilo del cursor parpadeante
const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink { 50% { border-color: transparent; } }
    #typing-name { animation: blink 1s step-end infinite; }
`;
document.head.appendChild(style);



// Carousel imagenes para proyectos.

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentProject = 0;
let currentImage = 0;

// abrir modal
document.addEventListener("click", e => {
  if (e.target.tagName === "IMG" && e.target.dataset.index) {
    currentProject = e.target.dataset.index;
    currentImage = 0;
    modalImg.src = proyectos[currentProject].imagenes[currentImage];
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
});

// cerrar
closeModal.onclick = () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
};

// navegación
next.onclick = () => {
  const imgs = proyectos[currentProject].imagenes;
  currentImage = (currentImage + 1) % imgs.length;
  modalImg.src = imgs[currentImage];
};

prev.onclick = () => {
  const imgs = proyectos[currentProject].imagenes;
  currentImage = (currentImage - 1 + imgs.length) % imgs.length;
  modalImg.src = imgs[currentImage];
};




console.log(proyectos);
console.log(contenedor);
