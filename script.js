document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos da página
    const instructions = document.getElementById('instructions');
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');
    const result = document.getElementById('result');
    const temperamentDetails = document.getElementById('temperament-details');
 
    // Remove a classe 'hidden' para mostrar as instruções
    instructions.classList.remove('hidden');
 
    // Inicia a primeira parte do teste ao clicar no botão de início
    document.getElementById('start-part1').addEventListener('click', function () {
        instructions.classList.add('hidden');
        part1.classList.remove('hidden');
    });
 
    // Avança para a segunda parte do teste ao enviar a primeira parte
    document.getElementById('submit-part1').addEventListener('click', function () {
        if (validateAnswers(1, 19)) {  // Validação das respostas da Parte 1
            part1.classList.add('hidden');
            part2.classList.remove('hidden');
        } else {
            alert("Por favor, responda todas as perguntas da primeira parte.");
        }
    });
 
    // Exibe o resultado ao enviar a segunda parte do teste
    document.getElementById('submit-part2').addEventListener('click', function () {
        if (validateAnswers(20, 32)) {  // Validação das respostas da Parte 2
            part2.classList.add('hidden');
            result.classList.remove('hidden');
            showResult();
        } else {
            alert("Por favor, responda todas as perguntas da segunda parte.");
        }
    });
 
    // Finaliza o teste e recarrega a página
    document.getElementById('finish-test').addEventListener('click', function () {
        alert('Teste finalizado.');
        location.reload();
    });
 
    // Função para validar se todas as perguntas foram respondidas
    function validateAnswers(start, end) {
        for (let i = start; i <= end; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (!answer) {
                return false;  // Se alguma pergunta não for respondida, retorna falso
            }
        }
        return true;  // Todas as perguntas foram respondidas
    }
 
    // Função para calcular e exibir o resultado final
    function showResult() {
        let countA1 = 0, countB1 = 0;
        let countA2 = 0, countB2 = 0;
    
        // Contabiliza as respostas da Primeira Parte
        for (let i = 1; i <= 19; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer) {
                answer.value === 'A' ? countA1++ : countB1++;
            }
        }
    
        // Contabiliza as respostas da Segunda Parte
        for (let i = 20; i <= 32; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer) {
                answer.value === 'A' ? countA2++ : countB2++;
            }
        }
    
        // Determina o temperamento com base nas contagens
        let temperament = '';
        if (countA1 > countB1 && countA2 > countB2) {
            temperament = "Sanguíneo";
        } else if (countA1 > countB1 && countB2 > countA2) {
            temperament = "Colérico";
        } else if (countB1 > countA1 && countA2 > countB2) {
            temperament = "Fleumático";
        } else if (countB1 > countA1 && countB2 > countA2) {
            temperament = "Melancólico";
        }
    
        // Exibe o resultado na página
        let details = {
            "Sanguíneo": "Você é Sanguíneo. <br> Pessoas com temperamento sanguíneo são mais enérgicas e gostam de estar sempre ocupadas.",
            "Colérico": "Você é Colérico. <br> A pessoa com temperamento colérico é dominante e independente...",
            "Fleumático": "Você é Fleumático. <br> A pessoa com temperamento fleumático é estável e equilibrada...",
            "Melancólico": "Você é Melancólico. <br> Temperamento Melancólico e suas características..."
        };
    
        temperamentDetails.innerHTML = details[temperament] || '<p>Temperamento não identificado.</p>';
    
        // Define a imagem correspondente ao temperamento
        const imgElement = document.getElementById('temperament-img');
        const imgContainer = document.getElementById('temperament-image');
    
        switch (temperament) {
            case "Sanguíneo":
                imgElement.src = "https://andrewsilva.com.br/wp-content/uploads/2024/04/Caracteristicas-do-Temperamento-Sanguineo.png"; // Substitua pelo caminho da sua imagem
                break;
            case "Colérico":
                imgElement.src = "https://andrewsilva.com.br/wp-content/uploads/2024/04/Caracteristicas-do-Temperamento-Colerico.png"; // Substitua pelo caminho da sua imagem
                break;
            case "Fleumático":
                imgElement.src = "https://andrewsilva.com.br/wp-content/uploads/2024/04/Caracteristicas-do-Temperamento-Fleumatico.png"; // Substitua pelo caminho da sua imagem
                break;
            case "Melancólico":
                imgElement.src = "Pessoas com temperamento melancólico são introvertidas, sensíveis e profundas. Elas são perfeccionistas e gostam de trabalhar sozinhas."; // Substitua pelo caminho da sua imagem
                break;
            default:
                imgElement.src = ""; // Caso não identifique um temperamento
                break;
        }
    
        // Mostra a imagem
        imgContainer.classList.remove('hidden');
    }
    document.getElementById('submit-part2').addEventListener('click', function() {         document.getElementById('part2').classList.remove('hidden'); });

    document.getElementById("submit-part2").addEventListener("click", function() {
        createConfetti();
        // Aqui você pode adicionar a lógica que quiser para avançar no teste
    });
    
    function createConfetti() {
        const confettiContainer = document.getElementById("confetti");
        confettiContainer.classList.remove("hidden");
        
        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement("div");
            confettiPiece.classList.add("confetti");
            
            // Define posições e cores aleatórias
            confettiPiece.style.left = Math.random() * 100 + "vw";
            confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confettiPiece.style.animationDuration = Math.random() * 2 + 2 + "s"; // Duração entre 2 e 4 segundos
            
            confettiContainer.appendChild(confettiPiece);
            
            // Remover o confete após a animação
            setTimeout(() => {
                confettiPiece.remove();
            }, 12000);
        }
    }
    document.getElementById("start-part1").addEventListener("click", function() {
        // Esconde as instruções com fade-out
        const instructions = document.getElementById("instructions");
        instructions.classList.add("fade");
    
        // Aguarda a animação terminar antes de esconder e mostrar a próxima parte
        instructions.addEventListener("animationend", function() {
            instructions.classList.add("hidden"); // Esconde as instruções
            const part1 = document.getElementById("part1");
            part1.classList.remove("hidden");
            part1.classList.add("fade-in"); // Adiciona a animação de fade-in
        });
    });
});
 
