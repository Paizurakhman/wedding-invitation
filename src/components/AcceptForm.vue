<template>
  <form class="accept-form">
    <div class="container">
      <p>
        Тойға келетініңізді 12.08.2023ж дейін растауыңызды сұраймыз
      </p>

      <input type="text" placeholder="Аты жөніңіз" class="input-name">

      <label v-for="item in acceptList">
        <input type="radio" v-model="selected" :value="item.id">
        {{ item.label }}
      </label>

      <div class="submit">
        <button>Жіберу</button>
      </div>
    </div>
  </form>
</template>

<script>
import {ref} from "vue";

export default {
  name: "AcceptForm",
  setup() {
    const selected = ref(null)
    const acceptList = [
      {
        id: 1,
        label: 'Келемін'
      },
      {
        id: 2,
        label: 'Жұбыммен келемін'
      },
      {
        id: 3,
        label: 'Өкінішке орай келе алмаймын'
      },
    ]

    return { acceptList, selected }
  }
}
</script>

<style scoped lang="scss">
  .accept-form {
    padding: 30px;
    p {
      text-align: center;
      font-size: 1.02rem;
    }
    .input-name {
      width: 100%;
      padding: 8px 12px;
      margin: 8px 0 16px;
      border: 1px solid #023a15;
      border-radius: 4px;
    }

    label {
      width: 100%;
      display: inline-block;
      margin-bottom: 4px;
      input {
        vertical-align: sub;
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
    }
    .submit {
      text-align: center;
    }
    button {
      background: #023a15;
      border: 0;
      outline: 0;
      color: #ffffff;
      padding: 8px 30px;
      margin-top: 16px;
    }
  }
</style>
