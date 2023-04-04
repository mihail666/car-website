<template>
  <section class="home section" id="home">
    <div class="shape shape__big"></div>
    <div class="shape shape__small"></div>

    <div class="home__container container grid">
      <div class="home__data">
        <h1 class="home__title">
          Choose The Best Car
        </h1>
        <h2 class="home__subtitle">
          Porsche Mission E
        </h2>
        <h3 class="home__prem">
          <i class="ri-vip-crown-2-fill"></i> Premium car
        </h3>
      </div>

      <img src="@/assets/img/home.png" alt="" class="home__img">

      <div class="home__car">
        <div class="home__car-data">
          <div class="home__car-icon">
            <i class="ri-temp-cold-line"></i>
          </div>
          <h2 class="home__car-number">24°</h2>
          <h3 class="home__car-name">TEMPERATURE</h3>
        </div>

        <div class="home__car-data">
          <div class="home__car-icon">
            <i class="ri-dashboard-2-line"></i>
          </div>
          <h2 class="home__car-number">873</h2>
          <h3 class="home__car-name">MILEAGE</h3>
        </div>

        <div class="home__car-data">
          <div class="home__car-icon">
            <i class="ri-flashlight-fill"></i>
          </div>
          <h2 class="home__car-number">94%</h2>
          <h3 class="home__car-name">BATTERY</h3>
        </div>
      </div>

      <a href="#features" class="home__button">START</a>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.home {
  position: relative;
  overflow: hidden;

  &__container {
    position: relative;
    padding-top: 4rem;
    row-gap: 3rem;
  }
  &__data {
    text-align: center;
  }
  &__title {
    font-size: $h1-font-size;
    margin-bottom: 1rem;
  }
  &__subtitle {
    font-size: $h2-font-size;
    margin-bottom: .25rem;
  }
  &__prem {
    font-size: $small-font-size;
    font-weight: 400;
    color: $text-color;
    display: inline-flex;
    align-items: center;
    column-gap: .25rem;
    i {
      color: $first-color;
    }
  }
  &__img {
    width: 280px;
    justify-self: center;
  }
  &__car {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4rem;
    margin-bottom: 2rem;
  }
  &__car-name {
    font-size: .625rem;
    font-weight: 400;
    color: $text-color-light;
  }
  &__car-data {
    text-align: center;
  }
  &__car-number {
    font-size: $h2-font-size;
    font-weight: $font-medium;
    margin-bottom: .25rem;
  }
  &__car-icon {
    background-color: $container-color;
    border-radius: 50%;
    padding: .376rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: .875rem;
    margin-bottom: .75rem;
  }
  &__button {
    position: relative;
    border: 2px solid $first-color;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    font-size: $small-font-size;
    font-weight: $font-medium;
    color: $white-color;
    &::before {
      content: '';
      position: absolute;
      border: 2px solid hsl(158, 98%, 43%);
      box-shadow: 0 0 12px hsl(158, 98%, 53%);
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transition: .3s;
      animation: btn-home 3s infinite;
    }
    @keyframes btn-home {
      0% {
        box-shadow: 0 0 12px hsl(158, 98%, 53%);
      }
      50% {
        box-shadow: 0 0 24px hsl(180, 98%, 53%);
      }
    }
  }
}
.home .shape__big,
.home .shape__small {
  position: absolute;
}

.home .shape__big {
  left: -10rem;
  top: -5rem;
}

.home .shape__small {
  right: -10rem;
  bottom: 3rem;
}
</style>
