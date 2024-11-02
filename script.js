function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

     // Selecionar as duas primeiras imagens da seção de habilidades
     var icons = document.querySelectorAll('#sec1 #icon img');
    
     // Verifica se o dark mode está ativado
     if (element.classList.contains("dark-mode")) {
         // Troca para as imagens do modo escuro
         icons[3].src = 'Habilidades-DM/figma.png'; 
         icons[5].src = 'Habilidades-DM/JS.png';
         icons[6].src = 'Habilidades-DM/hardware.png';
         icons[7].src = 'Habilidades-DM/VM.png';
         icons[9].src = 'Habilidades-DM/microsoft.png';
     } else {
         // Troca de volta para as imagens do modo claro
         icons[3].src = 'Icones/figma.png'; 
         icons[5].src = 'Icones/JS.png';
         icons[6].src = 'Icones/hardware.png';
         icons[7].src = 'Icones/cloud.png';
         icons[9].src = 'Icones/microsoft.png';
     }
}

document.addEventListener('DOMContentLoaded', function () {
    const carrossel = document.getElementById('carroceu');
    const items = carrossel.querySelectorAll('a');
    const prevButton = document.getElementById('svg2');
    const nextButton = document.getElementById('svg1');

    let currentIndex = 0;
    const itemsCount = items.length;
    let itemsToShow = window.innerWidth <= 850 ? 1 : 3; // Mostra 1 item em telas pequenas e 3 em maiores

    // Atualiza a quantidade de itens a mostrar em redimensionamentos de tela
    window.addEventListener('resize', function () {
        itemsToShow = window.innerWidth <= 850 ? 1 : 3;
        updateCarousel();
    });

    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.display = 'none';
        });
        
        for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
            items[i % itemsCount].style.display = 'flex';
        }
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % itemsCount;
        updateCarousel();
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + itemsCount) % itemsCount;
        updateCarousel();
    }

    nextButton.addEventListener('click', nextItem);
    prevButton.addEventListener('click', prevItem);

    updateCarousel();
});

const buttons = document.querySelectorAll(".pulse-button");

buttons.forEach(button => {
    button.addEventListener("mouseover", function() {
        button.classList.add("pulse"); // Adiciona a classe de pulsação
    });

    button.addEventListener("mouseout", function() {
        button.classList.remove("pulse"); // Remove a classe de pulsação
    });
});

const button = document.getElementById("my-button");
const header = document.getElementById("menu");

button.addEventListener('click', () => {
    document.getElementById("menu").classList.toggle('show');
});