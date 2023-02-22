<template>
  <div class="contents">
    <div id="form-email" class="form-email">
      <div class="textーmerit__wrapper">
        <p class="text-merit w6 fs20">rinneの最新情報を受け取る</p>
      </div>
      <form class="form__wrapper mt16" action="" method="post">
        <div class="form-item__wrapper">
          <div class="form-item">
            <input
              class="input-email input"
              value="example@rinne.help"
              type="email"
            />
          </div>
          <input
            class="btn-submit input input--orange"
            value="送信"
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
    background-color: var(--orange1);
    border-radius:  50%;
}
.form-item__wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.input-email {
  width: 44.8rem;
  padding: 1.6rem 3.2rem;
  border-radius:  1.2rem;
  color: var(--orange3);
  background: var(--orange4);
}
.btn-submit {
  margin-left: 1.6rem;
  background: var(--orange1);
  color: var(--white);
  border-radius:  1.2rem;
}

</style>