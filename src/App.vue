<template>
  <div id="nav">
   <Header />
   <Capa />
   <Footer />
  </div>
  <router-view/>
</template>

<script>

import Header from './components/Header.vue';
import Capa from './components/Capa.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Capa,
    Footer
  }
}
</script>

<style>

 
</style>
