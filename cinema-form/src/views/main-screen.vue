<template>
  <div class="main-screen">
    <slider-wrapper :count-show="5" class="genres">
      <label
        v-for="(item, index) in genres"
        :key="index"
        class="slick-item"
        :class="{ 'checked-item': item == form_data.model_genre }"
      >
        <input type="radio" :value="item" v-model="form_data.model_genre" />
        <span class="slick-item__text">{{ item }}</span>
      </label>
    </slider-wrapper>
    <slider-wrapper :count-show="3">
      <label v-for="(item, index) in films" :key="index" class="slick-item">
        <input type="radio" :value="item" v-model="form_data.model_film" />
        <span class="slick-item__text">{{ item }}</span>
      </label>
    </slider-wrapper>
    <main-form :form-data="form_data"> </main-form>
  </div>
</template>
<script>
import sliderWrapper from "@/components/slider-wrapper/index.vue";
import mainForm from "@/components/main-form/index.vue";
export default {
  name: "MainScreen",
  components: {
    sliderWrapper,
    mainForm,
  },
  data() {
    return {
      form_data: {
        model_genre: "",
        model_film: "",
      },

      films: [
        "Побег из Шоушенка",
        "Терминатор",
        "Старикам тут не место",
        "Шрек навсегда",
      ],
      genres: [
        "Драма",
        "Комедия",
        "Ужасы",
        "Триллер",
        "Боевик",
        "Документальный",
      ],
    };
  },
  mounted() {
    this.form_data.model_film = this.films[0];
    this.form_data.model_genre = this.genres[0];
  },
};
</script>
<style lang="scss">
.slick-item__text {
  font-size: 16px;
  font-family: Roboto;
  color: #ffffff;
}
.genres .slick-item {
  border-radius: 8px;
  display: flex !important;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  input {
    display: none;
  }
  span {
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
  }
  &:not(.checked-item) {
    span {
      color: white;
    }
  }
  &.checked-item {
    span {
      border-radius: 8px;
      background: white;
      padding: 0 10px;
      color: #fa54fd;
    }
  }
}
</style>
