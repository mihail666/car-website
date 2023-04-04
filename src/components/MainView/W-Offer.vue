<template>
  <section class="offer section" id="offer">
    <div class="offer__container container grid">
      <img src="@/assets/img/offer-bg.png" alt="" class="offer__bg">

      <div class="offer__data">
        <h1 class="offer__title">
          Do You Want To Receive <br> Special Offers?
        </h1>

        <p class="offer__description">
          Be the first to receive all the information about our
          products and new cars by email by subscribing to our
          mailing list.
        </p>

        <a href="#" class="button">
          Subscribe Now
        </a>
      </div>

      <img src="@/assets/img/offer.png" alt="" class="offer__img">
    </div>
  </section>
</template>

<style lang="scss">
.offer {
  position: relative;
  &__container{
    grid-template-rows: max-content 224px;
  }
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &__data,
  &__img {
    position: relative;
  }

  &__data  {
    text-align: center;
  }
  &__title {
    margin-bottom: 2rem;
  }

  &__description {
    margin-bottom: 3rem;
  }
  &__img {
    position: absolute;
    max-width: initial;
    width: 400px;
    bottom: 2rem;
    right: -5.5rem;
  }
}
</style>
