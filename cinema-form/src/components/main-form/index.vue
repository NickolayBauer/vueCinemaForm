<template>
  <div class="main-form">
    <div class="main-form__form-inner">
      <div class="main-form-ann">
        Аннотация
      </div>
      <div class="main-form__header">
        {{ formData.model_film }}
      </div>
      <div class="main-form__info-block">
        <span class="info-block__static-text">Жанр:</span>
        {{ formData.model_genre }}
      </div>
      <div class="main-form__info-block">
        <span class="info-block__static-text">Выберите дату:</span> 
        <Datepicker :language="ru" v-on:selected="clearBackground"></Datepicker>
      </div>
      <div class="main-form__info-block">
        <span class="info-block__static-text">Количество билетов:</span>
        {{ model_count }}
        <div class="info-block__buttons">
          <button v-on:click="plusTicket" class="info-block__button">&plus;</button>
          <button v-on:click="minusTicket" class="info-block__button" :class="{'unactive-button' : model_count === 1}">&minus;</button>
        </div>
      </div>
      <div class="main-form__info-block">
        <span class="info-block__static-text">Ваше имя:</span>
        <input v-model="model_name" class="info-block__input-customer" placeholder="Введите ваше имя"/>
      </div>
      <div class="main-form__actions">
        <button class="actions__button">Отправить</button>
        <button class="actions__button">Отменить</button>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'
export default {
  props: ["formData"],
  data() {
    return {
      model_count: 1,
      model_name: "",
      ru: ru
    };
  },
  methods: {
    plusTicket() {
      ++this.model_count
    },
    minusTicket() {
      if(this.model_count !== 1) --this.model_count
    },
    clearBackground() {
      const input = document.querySelector('.vdp-datepicker input')
      input.style.background = "none"
    }
  },
  components: {
    Datepicker
  }
};
</script>
<style lang="scss">
.main-form {
  background: #ffffff;
  border-radius: 8px;
  height: 330px;
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
      margin-bottom: 31px;
    }
    .main-form__actions {
      margin-top: 37px;
      width: 100%;
      display: flex;
      justify-content: center;
      .actions__button {
        padding: 8px 23px;
        border: 1px solid #6A2389;
        border-radius: 4px;
        background-color: #fff;
        margin-right: 10px;
        font-size: 14px;
        font-weight: 500;
        transition: 0.25s ease-in;
        &:hover {
          cursor: pointer;
          background-color:#6A2389;
          color: #fff;
        }
      }
    }
  }
  .main-form__info-block {
    margin-bottom: 16px;
    .info-block__static-text {
      font-weight: bold;
      margin-right: 13px;
    }
    .info-block__input-customer {
      border: none;
    }
    .info-block__buttons {
      display: inline-block;
      margin-left: 10px;
    }
    .info-block__button {
      border: none;
      background: white;
      font-size: 1.6rem;
      padding: 3px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .vdp-datepicker {
    display: inline-block;
    input {
      border: none;
      width: 100px;
      background: url('icons/calendar.svg') no-repeat;
      background-size: contain;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.unactive-button {
  color: #ccc;
}
</style>
