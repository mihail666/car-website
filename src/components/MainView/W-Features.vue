<template>
  <section class="features section" id="features">
    <h2 class="section__title">
      More Features
    </h2>
    <div class="features__container container grid">
      <div class="features__group">
        <img src="@/assets/img/features.png" alt="" class="features__img">

        <div class="features__card features__card-1">
          <h3 class="features__card-title">800v</h3>
          <p class="features__card-description">Turbo <br> Chargin</p>
        </div>

        <div class="features__card features__card-2">
          <h3 class="features__card-title">350</h3>
          <p class="features__card-description">Km <br> Range</p>
        </div>

        <div class="features__card features__card-3">
          <h3 class="features__card-title">480</h3>
          <p class="features__card-description">Km <br> Travel</p>
        </div>
      </div>
    </div>
    <img src="@/assets/img/map.svg" alt="" class="features__map">
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.features {
  overflow: hidden;
  position: relative;

  &__container {
    padding-top: 2rem;
    grid-template-columns: 285px;
    justify-content: center;
  }

  &__group {
    display: grid;
    position: relative;
    z-index: 10;
  }
  &__img {
    width: 150px;
    justify-self: center;
  }
  &__card {
    width: 112px;
    background: hsla(0, 0, 100%, .1);
    backdrop-filter: blur(16px);
    border-radius: 1.25rem;
    padding: .75rem 2rem;
    text-align: center;
    color: $title-color;
    position: absolute;
  }
  &__card-1{
    top: 4rem;
    left: 1.5rem;
  }
  &__card-2{
    top: 8rem;
    right: 1rem;
  }
  &__card-3{
    left: 1.5rem;
    bottom: 2rem;
  }
  &__card-title {
    font-size: $h3-font-size;
    margin-bottom: .25rem;
  }
  &__card-description {
    font-size: $smaller-font-size;
  }
  &__map {
    max-width: initial;
    position: absolute;
    width: 450px;
    left: -2rem;
    top: 8rem;
    margin: auto;
    transform: rotate(-24deg);
  }
}
</style>
