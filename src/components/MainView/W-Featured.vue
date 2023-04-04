<template>
  <section class="featured section" id="featured">
    <h2 class="section__title">
      Featured Luxury Cars
    </h2>

    <div class="featured__container container">
      <ul class="featured__filters">
        <li>
          <button class="featured__item" @click="filterAll()">
            <span>All</span>
          </button>
        </li>
        <li>
          <button class="featured__item" @click="filterP()">
            <img src="@/assets/img/logo1.png" alt="">
          </button>
        </li>
        <li>
          <button class="featured__item" @click="filterA()">
            <img src="@/assets/img/logo2.png" alt="">
          </button>
        </li>
        <li>
          <button class="featured__item" @click="filterT()">
            <img src="@/assets/img/logo3.png" alt="">
          </button>
        </li>
      </ul>
    </div>

    <TransitionGroup name="fade" tag="div" class="featured__content">
      <article class="featured__card" v-for="c in arrCars" :key="c.id">
        <div class="shape shape__smaller"></div>

        <h1 class="featured__title">{{ c.mark }}</h1>

        <h3 class="featured__subtitle">{{ c.carName }}</h3>

        <img :src="require('@/assets/img/' + c.img)" alt="" class="featured__img">

        <h3 class="featured__price">{{ c.price }}</h3>

        <button class="button featured__button">
          <i class="ri-shopping-bag-2-line"></i>
        </button>
      </article>
    </TransitionGroup>

  </section>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const show = ref(true)
    return { show }
  },
  data: () => ({
    arrCars: [],
    cars: [
      { mark: 'Tesla', carName: 'Model X', price: '$98,900', img: 'featured1.png' },
      { mark: 'Tesla', carName: 'Model 3', price: '$45,900', img: 'featured2.png' },
      { mark: 'Audi', carName: 'E-tron', price: '$175,900', img: 'featured3.png' },
      { mark: 'Porsche', carName: 'Boxster 987', price: '$126,900', img: 'featured4.png' },
      { mark: 'Porsche', carName: 'Panamera', price: '$126,900', img: 'featured5.png' }
    ]
  }),
  methods: {
    filterT () {
      this.arrCars = this.cars.filter(c => c.mark === 'Tesla')
    },
    filterA () {
      this.arrCars = this.cars.filter(c => c.mark === 'Audi')
    },
    filterP () {
      this.arrCars = this.cars.filter(c => c.mark === 'Porsche')
    },
    filterAll () {
      this.arrCars = this.cars
    }
  },
  mounted () {
    this.arrCars = this.cars
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.featured {
  &__container {
    padding-top: 1rem;
  }

  &__filters {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    margin-bottom: 3.5rem;
  }

  &__item {
    width: 48px;
    height: 48px;
    border: none;
    outline: none;
    padding: .75rem;
    border-radius: .75rem;
    background-color: $container-color;
    color: $white-color;
    font-size: $normal-font-size;
    cursor: pointer;
    transition: .3s;

    img {
      width: 1.5rem;
    }

    span,
    img {
      opacity: .3;
      transition: .3s;
    }
  }

  &__item:hover {
    background-color: $first-color;
  }

  &__item:hover span,
  &__item:hover img {
    opacity: 1;
  }

  &__content {
    grid-template-columns: 228px;
    justify-content: center;
    gap: 2.5rem;
    display: grid;
    grid-template-columns: repeat(1, max-content);
  }

  &__card {
    position: relative;
    background-color: $container-color;
    padding: 2rem 1.5rem 1.5rem;
    border-radius: 1rem;
    cursor: pointer;
  }

  &__card .shape__smaller {
    position: absolute;
    inset: 0;
    margin: auto;
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
    width: 180px;
    margin: 1.5rem 0;
    transition: .3s;
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
.featured__card:hover .featured__img {
  transform: scale(1.1);
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all .3s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(20px, 0);
}

.fade-leave-active {
  position: relative;
  top: 100%;
}
</style>
