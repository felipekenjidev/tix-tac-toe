// Selecionar os Elementos da Grade do Jogo da Velha
const areas = document.querySelectorAll(".area-grade");
let turnoCirculo = true;

// Criar o Evento de Clique na Grade
areas.forEach(function(area) {
    area.addEventListener("click", function() {
        // Adicionar a Forma
        if (turnoCirculo) {
            area.innerHTML = `<svg viewBox="0 0 150 150" class="icone-o">
                                <circle class="circulo-animado" cx="75" cy="75" r="67" />
                            </svg>`;
        } else {
            area.innerHTML = `<svg viewBox="0 0 150 150" class="icone-x">
                                <path d="M 15 15 L 135 135" />
                                <path d="M 135 15 L 15 135" />
                            </svg>`;
        }
        
        // Passar o Turno para o Próximo Jogador
        turnoCirculo = !turnoCirculo;
    });
});