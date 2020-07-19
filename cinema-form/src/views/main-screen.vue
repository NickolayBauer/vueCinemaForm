<template>
  <div class="main-screen">
    <slider-wrapper :count-show="5">
      <div v-for="(item, index) in genres" :key="index" class="slick-item">
        <p class="slick-item__text">{{ item }}</p>
      </div>
    </slider-wrapper>
    <slider-wrapper :count-show="3">
      <div v-for="(item, index) in films" :key="index" class="slick-item">
        <p class="slick-item__text">{{ item }}</p>
      </div>
    </slider-wrapper>
    <main-form> </main-form>
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
};
</script>
<style lang="scss">
h1 {
  color: red;
}
.slick-item__text {
  font-size: 16px;
  font-family: Roboto;
  color: #ffffff;
}
</style>
