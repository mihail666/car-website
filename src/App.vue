<template>
  <header >
    <w-header />
  </header>
  <main class="main">
    <router-view/>
  </main>
  <footer>
    <w-footer />
  </footer>
  <a href="#" class="scrollup" id="scroll-up">
    <i class="ri-arrow-up-line"></i>
  </a>
</template>

<script>
import { scrollUp } from '@/assets/js/animate.js'
import WHeader from '@/components/W-Header.vue'
import WFooter from '@/components/W-Footer.vue'
export default {
  components: {
    WHeader,
    WFooter
  },
  mounted () {
    scrollUp()
  }
}
</script>

<style lang="scss">

</style>
