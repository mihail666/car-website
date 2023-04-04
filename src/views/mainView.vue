<template>
  <div>
    <w-home />
    <w-about />
    <w-popular />
    <w-features />
    <w-featured />
    <w-offer />
    <w-logos />
  </div>
</template>

<script>
import { initScrollReveal } from '@/assets/js/scrollReveal'
import WHome from '@/components/MainView/W-Home.vue'
import WFeatured from '@/components/MainView/W-Featured.vue'
import WFeatures from '@/components/MainView/W-Features.vue'
import WAbout from '@/components/MainView/W-About.vue'
import WOffer from '@/components/MainView/W-Offer.vue'
import WPopular from '@/components/MainView/W-Popular.vue'
import WLogos from '@/components/MainView/W-Logos.vue'

export default {
  components: {
    WHome,
    WFeatured,
    WFeatures,
    WAbout,
    WOffer,
    WPopular,
    WLogos
  },
  mounted () {
    initScrollReveal()
  }
}
</script>
