<template>
  <div class="photo-section">
    <div class="bg-photo">
      <img src="@/assets/images/wave-top.svg" alt="">
      <img src="@/assets/images/wave-bottom.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoSection"
}
</script>

<style scoped lang="scss">
.photo-section {
  position: relative;
  overflow: hidden;
  .bg-photo {
    min-height: 60vh;

    background: linear-gradient(rgba(175, 197, 159, 0), rgba(175, 197, 159, 0)), url("@/assets/images/photo.jpg") center center / cover no-repeat fixed;
    img:last-child {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    @media screen and (max-width: 576px){
      background-attachment: scroll;
      background-position: center 50px;
    }
  }
}
</style>
