<template>
  <div class="contents">
    <div id="form-contact" class="form-contact">
      <div class="title__wrapper">
        <p class="w6 fs48">Contact</p>
        <p class="mt8 fs24">お問い合わせ</p>
      </div>
      <form v-if="!submitted" name="gf_form" class="form__wrapper" @submit.prevent="validationCheck">
        <div v-for="item in survey" :key="item" class="form-item">
          <label :for="item.label">
            {{ item.question }}
            <span v-show="item.required" class="required fs14">必須</span>
          </label>
          <template v-if="item.question_type == 'text'">
            <input
              class="input-contact input"
              :class="{ 'input-error': error[item.label] }"
              type="text"
              :name="'entry.' + item.name"
              :id="item.label"
              v-model="input[item.label]"
              :placeholder="item.placeholder"
            >
            <p v-show="item.required" class="error-msg">{{ error[item.label] }}</p>
          </template>
          <template v-else-if="item.question_type == 'textarea'">
            <textarea
              class="input-contact input"
              :class="{ 'input-error': error[item.label] }"
              :name="'entry.' + item.name"
              :id="item.label"
              v-model="input[item.label]"
              :placeholder="item.placeholder"
              rows="15"
              cols="30"
            ></textarea>
            <p v-show="item.required" class="error-msg">{{ error[item.label] }}</p>
          </template>
        </div>
        <div class="form-submit">
          <input
            class="btn-submit btn btn--orange w6 fs16"
            value="送信する"
            type="submit"
          />
        </div>
      </form>
      <div v-if="submitted" class="thanks__wrapper">
        <div class="thanks-title__wrapper">
          <img class="check-img" src="@/assets/image/check.svg" alt="チェック">
          <p class="thanks-title fs20">お問い合わせが完了しました！</p>
        </div>
        <P class="mt48 lh150">
          この度はお問い合わせいただき誠にありがとうございます。<br />
          ２〜３営業日以内に担当者よりご連絡させていただきますので少々お待ち下さい。
        </P>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormContact',
  data() {
    return {
      submitted: false,
      input: {
        company: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      error: {},
      gf_doc: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeJd9c5QH5VJhXBv_ukZqRTsflJwPAdrNNI6_QHziC_9ZHrlA/formResponse',
      survey: [
        {
          name: '163432424',
          question: '会社名',
          question_type: 'text',
          label: 'company',
          placeholder: '株式会社rinne',
          required: false,
        },
        {
          name: '532591131',
          question: 'お名前',
          question_type: 'text',
          label: 'name',
          placeholder: '山田太郎',
          required: true,
        },
        {
          name: '459920815',
          question: 'メールアドレス',
          question_type: 'text',
          label: 'email',
          placeholder: 'example@rinne.help',
          required: true,
        },
        {
          name: '776798480',
          question: '電話番号',
          question_type: 'text',
          label: 'phone',
          placeholder: '090-9999-9999',
          required: false,
        },
        {
          name: '420552451',
          question: 'お問い合わせ内容',
          question_type: 'textarea',
          label: 'message',
          placeholder: 'お問い合わせ内容をご記入ください',
          required: true,
        }
      ]
    }
  },
  methods: {
    validationCheck() {
      this.error.name = !this.input.name ? 'お名前を入力してください' : '';
      if (!this.input.email) {
        this.error.email = 'メールアドレスを入力してください';
      } else if (!this.input.email.match(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {
        this.error.email = 'メールアドレスの形式が正しくありません';
      } else {
        this.error.email = '';
      }
      this.error.message = !this.input.message ? 'お問い合わせ内容を入力してください' : '';
      if (!this.error.name && !this.error.email && !this.error.message) {
        this.submit();
        this.submitted = true;
      }
    },
    submit() {
      const submitParams = new FormData();
      Object.keys(this.input).forEach((key) => {
        this.survey.forEach((item) => {
          if (item.label === key) {
            submitParams.append('entry.' + item.name, this.input[key])
          }
        })
      })

      axios
        .post(this.gf_doc, submitParams)
        .then(() => {
          console.log('success');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
}

</script>

<style scoped>
.form-contact {
  padding: 8.0rem;
  text-align: center;
}
.title__wrapper {
  margin: 6.4rem auto;
  width: fit-content;
  color: var(--orange1);
  text-align: center;
}
.title__wrapper p {
  color: var(--orange1);
}

.form__wrapper {
  width: 56.0rem;
  margin: 0 auto;
}
.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
}
.required {
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  background: var(--red);
  color: var(--white);
}
.input-contact {
  border: 2px solid var(--gray2);
  background: var(--white);
}
.input-contact:focus {
  outline: none;
  border: 2px solid var(--orange1);
}
.input-contact::placeholder {
  color: var(--gray2);
}
.input-error {
  border: 2px solid var(--red);
}
.error-msg {
  margin-top: 0.8rem;
  color: var(--red);
  text-align: left;
}
.btn-submit {
  width: 24.0rem;
}

.thanks__wrapper {
  width: 64.0rem;
  margin: 0 auto;
  text-align: left;
}
.thanks-title__wrapper {
  display: flex;
  align-items: center;
  padding: 3.2rem;
  background: var(--orange4);
}
.thanks-title {
  margin: 0 auto;
  padding-right: 3.2rem;
}
.check-img {
  width: 3.2rem;
  height: 3.2rem;
}

</style>