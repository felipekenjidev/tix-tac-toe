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

        // Verificar Vitória ou Empate
        verificarResultado(areas, turnoCirculo);
    });
});


// Função para Verificar o Resultado do Jogo
function verificarResultado(areas, turnoCirculo) {
    // Criar uma Matriz dos Elementos da Grade
    let matrizElementos = [];
    for (let i = 0; i < areas.length; i += 3) {
        const linha = Array.from(areas).slice(i, i + 3);
        matrizElementos.push(linha);
    }

    // Testar as Combinações de Vitória
    const icones = ["icone-o", "icone-x"];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (pegarIcone(matrizElementos[j][0]) == icones[i]
                && pegarIcone(matrizElementos[j][1]) == icones[i]
                && pegarIcone(matrizElementos[j][2]) == icones[i]) {
                    console.log(`${icones[i]} venceu!`);
                }
            
            if (pegarIcone(matrizElementos[0][j]) == icones[i]
                && pegarIcone(matrizElementos[1][j]) == icones[i]
                && pegarIcone(matrizElementos[2][j]) == icones[i]) {
                    console.log(`${icones[i]} venceu!`);
                }
        }

        if (pegarIcone(matrizElementos[0][0]) == icones[i]
            && pegarIcone(matrizElementos[1][1]) == icones[i]
            && pegarIcone(matrizElementos[2][2]) == icones[i]) {
                console.log(`${icones[i]} venceu!`);
            }

        if (pegarIcone(matrizElementos[0][2]) == icones[i]
            && pegarIcone(matrizElementos[1][1]) == icones[i]
            && pegarIcone(matrizElementos[2][0]) == icones[i]) {
                console.log(`${icones[i]} venceu!`);
            }
    }
}

// Função para Pegar o Nome do Ícone da Área da Grade
function pegarIcone(area) {
    return area.firstChild?.classList[0];
}

// Função para Mostrar o Resultado
function mostrarResultado(resultado) {

}