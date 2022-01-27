<template>
<div id="section">
 <div class="container">
  <div class="row  py-5 my-5 ">

    <div class="col-md-2">
     <span class="img-logo">Spotify</span>
    </div>

    <div class="col-md-2">
      <h4>Empresa</h4>
      <ul class="nav flex-column">
        <li class="nav"><a href="#" class="nav-link p-0">Sobre</a></li>
        <li class="nav"><a href="#" class="nav-link p-0">Emprego</a></li>
        <li class="nav"><a href="#" class="nav-link p-0">Imprensa</a></li>
        <li class="nav"><a href="#" class="nav-link p-0">Novidades</a></li>
      </ul>
    </div>

    <div class="col-md-2">
      <h4>Comunidades</h4>
      <ul class="nav flex-column">
        <li class="nav"><a href="#" class="nav-link p-0">Artistas</a></li>
        <li class="nav"><a href="#" class="nav-link p-0">Desenvolvedores</a></li>
        <li class="nav"><a href="#" class="nav-link p-0">Publicidade</a></li>
        <li class="nav"><a href="#" class="nav-link p-0">Investidores</a></li>
        <li class="nav"><a href="#" class="nav-link p-0">Fornecedores</a></li>
      </ul>
    </div>

    <div class="col-md-2">
      <h4>Links úteis</h4>
      <ul class="nav flex-column">
        <li class="nav"><a href="#" class="nav-link p-0">Suporte</a></li>
        <li class="nav"><a href="#" class="nav-link p-0">Aplicativo móvel grátis</a></li>
      </ul>
    </div>

     <div class="col-md-4">
       <ul class="nav">
            <li class="item-rede-social"><a href="#"><img src="../assets/facebook.png"></a></li>
            <li class="item-rede-social"><a href="#"><img src="../assets/twitter.png"></a></li>
            <li class="item-rede-social" ><a href="#"><img src="../assets/instagram.png"></a></li>
        </ul>
      </div>
  </div>
</div>
</div>
</template>

<script>
export default {
components:{
    name:"Footer"
  }
}
</script>

<style scoped>
#section{
	background: black;
  height: 350px;
  width: 100%;
  position: absolute;
  
  
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
	color: rgb(255, 253, 253);
	font-size: 20px;
	text-transform: uppercase;
  
}

</style>