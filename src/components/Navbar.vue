<template>

      <nav class="navbar">
        <div class="container">

         <a href="/" class="d-flex align-items-center   text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
          <span class="img-logo">Spotify</span> 
        </a>

            <div class="links">
              <router-link class="btn" to="/premium">Premium</router-link>
              <router-link class="btn" to="/suporte">Suporte</router-link>
              <router-link class="btn" to="/download">Download</router-link>
              <a href="/" class="separador">|</a>
              <router-link class="btn" to="/inscreva-se">Inscreva-se</router-link>
              <router-link class="btn" to="/login">Login</router-link>
            </div> 

         </div>
      </nav>

   
     <router-view/>
</template>

<script>
export default {
   name: "Navbar"
}
</script>

<style scoped>
.navbar{
	padding: 20px 20px;
	background: rgba(0,0,0, 0.9);
	border: none;
  
}

.img-logo{
height: 40px;
width: 132px;
display: block;
background:url('../assets/spotify.svg') no-repeat;
background-size: contain;
color: transparent;
}


.links .btn {
    color: rgb(255, 254, 254);
    font-weight: bold;
    
}
.links .btn:hover{
	color: #9bf0e1;
}
.separador{
  color: white;
  padding: 15px 15px 0px 15px;

}


</style>