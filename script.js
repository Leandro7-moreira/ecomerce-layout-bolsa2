// Código para Slider
// Slider automático baseado nas imagens com classe .slide

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider .slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(autoSlide, 5000); // Troca a cada 5 segundos
});

function navigateProductImages(button, direction) {
    const productImages = button.closest('.product-images');
    const images = productImages.querySelectorAll('.main-img');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    // Remove a classe active da imagem atual
    images[currentIndex].classList.remove('active');
    
    // Calcula o novo índice
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    
    // Adiciona a classe active na nova imagem
    images[newIndex].classList.add('active');
}

// Função para gerenciar o botão de rolar para o topo
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Adiciona o evento de rolagem
window.onscroll = function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight; // Altura total rolável
    const scrollPosition = window.scrollY || document.documentElement.scrollTop; // Posição atual da rolagem

    // Aparece o botão quando chega perto do fim da página, ajustando o valor de -200 conforme necessidade
    if (scrollPosition >= scrollableHeight - 750) { 
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.style.opacity = "1"; // Suavidade ao aparecer
    } else {
        scrollToTopBtn.style.display = "none";
        scrollToTopBtn.style.opacity = "0"; // Suavidade ao desaparecer
    }
};

// Ao clicar no botão, rola suavemente para o topo
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

