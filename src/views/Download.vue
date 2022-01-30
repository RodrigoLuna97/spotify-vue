<template>
   <ContentDownload />
   <ContentDownloadStore />
   <ContentDevices />
   <Footer />
   

</template>

<script>
import ContentDevices from '../components/ContentDevices.vue'
import ContentDownload from '../components/ContentDownload.vue'
import ContentDownloadStore from '../components/ContentDownloadStore.vue'
import Footer from '../components/Footer.vue'




export default {
    name: "Download",
    components: {
        ContentDownload  ,
        ContentDownloadStore,
        ContentDevices,
        Footer

    }
}
</script>

<style scoped>

</style>