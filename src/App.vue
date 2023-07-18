<script setup>
import InvitationSection from "@/components/InvitationSection.vue";
import CalendarSection from "@/components/CalendarSection.vue";
import PhotoSection from "@/components/PhotoSection.vue";
import InfoSection from "@/components/InfoSection.vue";
import CountdownSection from "@/components/CountdownSection.vue";
import Modal from "@/components/Modal.vue";
import { ref} from "vue";
import AcceptForm from "@/components/AcceptForm.vue";
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
        style="max-height: 50vh; height: 100vh;"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
    >
      <div class="video-bg">
        <div class="name">
          <span>Пайзурахман </span>
          <br>
          <span>&</span>
          <br>
          <span> Раиса</span>
        </div>

        <p>19.08.2023</p>

        <div class="audio">
          <div @click="toggleAudio" class="play">
            <i class="fa-solid fa-volume-high" v-if="isPlayed"></i>
            <i class="fa-solid fa-volume-xmark" v-else></i>
          </div>
          <audio id="audio-player" ref="audio">
            <source src="@/assets/audio/music.mp3" type="audio/mpeg">
          </audio>
        </div>
      </div>
    </video-background>

    <InvitationSection/>
    <CalendarSection/>
    <PhotoSection/>
    <InfoSection/>
    <CountdownSection/>
    <AcceptForm />
  </div>
</template>

<style scoped lang="scss">
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  display: grid;
  place-content: center;

  .name {
    font-family: AsylbekMo, Arial, sans-serif;
    color: white;

    text-align: center;
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

}
.audio {
  position: fixed;
  height: 48px;
  width: 48px;
  margin: 0 auto;
  right: 16px;
  bottom: 16px;
  background: #ffffff;
  color: #023a15;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  z-index: 1;
  .play {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }
  i {
    font-size: 20px;
  }
  audio {
    display: none;
  }
}
</style>
