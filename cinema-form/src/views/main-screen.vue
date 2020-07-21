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
          genre: ["Фантастика", "Драма", "Приключения"],
          ann: "Наше время на Земле подошло к концу, команда исследователей берёт на себя самую важную миссию в истории человечества — путешествие за пределы нашей галактики, чтобы узнать есть ли у человечества будущее среди звёзд.",
        },
        {
          title: "Побег из Шоушенка",
          img: require("../assets/img/Shoushenk.png"),
          genre: ["Драма"],
          ann: "Осужденный на пожизненный срок в тюрьме Шоушенк обречён. Никому ещё не удавалось сбежать из неё. Когда в соседнюю камеру поместили молодого банкира Энди Дюфрэйна, приговоренного к пожизненному заключению за убийство жены и ее любовника, \"старожил\" Шоушенка по имени Ред был уверен, что субтильный новичок быстро сломается. Но он ошибся."
        },
        {
          title: "Хоббит: Нежданное путешествие",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Фэнтези", "Приключения"],
          ann: "Приключения Бильбо Бэггинса, угодившего в водоворот путешествия эпических масштабов ради отвоевания потерянного королевства гномов у свирепого дракона Смога. После неожиданного визита волшебника Гэндальфа Серого, Бильбо оказывается в компании тринадцати гномов во главе с легендарным воином Торином Дубощитом. Их путь лежит в дикие земли: через леса и горы населенные гоблинам и орками, жуткими варгами колдунами...",
        },
        {
          title: "Форсаж: Хоббс и Шоу",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Боевик", "Комедия"],
          ann: "Превосходный спецагент, боец и стрелок Люк Хоббс вынужден объединиться со своим старым врагом, опаснейшим преступником Деккардом Шоу, чтобы противостоять общему противнику."
        },
        {
          title: "Заклятие 2",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Ужасы", "Триллер"],
          ann: "К супругам Эду и Лоррэйн Уорренам обратилась мать-одиночка из восточного Лондона. Она утверждает, будто с недавних пор подвергается нападениям полтергейста. Уорренам предстоит выяснить, действительно ли в бедах женщины и троих её детей виноват неспокойный дух... или же истинная причина куда более зловеща?"
        },
        {
          title: "Терминатор",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Фантастика", "Боевик", "Триллер"],
          ann: "История противостояния солдата Кайла Риза и киборга-терминатора, прибывших в 1984-й год из пост-апокалиптического будущего, где миром правят машины-убийцы, а человечество находится на грани вымирания. Цель киборга: убить девушку по имени Сара Коннор, чей ещё нерождённый сын к 2029 году выиграет войну человечества с машинами. Цель Риза: спасти Сару и остановить Терминатора любой ценой."
        },
        {
          title: "1+1",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Драма", "Комедия"],
          ann: "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений."
        },
        {
          title: "Иван Васильевич меняет профессию",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Фантастика", "Комедия", "Приключения"],
          ann: "Инженер-изобретатель Тимофеев сконструировал машину времени, которая соединила его квартиру с далеким шестнадцатым веком - точнее, с палатами государя Ивана Грозного."
        },
        {
          title: "Король лев",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Мультфильм", "Драма", "Приключения"],
          ann: "У величественного Короля-Льва Муфасы рождается наследник по имени Симба. Уже в детстве любознательный малыш становится жертвой интриг своего завистливого дяди Шрама, мечтающего о власти."
        },
        {
          title: "Криминальное чтиво",
          img: require("../assets/img/Hobbit.png"),
          genre: ["Триллер", "Комедия"],
          ann: "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса."
        }
      ],
      showedFilms: [],
      genres: [
        "Драма",
        "Комедия",
        "Ужасы",
        "Триллер",
        "Боевик",
        "Документальный",
        "Фантастика",
        "Фэнтези",
        "Приключения",
        "Мультфильм"
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
