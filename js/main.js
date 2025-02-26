
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    //const titles = ('I LOVE YOU').split('')
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
const musicPlayer = document.getElementById("background-music");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const volumeUp = document.getElementById("volume-up");
  const volumeDown = document.getElementById("volume-down");

  // Lista de músicas
  const playlist = [
    
    "music/MAJOR feat NSTASIA Why I Love You.mp3",
    "music/Gerilson Insrael- Minha Vida [Official Vídeo] - Gerilson Insrael.mp3",
    "music/Doppaz  Eu jurarei.mp3",
    "music/Cef Tanzy - Escola (Áudio Oficial) - Cef Tanzy.mp3",
    "music/Edgar Domingos - Senhor Incrível - Clé Entertainment.mp3",
    "music/Gerilson_Insrael_Casa_Comigo_Official_Video_Kizomba_Vidisco.mp3",
    "music/08. Cef Tanzy - Botão de Rosa - MOWIGANG Music.mp3",
   "music/Michael_Gerow_Rewrite_The_Stars_Official_Lyric_Video_Michael_Gerow.mp3",
   "music/Sam_Smith_-_How_To_Cry__Lyric_Video_(256k).mp3",
  ];

  let currentTrack = 0;

  function loadTrack(trackIndex) {
    musicPlayer.src = playlist[trackIndex];
    musicPlayer.play();
  }

  playBtn.addEventListener("click", () => {
    musicPlayer.play();
  });

  pauseBtn.addEventListener("click", () => {
    musicPlayer.pause();
  });

  nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
  });

  prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
  });

  // Carregar a primeira música automaticamente
  loadTrack(currentTrack);