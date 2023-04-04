<template>
  <section class="popular section" id="popular">
    <h2 class="section__title">
      Choose Your Electric Car <br> Of The Porsche Brand
    </h2>

    <swiper
      :spaceBetween="24"
      :grabCursor="true"
      :slidesPerView="'auto'"
      :loop="true"
      :breakpoints="{
        '780': {
          slidesPerView: 3,
        },
        '1040': {},
      }"
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      class="mySwiper popular__container container">
        <swiper-slide class="popular__card" v-for="c in cars" :key="c.id">
          <div class="shape shape__smaller"></div>

          <h1 class="popular__title">{{ c.mark }}</h1>
          <h3 class="popular__subtitle">{{ c.carName }}</h3>

          <img :src="require('@/assets/img/' + c.img)" alt="" class="popular__img">

          <div class="popular__data">
            <div class="popular__data-group">
              <i class="ri-dashboard-3-line"></i>3.7 Sec
            </div>
            <div class="popular__data-group">
              <i class="ri-funds-box-line"></i> 256 Km/h
            </div>
            <div class="popular__data-group">
              <i class="ri-charging-pile-2-line"></i> Electric
            </div>
          </div>

          <h3 class="popular__price">{{ c.price }}</h3>

          <button class="button popular__button">
            <i class="ri-shopping-bag-2-line"></i>
          </button>
        </swiper-slide>
    </swiper>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default {
  data: () => ({
    cars: [
      { mark: 'Porsche', carName: 'Turbo S', price: '$175,900', img: 'popular1.png' },
      { mark: 'Porsche', carName: 'Taycan', price: '$114,900', img: 'popular2.png' },
      { mark: 'Porsche', carName: 'Turbo S Cross', price: '$150,900', img: 'popular3.png' },
      { mark: 'Porsche', carName: 'Boxster 718', price: '$125,900', img: 'popular4.png' },
      { mark: 'Porsche', carName: 'Cayman', price: '$128,900', img: 'popular5.png' }
    ]
  }),
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.popular {
  &__container {
    padding-top: 1rem;
  }

  &__card {
    position: relative;
    width: 238px !important;
    background-color: $container-color;
    padding: 2rem 1.5rem 1.5rem;
    border-radius: 1rem;
    margin-bottom: 3.5rem;
    overflow: hidden;
  }

  &__card .shape__smaller {
    position: absolute;
    top: -2.5rem;
    left: -2.5rem;
  }

  &__title,
  &__subtitle,
  &__img {
    position: relative;
  }

  &__title {
    font-size: $h2-font-size;
    margin-bottom: .25rem;
  }

  &__subtitle {
    font-size: $normal-font-size;
    color: $text-color;
    font-weight: 400;
  }

  &__img {
    width: 160px;
    margin: .75rem 0 1.25rem 1.5rem;
    transition: .3s;
  }

  &__data {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: .5rem 1.25rem;
    margin-bottom: 2rem;
  }

  &__data-group {
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    font-size: $small-font-size;
    color: $white-color;

    i {
      font-size: 1rem;
    }
  }

  &__price {
    font-size: $h3-font-size;
  }

  &__button {
    border: none;
    outline: none;
    padding: .75rem 1rem !important;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 1rem 0 1rem 0 !important;
    cursor: pointer;
    i {
      font-size: 1.25rem;
    }
  }
}
.popular__card:hover .popular__img {
  transform: translateY(-.25rem);
}
.swiper-pagination-bullet {
  background: $white-color;
}
.swiper-pagination-bullet-active {
  background: $first-color;

}
</style>
