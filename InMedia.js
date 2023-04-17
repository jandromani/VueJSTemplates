<!-- Plantilla 69/100 InMedia VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="media-content">
    <div class="video-player">
      <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
    </div>
    <div class="image-content">
      <img src="https://picsum.photos/200/300" alt="Random image">
    </div>
    <div class="audio-player">
      <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls></audio>
    </div>
  </div>
</template>

<style>
.media-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.video-player {
  margin-right: 20px;
}

.audio-player {
  margin-left: 20px;
}
</style>

