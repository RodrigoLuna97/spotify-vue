<template>
  <div class="capa">
      <div class="texto-capa">
        <h1>Escutar muda tudo</h1>
        <a href="" class="btn btn-custom btn-roxo">Baixe o Spotify Free</a>
      </div>
    </div>
</template>

<script>
export default {
components: {
    name: "Capa"
}
}
</script>

<style scoped>
.capa{
  height: 900px;
 
}
h1{
    font-size: 100px;
	font-weight: 900;
	letter-spacing: -0.04px;
	margin-bottom: 50px;
  
}
.texto-capa{
	text-align: center;
	color: white;
	padding-top: 300px;
	
}
.btn-custom{
	color: white;
	border-radius: 500px;
	padding: 10px 35px;
	text-transform: uppercase;
	margin: 0px 15px;
	transition: background 0.4s, color 0.4s;
}
.btn-roxo{
background: #7c25f8;
}
.btn-roxo:hover{
	background: #6207e3;
	color: white;
}
</style>