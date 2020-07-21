<template>
  <div class="main-screen">
    <br />
    <slider-wrapper :count-show="5" class="genres" :responsive="genreResp">
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
    <br />
    <br />
    <slider-wrapper
      ref="filmsSlick"
      :count-show="3"
      class="films"
      v-if="showedFilms.length"
      :responsive="filmsResp"
    >
      <label
        v-for="(item, index) in showedFilms"
        :key="index"
        class="slick-item"
        :class="{ 'checked-item': item == form_data.model_film }"
      >
        <input type="radio" :value="item" v-model="form_data.model_film" />
        <img class="flims-img" :src="item.img" />
      </label>
    </slider-wrapper>
    <div v-else class="no-films">
      <span>Не найдено фильмов по вашему запросу</span>
    </div>
    <main-form v-if="showedFilms.length" :model-film="form_data.model_film">
    </main-form>
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
      genreResp: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
      filmsResp: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
      films: [
        {
          title: "Интерстеллар",
          img: require("../assets/img/Interstellar.png"),
          genre: ["Научная фантастика", "Драма"],
          ann: "Текст 1",
        },
        {
          title: "Побег из Шоушенка",
          img: require("../assets/img/Shoushenk.png"),
          genre: ["Боевик", "Драма"],
          ann: "Текст 2",
        },
        {
          title: "Хоббит",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Драма", "Фэнтези", "Комедия", "Боевик"],
          ann: "Текст 3",
        },
      ],
      showedFilms: [],
      genres: [
        "Драма",
        "Комедия",
        "Ужасы",
        "Триллер",
        "Боевик",
        "Документальный",
        "Научная фантастика",
        "Фэнтези",
      ],
    };
  },
  mounted() {
    this.form_data.model_film = this.films[0];
    this.form_data.model_genre = this.genres[0];
    this.filteredFilms();
  },
  computed: {
    model_genre() {
      return this.form_data.model_genre;
    },
  },
  watch: {
    model_genre() {
      this.filteredFilms();
    },
  },
  methods: {
    filterFilms(item) {
      this.chosenGenres = item;
    },
    filteredFilms() {
      this.showedFilms = this.films.filter((film) => {
        return film.genre.includes(this.form_data.model_genre);
      });
      if (this.$refs.filmsSlick != undefined) {
        this.$refs.filmsSlick.reInit();
      }
      this.form_data.model_film = this.showedFilms[0];
    },
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
.films .slick-item {
  border-radius: 8px;
  display: flex !important;
  justify-content: center;
  cursor: pointer;
  input {
    display: none;
  }
  .flims-img {
    max-width: 270px;
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    object-fit: cover;
    transition: 0.5s;
    border-radius: 8px;
    border: 3px solid transparent;
  }
  &.checked-item {
    .flims-img {
      border: 3px solid #fa54fd;
    }
  }
}
.no-films {
  color: white;
  height: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}
</style>
