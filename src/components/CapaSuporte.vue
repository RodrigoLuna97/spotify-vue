<template>


  <div class="capa-suporte">
    
      <h1>Como posso te ajudar?</h1>

         <div class="form-outline">
              <input type="search" id="form" class="form-group"/>
              <label class="form-label" for="form"></label>
         </div>

        <div class="container">
            
            <div class="row">
        
                <div class="col-md-3">
                    <h5>Acesso</h5>
                    <a href="">Não consigo reiniciar a senha</a>
                </div>

                <div class="col-md-3">
                    <h5>Planos disponíveis</h5>
                    <a href="">Comece ou jude para plano familiar</a>

                </div>

                <div class="col-md-3">
                    <h5>Acesso</h5>
                    <a href="">Não consigo lembrar detalhes do login</a> 
                </div>

                <div class="col-md-3">
                    <h5>Acesso</h5>
                    <a href="">Ajuda para acessar com Facebook</a>
                </div>

            </div>
        </div>

   </div>


</template>

<script>
export default {
    name: "CapaSuporte"
}
</script>

<style scoped>
html, body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.capa-suporte{
    background: url('../assets/search-desktop.webp');
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1{
    font-size: 55px;
    font-weight: bold;
    color: white;
    padding-top: 60px;
    padding-bottom: 15px;
    text-align: center;
}

.form-outline {
    align-self: center;
}
.form-group {
  width: 40vw;
  height: 50px;
  
}
.row{
    display: flex;
    flex-wrap: wrap;
    padding: 60px;
}
.row h5{
    color: #A6CDD9;
    font-size: 13px;
}
.row a{
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;
}

</style>