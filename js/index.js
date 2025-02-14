// Animação de corações
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(heart);
  
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Efeito de digitação dinâmico
const title = document.querySelector('.title');
const phrases = ["Para  Você", "Meu  Amor", "Minha  Vida"];
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