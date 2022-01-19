<template>
  <footer id="footer">
        <div class="container">
          
          <div class="row" id="rodape" >
            <div class="col-md-2">
              <span class="img-logo">Spotify</span>
            </div>

            <div class="col-md-2">
              <h4>Empresa</h4>
              <ul class="nav">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Empregos</a></li>
                <li><a href="#">Imprensa</a></li>
                <li><a href="#">Novidade</a></li>
              </ul>
            </div>

            <div class="col-md-2">
              <h4>Comunidades</h4>
              <ul class="nav">
                <li><a href="#">Artistas</a></li>
                <li><a href="#">Desenvolvedores</a></li>
                <li><a href="#">Marcas</a></li>
              </ul>
            </div>

            <div class="col-md-2">
              <h4>Links úteis</h4>
              <ul class="nav">
                <li><a href="#">Ajuda</a></li>
                <li><a href="#">Presentes</a></li>
                <li><a href="#">Player da web</a></li>
              </ul>
            </div> 

            <div class="col-md-4">
              <ul class="nav">
                <li class="item-rede-social"><a href="#"><img src="../assets/facebook.png"></a></li>
                <li class="item-rede-social"><a href="#"><img src="../assets/twitter.png"></a></li>
                <li class="item-rede-social" ><a href="#"><img src="../assets/instagram.png"></a></li>
              </ul>
            </div>

          </div><!-- /row -->
        </div>
        
      </footer>
</template>

<script>
export default {
components:{
    name:"Footer"
}
}
</script>

<style scoped>
#footer{
	background: #000;
	padding: 50px 0px 20px 0px;
	position: relative;
  height: 200px;
}
#item-rede-social{
	float: right;
}
.img-logo{
height: 40px;
width: 132px;
display: block;
background:url('../assets/spotify.svg') no-repeat;
background-size: contain;
color: transparent;
}
.nav>li>a{
  color: white;
  padding: 5px 5px;
}
h4{
	color: #919496;
	font-size: 15px;
	text-transform: uppercase;

}


</style>