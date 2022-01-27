<template>
  <div class="premium">
   <CapaPremium />
   <ContentPremium />
   <Footer />
  </div>
</template>

<script>

import CapaPremium from '../components/CapaPremium.vue'
import ContentPremium from '../components/ContentPremium.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Premium",
  components:{
    CapaPremium,
    ContentPremium,
    Footer
   
  }
}
</script>