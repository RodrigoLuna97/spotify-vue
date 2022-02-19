<template>
  <div class="home">
    <Navbar />
    <Capa />
    <Content />
    <ContentServico />
    <Footer />
    <Fundo />
     
  </div>
</template>

<script>
import Capa from '../components/Capa.vue'
import Content from '../components/Content.vue'
import ContentServico from '../components/ContentServicos.vue'
import Footer from '../components/Footer.vue'
import Fundo from '../components/Fundo.vue'

export default {
  name: 'Home',
  components: {
   Capa,
   Content,
   ContentServico,
   Footer,
   Fundo
    
  }
}
</script>
