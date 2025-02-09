const entrada = document.getElementById('entrada');
const enviar = document.getElementById('enviar');
const historico = document.getElementById('historico');
const mensagem = document.getElementById('mensagem');

const palavras = {
  'oi': 'Olá, que tal se você quiser conversar comigo?',
  'ola': 'Ahah, não precisa me cumprimentar! Vamos conversar mesmo!',
  'como você está?': 'Estou ótimo, obrigado! Obrigado por perguntar!',
  'tchau': 'Tchau, até mais tarde!'
};

enviar.addEventListener('click', () => {
  const palavra = entrada.value.trim();
  if (palavra in palavras) {
    mensagem.textContent = palavras[palavra];
    historico.innerHTML += `<p>${palavra}</p>`;
    entrada.value = '';
    entrada.focus();
  } else {
    mensagem.textContent = 'Palavra desconhecida!';
    historico.innerHTML += `<p>${palavra}</p>`;
    entrada.value = '';
    entrada.focus();
  }
});
