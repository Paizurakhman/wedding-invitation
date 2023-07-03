<template>
  <div class="invitation-section">
    <div class="container">
      <div class="invitation-text">
        <h2>Құрметті! ағайын-туыс, бауырлар, құда-жекжат, дос-жаран, әріптестер!</h2>
      </div>

      <div class="invitation-text">
        <h2>Сіз(дер)ді балаларымыз</h2>
      </div>
      <div class="name">
        <h2>Пайзурахман мен Раисаның</h2>
      </div>
      <div class="invitation-text">
        <h2>
          үйлену тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!
        </h2>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "InvitationSection"
}
</script>

<style scoped lang="scss">
  .invitation-section {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 0;
    .invitation-text {
      h2 {
        font-size: 1.5em;
      }
      + .invitation-text {
        margin-top: 50px;
      }
    }
    .name {
      margin: 20px 0;
      font-family: AsylbekMo, Arial, sans-serif;
      h2 {
        font-size: 3em;
      }
      span {
        font-size: .5em;
      }
    }
  }
</style>
