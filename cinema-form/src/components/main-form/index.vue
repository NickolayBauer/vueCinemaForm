<template>
  <div class="main-form">
    <div class="main-form__form-inner">
      <div class="main-form__header">
        {{ modelFilm.title }}
      </div>
      <div class="main-form-ann">
        <div class="main-form-ann__header">Аннотация</div>
        <div class="main-form-ann__text">{{ modelFilm.ann }}</div>
      </div>
      <div class="main-form__info-block">
        <span class="info-block__static-text">Жанр:</span>
        <span v-for="(genre, index) in modelFilm.genre" :key="index"
          >{{ genre }}{{ index != modelFilm.genre.length - 1 ? ", " : "" }}
        </span>
      </div>
      <div class="main-form__info-block">
        <span class="info-block__static-text">Выберите дату:</span>
        <Datepicker
          :language="ru"
          v-on:selected="clearBackground"
          v-model="model_date"
        ></Datepicker>
      </div>
      <div class="main-form__info-block">
        <span class="info-block__static-text">Количество билетов:</span>
        {{ model_count }}
        <div class="info-block__buttons">
          <button
            v-on:click="plusTicket"
            class="info-block__button"
            :disabled="model_count === 10"
          >
            &plus;
          </button>
          <button
            v-on:click="minusTicket"
            class="info-block__button"
            :disabled="model_count === 1"
          >
            &minus;
          </button>
        </div>
      </div>
      <div class="main-form__info-block">
        <span class="info-block__static-text">Ваше имя:</span>
        <input
          v-model="model_name"
          class="info-block__input-customer"
          placeholder="Введите ваше имя"
        />
      </div>
      <div class="main-form__actions">
        <button
          class="actions__button btn--submit"
          @click="formSend"
          :disabled="$v.$invalid"
        >
          Отправить
        </button>
        <button class="actions__button btn--cancel" @click="clearInfoBlock">
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";
import {
  required,
  maxLength,
  minLength,
  maxValue,
  minValue,
} from "vuelidate/lib/validators";
export default {
  props: ["modelFilm"],
  data() {
    return {
      model_count: 1,
      model_name: "",
      model_date: "",
      ru: ru,
    };
  },
  mounted() {
    this.addBackground();
  },
  methods: {
    formSend() {
      let data = {};
      data.film = this.modelFilm.title;
      data.count = this.model_count;
      data.date = this.model_date;
      data.name = this.model_name;
      console.log(data);
    },
    plusTicket() {
      ++this.model_count;
    },
    minusTicket() {
      if (this.model_count !== 1) --this.model_count;
    },
    clearBackground() {
      const input = document.querySelector(".vdp-datepicker input");
      input.classList.remove("input-date-img");
    },
    addBackground() {
      const input = document.querySelector(".vdp-datepicker input");
      input.classList.add("input-date-img");
    },
    clearInfoBlock() {
      this.model_count = 1;
      this.model_name = "";
      this.model_date = "";
      this.addBackground();
    },
  },
  components: {
    Datepicker,
  },
  validations: {
    model_count: {
      required,
      maxValue: maxValue(10),
      minValue: minValue(1),
    },
    model_name: {
      required,
      maxLength: maxLength(180),
      minLength: minLength(2),
    },
    model_date: {
      required,
    },
  },
};
</script>
<style lang="scss">
.main-form {
  background: #ffffff;
  border-radius: 8px;
  min-height: 330px;
  height: 100%;
  max-width: 1020px;
  width: 90%;
  margin: auto;
  margin-top: 55px;
  margin-bottom: 15px;
  .main-form-ann {
    float: right;
    @media screen and (max-width: 600px) {
      float: left;
      display: block;
      width: 100%;
      margin-bottom: 15px;
    }
    .main-form-ann__header {
      font-weight: 500;
    }
    .main-form-ann__header {
    }
  }
  .main-form__form-inner {
    @media screen and (min-width: 1300px) {
      padding: 40px;
    }
    padding: 10px;
    .main-form__header {
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 31px;
    }
    .main-form__actions {
      margin-top: 25px;
      width: 100%;
      display: flex;
      justify-content: center;
      .actions__button {
        padding: 8px 23px;
        border: 1px solid #6a2389;
        border-radius: 4px;

        margin-right: 10px;
        font-size: 14px;
        font-weight: 500;
      }
      .btn--submit {
        &:disabled {
          border: 1px solid rgba(0, 0, 0, 0.01);
          background-color: rgba(0, 0, 0, 0.2);
        }
        background-color: #6a2389;
        color: #fff;
      }
      .btn--cancel {
        background-color: #fff;
      }
      .btn--submit:hover,
      .btn--cancel:hover {
        cursor: pointer;
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
      vertical-align: sub;
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
    vertical-align: text-bottom;
    input {
      border: none;
      width: 100px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.input-date-img {
  background: url("icons/calendar.svg") no-repeat;
  background-size: contain;
}
</style>
