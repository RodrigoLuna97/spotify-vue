<template>
    <CapaSuporte />
    <CategoriaSuporte />
    <Footer />
</template>

<script>

import CapaSuporte from '../components/CapaSuporte.vue'
import CategoriaSuporte from '../components/CategoriaSuporte.vue'
import Footer from '../components/Footer.vue'
export default {
    name:"Suporte",
    components: {
       CapaSuporte,
        CategoriaSuporte,
        Footer
    }
}

</script>

<style scoped>

</style>