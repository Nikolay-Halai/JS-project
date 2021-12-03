export default function () {
  document.querySelectorAll('[data-component="play-on-click"]').forEach((el) => {
    el.addEventListener('click', (event) => {

      const audio = new Audio;

      audio.src = event.currentTarget.dataset.sound;
      audio.play();
    });
  });
}

window.addEventListener('click', (event) => {
  let target = event.target;

  if (target.tagName == 'A') {
      const myAudio = new Audio;
      myAudio.src = '/sound/portal.mp3';
     myAudio.play();
  }
});
