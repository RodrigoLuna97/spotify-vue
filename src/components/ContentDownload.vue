<template>
    <div id="download">
        <div id="title">

            <div class="img">
                <img src="..\assets\DownloadIcon.png" alt="">
            </div>

            <h1>Download Spotify</h1>
            <p>Escute milhões de músicas e podcasts no seu dispositivo.</p>
            <button class="btn">Download</button>
        </div>
    </div>

        

</template>

<script>
export default {
    name: "Download"
}
</script>

<style scoped>
  #download{
      height: 524px;
      background: #19E68C;
      position: relative;
      
}
#title{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;
}
#title h1,p {
    padding-bottom: 30px;

}
h1{
    font-weight: bold;
    font-size: 45px;
}
.btn{
	color: rgb(0, 0, 0);
	border-radius: 500px;
	padding: 10px 35px;
    font-weight: bold;
	margin: 0px 15px;
	transition:  0.4s, color 0.4s;
    background: white;
    font-size: 15px;
}
.img{
    padding-bottom: 70px;
}


</style>

