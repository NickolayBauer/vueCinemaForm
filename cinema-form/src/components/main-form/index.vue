<template>
  <div class="main-form">
    <div class="main-form__form-inner">
      <div class="main-form-ann">
        Аннотация
      </div>
      <div class="main-form__header">
        {{ formData.model_film }}
      </div>
      <div class="main-form__info-block">Жанр:{{ formData.model_genre }}</div>
      <div class="main-form__info-block">Выберите дату:</div>
      <div class="main-form__info-block">
        Количество билетов: {{ model_count }}
      </div>
      <div class="main-form__info-block">
        Ваше имя: <input v-model="model_name" />
      </div>
      <div class="main-form__actions">
        <button>Отправить</button>
        <button>Отменить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["formData"],
  data() {
    return {
      model_count: 1,
      model_name: "",
    };
  },
};
</script>
<style lang="scss">
.main-form {
  background: #ffffff;
  border-radius: 8px;
  height: 300px;
  width: 1020px;
  margin: auto;
  margin-top: 100px;
  .main-form-ann {
    float: right;
  }
  .main-form__form-inner {
    padding: 40px;
    .main-form__header {
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
    }
    .main-form__actions {
      margin-top: 70px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
