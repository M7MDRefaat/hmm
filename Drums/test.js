


function hla(e) {
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!key) return;

  key.classList.add('playing')
  audio.currentTime = 0;
  audio.play();

  key.addEventListener('transitionend', () => {
    key.classList.remove('playing');
  });


}


addEventListener("keydown",hla);
