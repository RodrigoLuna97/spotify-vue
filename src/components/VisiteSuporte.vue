<template>
  <div class="section">

    <div class="container">
        <h1>Visite a comunidade</h1>
        <p>Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs especialistas do mundo todo!</p>
        <button class="btn">Encontrar respostas</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"VisiteSuporte"
}
</script>

<style>
.section {
    display: flex;
    background: #FFFFFF;
    padding: 100px;
}
.container{
    text-align: center;
}
h1{
    font-weight: 700;
    font-size: 45px;
}
p{
    font-weight: 500;
    padding-bottom: 18px;
    font-size: 18px;
    max-width: 500px;
    margin: 10px auto 10px;
}

.btn{
	position: relative;
    background-color: #1ed760;
    border-radius: 500px;
    font-size: inherit;
    padding: 14px 32px;
    font-weight: 700;
    
}
</style>