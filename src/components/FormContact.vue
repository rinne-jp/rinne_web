<template>
  <div class="contents">
    <div id="form-contact" class="form-contact">
      <div class="title__wrapper">
        <p class="w6 fs48">Contact</p>
        <p class="mt8 fs24">お問い合わせ</p>
      </div>
      <form class="form__wrapper" action="">
        <div class="form-item">
          <label for="company">会社名</label>
          <input
            class="input-contact input"
            type="text"
          >
        </div>
        <div class="form-item">
          <label for="name">お名前</label>
          <input
            class="input-contact input"
            type="text"
          >
        </div>
        <div class="form-item">
          <label for="email">メールアドレス</label>
          <input
            class="input-contact input"
            type="text"
          >
        </div>
        <div class="form-item">
          <label for="phone">電話番号</label>
          <input
            class="input-contact input"
            type="text"
          >
        </div>
        <div class="form-item">
          <label for="message">お問い合わせ内容</label>
          <textarea
          class="input-contact input"
            name="message"
            id="message"
            rows="15"
            cols="30"
          ></textarea>
        </div>
        <div class="form-submit">
          <input
            class="btn-submit btn btn--orange w6 fs16"
            value="送信する"
            type="submit"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>

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
.input-contact {
  border: 2px solid var(--gray2);
  background: var(--white);
}
.input-contact:focus {
  outline: none;
  border: 2px solid var(--orange1);
}
.btn-submit {
  width: 24.0rem;
}

</style>