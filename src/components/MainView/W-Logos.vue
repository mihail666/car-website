<template>
  <section class="logos section" id="logos">
    <div class="logos__container container grid">
      <div class="logos__content" v-for="l in logos" :key="l.id">
        <img :src="require('@/assets/img/' + l.img)" alt="" class="logos__img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    arrCars: [],
    logos: [
      { img: 'logo1.png' },
      { img: 'logo2.png' },
      { img: 'logo3.png' },
      { img: 'logo4.png' },
      { img: 'logo5.png' },
      { img: 'logo6.png' }
    ]
  })
}
</script>

<style lang="scss">
.logos {
  &__container {
    grid-template-columns: repeat(3, max-content);
    justify-content: center;
    align-items: center;
  }
  &__img{
    width: 40px;
    opacity: .4;
    transition: .3s;
    &:hover {
      opacity: .9;
    }
  }
}
</style>
