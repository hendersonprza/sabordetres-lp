/* WhatsApp URL Generator */
const whatsappUrl = "https://wa.me/5541987700034?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20del%20Pan%20de%20Jam%C3%B3n%20de%201kg.";

const whatsappLink = document.getElementById('whatsapp-link');
if (whatsappLink) {
    whatsappLink.href = whatsappUrl;
    whatsappLink.target = "_blank"; // esto sí va como atributo del <a>
    whatsappLink.rel = "noreferrer"; // buena práctica de seguridad
}

const mensagemWhatsApp = "https://wa.me/5541987700034?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido.";
const links = document.querySelectorAll(".btn-whatsapp")
links.forEach(link => {
	link.href = whatsappUrl;
	link.target = "_blank";
	link.rel = "noreferrer";
})
// ===========================================
// PASO 1: MENÚ HAMBURGUESA - MOBILE
// ===========================================

// Seleccionamos los elementos del DOM

// Elementos principales
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = navMenu ? navMenu.querySelectorAll('.nav-link') : [];

// Overlay (se crea dinámicamente cuando se abre el menú)
let overlay = null;

function createOverlay() {
	if (document.querySelector('.overlay')) return;
	overlay = document.createElement('div');
	overlay.className = 'overlay';
	overlay.addEventListener('click', closeMenu);
	document.body.appendChild(overlay);
}

function removeOverlay() {
	const existing = document.querySelector('.overlay');
	if (existing) {
		existing.removeEventListener('click', closeMenu);
		existing.remove();
	}
	overlay = null;
}

function openMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.add('active');
    navToggle.classList.add('active');  // Anima el botón hamburguesa
    navToggle.setAttribute('aria-expanded', 'true');
    createOverlay();
    // Activa el overlay con transición
    if (overlay) {
        overlay.classList.add('active');
    }
    // Evita scroll del body mientras el menú está abierto (opcional)
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
	if (!navMenu || !navToggle) return;
	navMenu.classList.remove('active');
	navToggle.classList.remove('active');  // Deshace la animación del botón
	navToggle.setAttribute('aria-expanded', 'false');
	// Desactiva el overlay con transición
	if (overlay) {
		overlay.classList.remove('active');
		// Espera a que termine la transición antes de remover
		setTimeout(removeOverlay, 300);
	} else {
		removeOverlay();
	}
	document.body.style.overflow = '';
}

function toggleMenu() {
	if (!navMenu) return;
	if (navMenu.classList.contains('active')) closeMenu();
	else openMenu();
}

// Evento: Click en el botón hamburguesa
if (navToggle) {
	// Aseguramos un estado inicial
	navToggle.setAttribute('aria-expanded', 'false');
	navToggle.addEventListener('click', toggleMenu);
}

// Cerrar el menú al hacer clic en cualquier enlace del nav
if (navLinks.length) {
	navLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') closeMenu();
});

// Cerrar automáticamente si la ventana se redimensiona por encima de un breakpoint
window.addEventListener('resize', () => {
	if (window.innerWidth >= 768) closeMenu();
});


// ===========================================
// PASO 2: EFECTO SCROLL EN NAVBAR
// ===========================================

function handleScroll() {
	if (!navbar) return;
	const offset = 50; // píxeles antes de aplicar la clase
	if (window.scrollY > offset) navbar.classList.add('scrolled');
	else navbar.classList.remove('scrolled');
}

window.addEventListener('scroll', handleScroll, { passive: true });
// Ejecutar una vez al cargar para ajustar el estado inicial
document.addEventListener('DOMContentLoaded', handleScroll);

/*
Lo quité pq no me gustó cómo quedaba visualmente
// ===========================================
// PASO 3: EFECTO PARALLAX EN HERO
// ===========================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;  // Velocidad del parallax (0.5 = 50% más lento)
    
    if (hero) {
        // Mueve el fondo verticalmente
        hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
    }
});

// Explicación del parallax:
// - scrolled = cuántos píxeles has hecho scroll
// - parallaxSpeed = qué tan rápido se mueve el fondo
// - 0.5 = el fondo se mueve a mitad de velocidad
// - Resultado: sensación de profundidad 3D

*/

