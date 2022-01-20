<template>
    
    <div class="container">

    <nav class="navbar navbar-expand-lg navbar-transparente navbar-fixed-top ">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
          <span class="img-logo">Spotify</span> 
        </a>
    
      <ul class="nav">
        <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Premium</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Suporte</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Baixar</a></li>
        <li class="nav-item"><a href="#" class="nav-link">|</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Inscrever-se</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Entrar</a></li>
      </ul>"
    
     </nav>
    </div>
    
</template>

<script>
export default {
   name: "Header"
}
</script>

<style scoped>

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
  font: bold;
}
.nav>li>a:hover{
	color: #9bf0e1;
}
h1{
	font-size: 400px;
	font-weight: 900;
	letter-spacing: -0.04px;
	margin-bottom: 50px;
}
nav.navbar-transparente{
	padding: 15px 0px;
	background: rgba(0,0,0, 0.6);
	border: none;
  
}
.navbar-brand{
	padding: 5px 15px;
}
</style>