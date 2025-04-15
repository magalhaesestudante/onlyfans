document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    let currentIndex = 0;
    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";
    
    // Função para exibir a próxima imagem do carrossel
    function showNextImage() {
      const totalImages = carouselContainer.childElementCount;
      if (totalImages === 0) return;
      currentIndex = (currentIndex + 1) % totalImages;
      carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    // Chama a função showNextImage a cada 3 segundos
    setInterval(showNextImage, 3000);
  
    // Busca as fotos de gatos da API e insere no carrossel
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const img = document.createElement("img");
          img.src = item.url;
          img.alt = "Gatinho fofo";
          carouselContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Erro ao carregar as imagens:", error));
  });
  