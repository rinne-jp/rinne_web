<template>
  <div class="contents">
    <div id="form-email" class="form-email">
      <div class="textーmerit__wrapper">
        <p class="text-merit w6 fs20">rinneの最新情報を受け取る</p>
      </div>
      <form name="gf_form" class="form__wrapper mt16" method="POST" target="hidden_iframe" :action="gf_doc" @submit.prevent="validationCheck">
        <div class="form-item__wrapper">
          <div class="form-item">
            <input
              class="input-email input"
              :class="{ 'input-error': email_error }"
              type="text"
              :id="'entry.' + survey[0].name"
              :name="'entry.' + survey[0].name"
              v-model="email"
              :placeholder="survey[0].placeholder"
              :disabled="submitted"
            />
          </div>
          <input
            class="btn-submit btn btn--orange w6 fs16"
            value="送信"
            type="submit"
          />
        </div>
        <div v-show="email_error" class="error-msg__wrapper mt16">
          <p class="error-msg">{{ email_error }}</p>
        </div>
        <div v-show="submitted" class="success-msg__wrapper mt16">
          <p class="success-msg">メールアドレスを送信しました</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormEmail',
  data() {
    return {
      email: '',
      email_error: '',
      submitted: false,
      gf_doc: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTp3pDSzbpZ5u7UFx6o0ATw-soUb5vx9a6Vch7knTU_Ui8Lg/formResponse',
      survey: [
        {
          name: '1537271753',
          question: 'メールアドレス',
          question_type: 'text',
          label: 'email',
          placeholder: 'example@rinne.help',
        }
      ]
    }
  },
  methods: {
    validationCheck() {
      if (this.email === '') {
        this.email_error = 'メールアドレスを入力してください';
      } else if (!this.email.match(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {
        this.email_error = 'メールアドレスの形式が正しくありません';
      } else {
        document.gf_form.submit();
        this.submitted = true;
        this.email_error = '';
      }
    },
  },
  // Googleフォームのサンキューページに遷移しないようにする
  mounted: function() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute('name','hidden_iframe');
    iframe.setAttribute('style','display: none');
    document.body.appendChild(iframe);
  }
}
</script>

<style scoped>
.form-email {
  margin: 0 auto;
  padding-top: calc((100vh - 8.4rem) / 2);
  width: 56.0rem;
}
.text-merit {
  margin-left: 0.8rem;
}
.text-merit:before {
    content: "";
    margin-right: 0.8rem;
    width: 1.6rem;
    height: 1.6rem;
    display: inline-block;
    background: var(--orange1);
    border-radius:  50%;
}
.form-item__wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.input-email {
  width: 44.8rem;
  border: 2px solid var(--orange3);
}
.input-email::placeholder {
  color: var(--orange3);
}
.input-error {
  border: 2px solid var(--red);
}
.btn-submit {
  margin-left: 1.6rem;
  border-radius:  1.2rem;
}
.error-msg {
  color: var(--red);
}

</style>