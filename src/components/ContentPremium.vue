<template>

  <div class="content-premium">

      <div class="container">
      <h1>Por que obter Premium?</h1>

      <div class="row">
          <div class="col-lg-3">
               <img src="..\assets\ContentPremium1.png" class="img-fluid">
               <h4>Baixe músicas.</h4>
               <p>Escute em qualquer lugar.</p>
          </div> 
          <div class="col-lg-3">
               <img src="..\assets\ContentPremium2.png" class="img-fluid">
               <h4>Sem intervalos.</h4>
               <p>Escute sem parar.</p>
          </div> 
          <div class="col-lg-3">
               <img src="..\assets\ContentPremium3.png" class="img-fluid">
               <h4>Escute qualquer música.</h4>
               <p>Até nos celulares.</p>
          </div> 
          <div class="col-lg-3">
               <img src="..\assets\ContentPremium4.png" class="img-fluid">
               <h4>Pule quantas músicas quiser.</h4>
               <p>Apenas pule.</p>
          </div> 
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
    background-color: white;
    padding-top: 90px;
    
}
 h1{
    text-align: center;
    padding-bottom: 30px;
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