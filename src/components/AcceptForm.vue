<template>
  <form class="accept-form" @submit.prevent="onSubmit">
    <div class="container">
      <p>
        Тойға келетініңізді 12.08.2023ж дейін растауыңызды сұраймыз
      </p>

      <input type="text" v-model="state.name" placeholder="Аты жөніңіз" class="input-name" required>

      <label v-for="item in acceptList">
        <input type="radio" v-model="state.field" :value="item.label" required>
        {{ item.label }}
      </label>
      <span class="error">{{errorText}}</span>

      <div class="submit">
        <button>
          <span class="loader" v-if="isLoading"></span>
          <span v-else>Жіберу</span>
        </button>
      </div>
    </div>
  </form>

  <AcceptModal v-model="isSuccess"/>
</template>

<script>
import {computed, reactive, ref} from "vue";
import AcceptModal from "@/components/AcceptModal.vue";

export default {
  name: "AcceptForm",
  components: {AcceptModal},
  setup() {
    const state = reactive({
      name: '',
      field: ''
    })
    const errorText = ref('')
    const isSuccess = ref(false)
    const isLoading = ref(false)
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

    const isDisable = computed(() => {
      return state.name && state.field
    })

    const onSubmit = async () => {
      if (!isDisable.value) {
        errorText.value = 'Біреуін таңдаңыз!'
        return
      }
      isLoading.value = true
      await fetch('https://sheetdb.io/api/v1/ckn3a1v071r22', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
      }).then(() => {
        isSuccess.value = true
        state.name = ''
        state.field = ''
        errorText.value = ''
      }).finally(() => {
        isLoading.value = false
      })
    }

    return { acceptList, state, isSuccess, isDisable, errorText, isLoading, onSubmit }
  }
}
</script>

<style scoped lang="scss">
  .accept-form {
    padding: 30px;
    .error {
      font-size: .8rem;
      color: crimson;
      line-height: 24px;
    }
    p {
      text-align: center;
      font-size: 1.25rem;
    }
    .input-name {
      width: 100%;
      padding: 8px 12px;
      margin: 8px 0 16px;
      border: 1px solid #181818;
      border-radius: 0;
      outline: 0;
    }

    label {
      width: 100%;
      display: inline-block;
      margin-bottom: 4px;
      input {
        vertical-align: middle;
        width: 18px;
        height: 18px;
        margin-right: 4px;
      }
    }
    .submit {
      text-align: center;
    }
    button {
      background: #181818;
      border: 0;
      outline: 0;
      color: #ffffff;
      padding: 8px 30px;
      margin-top: 16px;
      font-weight: 500;
      &:disabled {
        opacity: 0.7;
        pointer-events: none;
        cursor: not-allowed;
      }
    }
  }

  .loader {
    vertical-align: middle;
    display: inline-block;
    min-width: 24px;
    height: 24px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite
  }
  .loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 3px solid #FFF;
    animation: prixClipFix 2s linear infinite ;
  }

  @keyframes rotate {
    100%   {transform: rotate(360deg)}
  }

  @keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
  }
</style>
