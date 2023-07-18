<template>
  <div class="calendar-section">
    <div class="container">
      <div class="calendar">
        <div class="calendar-header">
          <span class="calendar-month">August </span>
          <span class="calendar-year">2023</span>
        </div>
        <div class="calendar-body">
          <div class="calendar-weekday">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>Su</div>
          </div>
          <div class="calendar-days">
            <div></div>
            <div v-for="i in 31" :key="i" :class="{ active: i === 19 }">{{i}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarSection"
}
</script>

<style scoped lang="scss">
  .calendar-section {
    background-color: #ffffff;
    font-family: 'Lumanosimo', cursive;
    position: relative;
    padding: 20px 0;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("@/assets/images/calendar-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      top: 0;
      left: 0;
      opacity: 0.3;
    }
    @media screen and (min-width: 1200px){
      padding: 50px 0;
      background-size: 50% 100%;
    }
    .container {
      display: flex;
      justify-content: center;
    }
    .calendar {
      flex: 1;
      height: max-content;
      max-width: 600px;
      position: relative;
      overflow: hidden;
      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 1.5rem;
        margin-bottom: 50px;
      }
      &-body {
        font-size: 1.25em;
      }
      &-weekday {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        font-weight: 700;
        div {
          display: grid;
          place-items: center;
        }
      }
      &-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        font-weight: 600;
        gap: 2px;

        div {
          width: 100%;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          position: relative;
          cursor: pointer;
          &.active {
            color: #b37832;
            font-weight: 700;
            &:before {
              content: "";
              width: 50px;
              height: 50px;
              position: absolute;
              background-image: url("@/assets/images/heart2.png");
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
  }
</style>
