<template>
   <ContentDownload />
   <ContentDownloadStore />
   <Footer />

</template>

<script>
import ContentDownload from '../components/ContentDownload.vue'
import ContentDownloadStore from '../components/ContentDownloadStore.vue'
import Footer from '../components/Footer.vue'




export default {
    name: "Download",
    components: {
        ContentDownload  ,
        ContentDownloadStore,
        Footer
        

    }
}
</script>

<style scoped>

</style>