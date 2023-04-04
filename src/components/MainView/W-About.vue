<template>
  <section class="about section" id="about">
    <div class="container grid about__container">
      <div class="about__group">
        <img src="@/assets/img/about.png" alt="" class="about__img">

        <div class="about__card">
          <h3 class="about__card-title">2.500+</h3>
          <p class="adout__card-description">
            Supercharges placed along popular routes
          </p>
        </div>
      </div>

      <div class="about__data">
        <h2 class="section__title about__title">
          Machines With <br> Future Technology
        </h2>

        <p class="about__description">
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with
          new and innovative platforms that last a long time.
        </p>

        <a href="#" class="button">Know more</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.about {
  &__container {
    row-gap: 6rem !important;
  }

  &__group {
    position: relative;
  }

  &__img {
    width: 310px;
    border-radius: .5rem;
  }

  &__card {
    width: 180px;
    position: absolute;
    right: 0;
    bottom: -2.5rem;
    padding: 1rem .75rem;
    border-radius: 1.25rem;
    background: hsla(0, 0, 100%, .1);
    backdrop-filter: blur(16px);
    text-align: center;
  }
  &__card-title {
    font-size: $h3-font-size;
    margin-bottom: .5rem;
  }
  &__card-description {
    text-align: center;
    margin-bottom: 2rem;
  }
  &__card-title {
    font-size: $h3-font-size;
    margin-bottom: .5rem;
  }
  &__card-descriptions {
    font-size: $smaller-font-size;
  }
  &__title {
    text-align: initial;
    margin-bottom: 2rem;
    text-align: left !important;
  }

  &__description {
    margin-bottom: 2rem;
  }

}</style>
