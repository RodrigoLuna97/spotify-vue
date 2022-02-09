<template>
    <CapaSuporte />
    <CategoriaSuporte />
    <VisiteSuporte />
    <Footer />
</template>

<script>

import CapaSuporte from '../components/CapaSuporte.vue'
import CategoriaSuporte from '../components/CategoriaSuporte.vue'
import Footer from '../components/Footer.vue'
import VisiteSuporte from '../components/VisiteSuporte.vue'
export default {
    name:"Suporte",
    components: {
       CapaSuporte,
        CategoriaSuporte,
        VisiteSuporte,
        Footer,
        
    }
}

</script>

<style scoped>

</style>