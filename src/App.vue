<template>
  <div id="nav">
   <Header />
   <Capa />
   <Content />
   <Footer />
  </div>
  <router-view/>
</template>

<script>

import Header from './components/Header.vue';
import Capa from './components/Capa.vue'

import Footer from './components/Footer.vue'
import Content from './components/Content.vue';

export default {
  components: {
    Header,
    Capa,
    Footer,
    Content
  }
}
</script>

<style>

 
</style>
