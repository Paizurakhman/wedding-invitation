<template>
  <div class="countdown">
    <div class="container">
      <div class="countdown-content">
        <ul>
          <li class="countdown__item">
            <div>{{ days }}</div>
            <p class="desktop">Days</p>
            <p class="mobile">D</p>
          </li>
          <li class="divider">
            <span>:</span>
          </li>
          <li class="countdown__item">
            <div>{{ hours }}</div>
            <p class="desktop">Hours</p>
            <p class="mobile">H</p>
          </li>
          <li class="divider">
            <span>:</span>
          </li>
          <li class="countdown__item">
            <div>{{ minutes }}</div>
            <p class="desktop">Minutes</p>
            <p class="mobile">M</p>
          </li>
          <li class="divider">
            <span>:</span>
          </li>
          <li class="countdown__item">
            <div>{{ seconds }}</div>
            <p class="desktop">Seconds</p>
            <p class="mobile">S</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "CountdownSection",
  setup() {
    const days = ref('0')
    const hours = ref('0')
    const minutes = ref('0')
    const seconds = ref('0')

    const countDownDate = new Date("Aug 19, 2023 12:00:00").getTime();

    const countdown = setInterval(() => {
      let now = new Date().getTime()

      let distance = countDownDate - now

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      days.value = d.toString().padStart(2, '0')
      hours.value = h.toString().padStart(2, '0')
      minutes.value = m.toString().padStart(2, '0')
      seconds.value = s.toString().padStart(2, '0')

      if (distance / 1000 < 1) {
        clearInterval(countdown)
      }
    }, 1000)

    return {days, hours, minutes, seconds}
  }
}
</script>

<style scoped lang="scss">
.countdown {
  min-height: 30vh;
  display: grid;
  place-items: center;
  color: rgb(2, 58, 21);
  font-family: KalenderblattGrotesk;
  background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(@/assets/images/countdown-bg.jpg) center center / cover no-repeat;
  &-content {
    ul {
      display: flex;
      max-width: 800px;
      align-items: flex-start;
      margin: 0 auto;
      justify-content: center;
      gap: 20px;
      @media screen and (max-width: 576px){
        gap: 10px;
      }
      li.divider {
        font-size: 2.5rem;
        display: grid;
        place-content: center;
        height: 100px;
        @media screen and (max-width: 576px){
          height: 40px;
          font-size: 1.5rem;
        }
      }
    }
  }
  &__item  {
    text-align: center;
    div {
      font-size: 2rem;
      width: 100px;
      height: 100px;
      display: grid;
      place-content: center;
      border-radius: 10px;
      margin-bottom: 10px;
      background-color: white;
      box-shadow: rgba(2, 58, 21, 0.15) 0px 9px 22px 0px;

      @media screen and (max-width: 576px){
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
