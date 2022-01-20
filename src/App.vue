<template>
  <div id="nav">
   <Header />
   <Capa />
   <Content />
   <ContentServico />
   <Footer />
  </div>
  <router-view/>
</template>

<script>

import Header from './components/Header.vue';
import Capa from './components/Capa.vue';

import Footer from './components/Footer.vue';
import Content from './components/Content.vue';
import ContentServico from './components/ContentServicos.vue'
export default {
  components: {
    Header,
    Capa,
    Footer,
    Content,
    ContentServico
  }
}
</script>

<style>

 
</style>
