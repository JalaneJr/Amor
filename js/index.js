

setInterval(createHeart, 300);

// Efeito de digitação dinâmico
const title = document.querySelector('.title');
const phrases = ["Minha flor","Meu  Amor", "Minha  Vida"];


function mostrarMensagem() {
  const randomIndex = Math.floor(Math.random() * mensagens.length);
  document.getElementById('mensagem').textContent = mensagens[randomIndex];
}
let phraseIndex = 0;

function typeWriter() {
  title.innerHTML = phrases[phraseIndex]
    .split('')
    .map((letter, i) => 
      `<span style="--delay: ${i * 0.2}s">${letter}</span>`
    ).join('');
  
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(typeWriter, 3000);
