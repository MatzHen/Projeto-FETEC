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
            "Sanguíneo": "Você é Sanguíneo. <br> Extrovertido e envolvente, voltado para os relacionamentos interpessoais. É comunicativo, dinâmico e otimista. Suas emoções são intensas, mas as impressões são passageiras, o que faz com que mude de humor com bastante frequência e as expressões dessa mudança são muito intensas (quando está triste, está muito triste; quando feliz, muito feliz; quando com raiva, com muita raiva, etc). Não se apega ao passado e vive muito o presente, o que pode fazer com que busque prazeres instantâneos e momentâneos, por isso, precisa tomar cuidado com a superficialidade. Carismático, não falta assunto, faz amizades facilmente.",
            "Colérico": "Você é Colérico. <br> Muito prático, voltado para a execução e realização. Sua extroversão não é para relacionamentos, mas para a ação. Enérgico, determinado, com facilidade enorme para atingir metas e perseguir objetivos. Não se preocupa com o que pensam dele, o que importa é o que ele sabe sobre si. Cheio de opiniões e não tem medo de expô-las, considerado gênio forte. As impressões são duradouras nele e, por isso, as lembranças fazem com que ele reviva as emoções, tendo dificuldade em relevar. Gosta das coisas do seu jeito, por isso precisa cuidar para não ser controlador. ",
            "Fleumático": "Você é Fleumático. <br> Introvertido, diplomático e de fácil convivência. Pode não apreciar mudanças abruptas, mas consegue se adaptar facilmente a diferentes cenários com muita facilidade. Possui grande estabilidade emocional, dificilmente atingindo picos de humor muito distintos em um único dia. Transmite serenidade em seu jeito de ser, ainda que não se sinta assim por dentro. As impressões também são passageiras nele, mas não significa que sua memória seja curta. A fácil adaptação deve ser observada para que não se torne em estagnação e inércia. ",
            "Melancólico": "Você é Melancólico. <br> Introvertido, reflexivo e profundo, muito cauteloso em suas ações e planejado. É emocionalmente sensível, sendo afetado pelas circunstâncias por um longo período. Gosta de estabilidade, previsibilidade, ordem e compromisso. A lealdade é um de seus pontos mais fortes, além do forte senso de dever e propósito. Leva a vida com seriedade e possui valores e princípios muito fortes. Não gosta de mudanças não planejadas e, quando acontecem, costuma sofrer até que assimile a mudança. É idealista e perfeccionista, que são qualidades que devem ser observadas, pois em excesso, causam medo de agir, que leva à procrastinação ou à desistência."
        };
    
        temperamentDetails.innerHTML = details[temperament] || '<p>Temperamento não identificado.</p>';
        
        // Define a imagem correspondente ao temperamento
        const imgElement = document.getElementById('temperament-img');
        const imgContainer = document.getElementById('temperament-image');
    
        switch (temperament) {
            case "Sanguíneo":
                imgElement.src = "./img/sanguineo.jpeg"; // Substitua pelo caminho da sua imagem
                break;
            case "Colérico":
                imgElement.src = "./img/colerico.jpeg"; // Substitua pelo caminho da sua imagem
                break;
            case "Fleumático":
                imgElement.src = "./img/fleumatico.jpeg"; // Substitua pelo caminho da sua imagem
                break;
            case "Melancólico":
                imgElement.src = "./img/melancolico.jpeg."; // Substitua pelo caminho da sua imagem
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
