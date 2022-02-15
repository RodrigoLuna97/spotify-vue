<template>

  <div class="content-premium">

      <div class="title">
      <h1>Por que obter Premium?</h1>

      <div class="conteudo">

          <ul class="items-lista">
              <li class="item"><img src="..\assets\ContentPremium1.png" class="img-fluid">
               <h4>Baixe músicas.</h4>
               <p>Escute em qualquer lugar.</p>
               </li>

              <li class="item"> <img src="..\assets\ContentPremium2.png" class="img-fluid">
               <h4>Sem anuncios.</h4>
               <p>Escute sem parar.</p>
               </li>

              <li class="item"> <img src="..\assets\ContentPremium3.png" class="img-fluid">
               <h4>Ouça qualquer música.</h4>
               <p>Até nos celulares.</p>
               </li>

              <li class="item"> <img src="..\assets\ContentPremium4.png" class="img-fluid">
               <h4> Passe as músicas.</h4>
               <p>Apenas pule.</p>
               </li> 
          </ul>
          
     </div>
          

      </div>
  </div>
</template>

<script>
export default {
    name: "ContentPremium"
}
</script>

<style scoped>
.content-premium{
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 80px 0px 50px 0;
   
    
}
.items-lista{
    display: flex;
    list-style: none;
     flex-wrap: wrap;
     
}

.item{
    width: 285px;
    height: 286px;
    text-align: center;
    align-items: center;
   
}

 h1{
    text-align: center;
    padding-bottom: 55px;
    font-weight: bold;
}
h4{
    font-weight: bold;
    padding: 15px;
}
p{
    padding-left: 18px;
}

</style>