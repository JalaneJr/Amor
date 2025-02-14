
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE YOU').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
// Controles de música
const music = document.getElementById('background-music');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const volumeUp = document.getElementById('volume-up');
const volumeDown = document.getElementById('volume-down');

// Reproduzir música
playBtn.addEventListener('click', () => {
  music.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
});

// Pausar música
pauseBtn.addEventListener('click', () => {
  music.pause();
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'inline-block';
});

// Aumentar volume
volumeUp.addEventListener('click', () => {
  if(music.volume < 1) music.volume += 0.1;
});

// Diminuir volume
volumeDown.addEventListener('click', () => {
  if(music.volume > 0) music.volume -= 0.1;
});

// Iniciar música automaticamente (opcional)
window.addEventListener('load', () => {
  music.play().then(() => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  }).catch(() => {
    // Autoplay bloqueado, mostra o botão play
    playBtn.style.display = 'inline-block';
  });
});