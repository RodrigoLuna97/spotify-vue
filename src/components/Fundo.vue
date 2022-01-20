<template>
  <div id="fundo"></div>
</template>

<script>
export default {
components:{
    name: "Fundo"
 }
}
</script>

<style>
body{
	background: url('../assets/capa.png'),
				url('../assets/ruido.png'),
				linear-gradient(50deg, #ff4169, #7c26f8);
	background-attachment: fixed;
	font-family: Helvetica,Arial,sans-serif;	
	overflow-x: hidden;			
}
</style>