<template>
  <div class="premium">
   <CapaPremium />
   <ContentPremium />
    <PlanosPremium />
   <Footer />
  
  </div>
</template>

<script>

import CapaPremium from '../components/CapaPremium.vue'
import ContentPremium from '../components/ContentPremium.vue'
import PlanosPremium from '../components/ContentPremiumPlanos.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Premium",
  components:{
    CapaPremium,
    ContentPremium,
    PlanosPremium,
    Footer,
    
   
  }
}
</script>