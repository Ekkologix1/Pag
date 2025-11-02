// Crear corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('heartsContainer').appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Generar corazones periódicamente
setInterval(createHeart, 800);

// Crear algunos corazones iniciales
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 300);
}