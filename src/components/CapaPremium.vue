<template>
    <div class="capa">
        <div class="container capa-premium">
            <h1>Obtenha o Premium grátis por 1 mês</h1>
            <p>Por apenas R$ 9,99. Cancele a qualquer momento.</p>
            <a href="#" class="btn btn-1">Comece</a> 
            <a href="#" class="btn btn-2">Planos</a>
            <p id="regra">1 mês grátis não está disponível para usuários que já tentaram Premium.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CapaPremium"
}
</script>

<style scoped>
.capa{
    height: 480px;
    background: #1D75DE;
    position: relative;
}
.capa-premium {
    padding-top: 150px;
	padding-bottom: 80px;
}
.capa-premium h1, p{
   font-weight: bold;
   color: white;
}
.btn{
	color: rgb(255, 254, 254);
	border-radius: 500px;
	padding: 10px 65px;
	text-transform: uppercase;
	margin: 5px;
	transition: background 0.4s, color 0.4s;
   
    font-weight: bold;
}
.btn-1{
    background-color: black;
}
.btn-2{
    background-color: transparent;
    border: 2px solid white;
}
h1{
    padding-bottom: 30px;
}
p{
    padding: 5px;
}
#regra{
    font-size: 10px;
    text-decoration: none;
    padding-top: 35px;
}
</style>