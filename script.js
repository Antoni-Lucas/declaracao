function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 30 + 20 + 'px';
  heart.style.animationDuration = Math.random() * 7 + 10 + 's';
  heart.style.top = '-30px';
  document.getElementById('hearts-container').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

const startDate = new Date("2023-10-22T00:00:00");
const timerEl = document.getElementById("timer");

function updateTimer() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  timerEl.textContent = `Estamos juntos há ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos ❤️`;
}

setInterval(updateTimer, 1000);
updateTimer();

const imagens = document.querySelectorAll(".carousel img");
let index = 0;

function mostrarImagemAtual() {
  imagens.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });

  index = (index + 1) % imagens.length;
}

mostrarImagemAtual();
setInterval(mostrarImagemAtual, 4000);
















const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '&#10074;&#10074;';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '&#9658;';
  }
});

audio.addEventListener('loadedmetadata', () => {
  progress.max = audio.duration;
});

audio.addEventListener('timeupdate', () => {
  progress.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  const remaining = audio.duration - audio.currentTime;
  durationEl.textContent = '-' + formatTime(remaining);
});

progress.addEventListener('input', () => {
  audio.currentTime = progress.value;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}
