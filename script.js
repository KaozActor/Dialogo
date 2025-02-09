const dialogues = {
    "oi": ["Olá jogador!", "Como posso ajudar?"],
    "ajuda": ["Claro! O que você precisa?", "Aqui estão algumas dicas."],
    "tchau": ["Até logo, jogador!", "Volte quando quiser!"],
};

let currentDialogueIndex = 0;
let soundOn = true;

// Função para digitar texto na tela com efeito
function typeText(text, element, callback) {
    element.innerHTML = '';
    let index = 0;
    const sound = document.getElementById('sound');

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50);
            if (soundOn) {
                sound.src = 'sound/beep.wav';
                sound.play();
                setTimeout(() => sound.pause(), 100);
            }
        } else {
            callback();
        }
    }

    type();
}

// Função para exibir a resposta baseada na palavra-chave
function handleUserInput() {
    const input = document.getElementById('inputKey').value.trim().toLowerCase();
    const dialogueElement = document.getElementById('dialogue');

    if (dialogues[input]) {
        typeText(dialogues[input][currentDialogueIndex], dialogueElement, () => {
            document.getElementById('nextBtn').style.display = 'block';
        });
        currentDialogueIndex++;
        document.getElementById('inputKey').value = ''; // Limpar o campo de entrada
    } else {
        dialogueElement.innerHTML = "Palavra-chave desconhecida! Tente 'oi', 'ajuda', ou 'tchau'.";
    }
}

// Função para avançar para o próximo diálogo
document.getElementById('submitKey').addEventListener('click', handleUserInput);

document.getElementById('nextBtn').addEventListener('click', () => {
    const input = document.getElementById('inputKey').value.trim().toLowerCase();
    const dialogueElement = document.getElementById('dialogue');

    if (dialogues[input] && currentDialogueIndex < dialogues[input].length) {
        typeText(dialogues[input][currentDialogueIndex], dialogueElement, () => {
            currentDialogueIndex++;
            document.getElementById('nextBtn').style.display = 'block';
        });
    } else {
        dialogueElement.innerHTML = "Fim da conversa!";
        document.getElementById('nextBtn').style.display = 'none';
    }
});

// Função para controlar o som
document.getElementById('sound-button').addEventListener('click', function() {
    soundOn = !soundOn;
    this.textContent = soundOn ? 'Desligar Som' : 'Ligar Som';
});

// Iniciar o diálogo ao carregar a página e tocar a música de fundo
document.getElementById('bg-music').play();
