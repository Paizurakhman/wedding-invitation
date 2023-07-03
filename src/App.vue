<script setup>
import InvitationSection from "@/components/InvitationSection.vue";
import CalendarSection from "@/components/CalendarSection.vue";
import PhotoSection from "@/components/PhotoSection.vue";
import InfoSection from "@/components/InfoSection.vue";
import CountdownSection from "@/components/CountdownSection.vue";
import Modal from "@/components/Modal.vue";
import { ref} from "vue";
const showEnvelope = ref(false)
const audio = ref()
const isPlayed = ref(false)

const toggleAudio = () =>  {
  isPlayed.value = audio.value.paused
  if (audio.value.paused) {
    audio.value.play();
  } else {
    audio.value.pause();
  }
}

</script>

<template>
  <div>
    <modal v-model="showEnvelope"/>
    <video-background
        src="video/wedding.mp4"
        style="max-height: 40vh; height: 100vh;"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
    >
      <div class="video-bg">
        <div class="name">
          <span>Пайзурахман </span>
          <div class="audio">
            <img src="@/assets/images/heart.png" alt="" width="48">
            <div @click="toggleAudio" class="play">
              <i class="fa-solid fa-circle-pause" v-if="isPlayed"></i>
              <i class="fa-solid fa-circle-play" v-else></i>
            </div>
            <audio id="audio-player" ref="audio">
              <source src="audio/music.mp3" type="audio/mpeg">
            </audio>
          </div>
          <span> Раиса</span>
        </div>

        <p>19.08.2023</p>
      </div>
    </video-background>

    <InvitationSection/>
    <CalendarSection/>
    <PhotoSection/>
    <InfoSection/>
    <CountdownSection/>
  </div>
</template>

<style scoped lang="scss">
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/video-bg-desktop.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: grid;
  place-content: center;

  .name {
    font-family: AsylbekMo, Arial, sans-serif;
    color: white;

    span {
      font-size: 3em;
      line-height: 3rem;
      text-align: center;
    }
  }

  p {
    color: white;
    font-size: 1.5em;
    text-align: center;
    margin-top: 10px;
  }

  @media screen and (max-width: 576px) {
    background-image: url("@/assets/images/video-bg.png");
    span {
      display: block;
    }
  }
}
.audio {
  position: relative;
  height: 48px;
  width: 48px;
  margin: 0 auto;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: 1s heartBeat 0.5s infinite;
  }
  .play {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }
  i {
    font-size: 28px;
  }
  audio {
    display: none;

  }
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
