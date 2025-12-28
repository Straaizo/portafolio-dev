const proyectos = [
    {
        titulo: "SkateShop",
        descripcion: "E-Commerce con carrito de compras funcional.",
        tecnologias: ["Django", "SQL", "Python"],
        link: "https://github.com/Straaizo/SkateShop",
        imagen: "ruta/tu-imagen1.jpg" // Agrega aquí la ruta
    },
    {
        titulo: "Reservas de espacios",
        descripcion: "Proyecto para DuocUC.",
        tecnologias: ["React", "NestJS", "Vite", "MongoDB"],
        link: "https://github.com/Shigaxz/Capstone-Project",
        imagen: "ruta/tu-imagen2.jpg"
    },
    {
        titulo: "Dashboard Admin",
        descripcion: "Panel de control visual con gráficas y estadísticas.",
        tecnologias: ["Tailwind", "JS"],
        link: "#",
        imagen: "ruta/tu-imagen3.jpg"
    }
];

const contenedor = document.getElementById('grid-proyectos');

proyectos.forEach(p => {
    const card = `
        <div class="group bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300">
            
            <div class="w-full h-48 overflow-hidden border-b border-slate-700/50">
                <img src="${p.imagen}" alt="${p.titulo}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     onerror="this.src='https://via.placeholder.com/400x225/0f172a/3b82f6?text=Proyecto'">
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
const nameToType = "Enzo Sabattini";
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

    // Velocidad: más lento al escribir, más rápido al borrar
    const speed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, speed);
}

// Iniciar animación al cargar
window.addEventListener('load', typeEffect);

// Mantenemos el estilo del cursor parpadeante
const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink { 50% { border-color: transparent; } }
    #typing-name { animation: blink 0.7s step-end infinite; }
`;
document.head.appendChild(style);