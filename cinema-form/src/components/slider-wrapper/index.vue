<template>
  <slick class="slick-root" ref="slick" :options="options">
    <slot></slot>
  </slick>
</template>

<script>
import slick from "vue-slick";
export default {
  components: {
    slick,
  },
  props: ["countShow"],
  data() {
    return {
      options: {
        dots: false,
        slidesToShow: this.countShow,
        prevArrow:
          '<button type="button" class="slick-prev swiper-button-prev">prev</button>',
        nextArrow:
          '<button type="button" class="slick-next swiper-button-next next-button-js">next</button>',
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/slider.scss";
.slick-root {
  width: 90%;
  margin: 80px 80px;
  .slick-item {
    .slick-item__text {
      text-align: center;
    }
  }
}
.slick-prev {
  left: 0px;
  [dir="rtl"] & {
    left: auto;
    right: -25px;
  }
  &:before {
    content: "";
    background-image: url("./icons/arrow-left.svg");
    height: 20px;

    [dir="rtl"] & {
      content: $slick-next-character;
    }
  }
}

.slick-next {
  right: 0px;
  [dir="rtl"] & {
    left: -25px;
    right: auto;
  }
  &:before {
    content: "";
    background-image: url("./icons/arrow-right.svg");
    height: 20px;
    [dir="rtl"] & {
      content: $slick-prev-character;
    }
  }
}
</style>
