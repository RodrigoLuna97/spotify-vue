<template>
  <div id="nav">
   <Header />
   <Footer />
  </div>
  <router-view/>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

 
</style>
