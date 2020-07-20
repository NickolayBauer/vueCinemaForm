<template>
  <div class="main-screen">
    <br />
    <slider-wrapper :count-show="5" class="genres">
      <label
        v-for="(item, index) in genres"
        :key="index"
        class="slick-item"
        :class="{ 'checked-item': item == form_data.model_genre }"
      >
        <input type="radio" :value="item" v-model="form_data.model_genre" v-on:click="filterFilms(item)"/>
        <span class="slick-item__text">{{ item }}</span>
      </label>
    </slider-wrapper>
    <br />
    <br />
    <slider-wrapper :count-show="3" class="films" v-if="filteredFilms.length">
      <label
        v-for="(item, index) in filteredFilms"
        :key="index"
        class="slick-item"
        :class="{ 'checked-item': item.title == form_data.model_film }"
      >
        <input
          type="radio"
          :value="item.title"
          v-model="form_data.model_film"
        />
        <img class="flims-img" :src="item.img" />
      </label>
    </slider-wrapper>
    <h1 v-else class="no-films">Не найдено фильмов по вашему запросу</h1>
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
        {
          title: "Интерстеллар",
          img: require("../assets/img/Interstellar.png"),
          genre: ["Научная фантастика", "Драма"]
        },
        {
          title: "Побег из Шоушенка",
          img: require("../assets/img/Shoushenk.png"),
          genre: ["Драма", "Комедия"]
        },
        { 
          title: "Хоббит", 
          img: require("../assets/img/Hobbit.png"),
          genre: ["Фэнтези", "Комедия", "Боевик"]
        },
      ],
      genres: [
        "Драма",
        "Комедия",
        "Ужасы",
        "Триллер",
        "Боевик",
        "Документальный",
        "Научная фантастика",
        "Фэнтези"
      ],
      chosenGenres: 'Драма'
    };
  },
  mounted() {
    this.form_data.model_film = this.films[0].title;
    this.form_data.model_genre = this.genres[0];
  },
  methods: {
    filterFilms(item) {
      this.chosenGenres = item
    }
  },
  computed: {
    filteredFilms() {
      return this.films.filter(film => {
        if (film.genre.length >= 2) return film.genre.includes(this.chosenGenres)
        else return film.genre[0] === this.chosenGenres
      })
    }
  }
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
    width: 390px;
    height: 220px;
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
  text-align: center;
}
</style>
