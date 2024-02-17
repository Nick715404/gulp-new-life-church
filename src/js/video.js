const videoHandler = () => {
  let videos = document.querySelectorAll('.video');
  console.log('video is working');

  videos.forEach(video => {

    video.addEventListener('click', () => {

      if (video.classList.contains('ready')) {
        return;
      }

      const src = video.dataset.src;

      video.classList.add('ready');

      video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" width="560" height="315"
      src="${src}?autoplay=1"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>`)

      console.log(video);
      console.log('its al fine');
    })
  })
};

videoHandler();