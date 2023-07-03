<script setup>
import InvitationSection from "@/components/InvitationSection.vue";
import CalendarSection from "@/components/CalendarSection.vue";
import PhotoSection from "@/components/PhotoSection.vue";
import InfoSection from "@/components/InfoSection.vue";
import CountdownSection from "@/components/CountdownSection.vue";
</script>

<template>
  <div>
    <video-background
        src="/src/assets/video/wedding.mp4"
        style="max-height: 40vh; height: 100vh;"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
    >
      <div class="video-bg">
        <div class="name">
          <span>Пайзурахман</span>
          <span> & </span>
          <span>Раиса</span>
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
</style>
