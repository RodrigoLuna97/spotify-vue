<template>


    <div class="form-login">
        
        <form class="form-control justify-content-sm-center">
          
          <div class="form-group ">
            <label for="">Email:</label>
            <input type="email" class="form-control" id="Login" placeholder="Endereço de e-mail ou nome de usuário">
          
          </div>
          <div class="form-group ">
            <label for="">Senha:</label>
            <input type="password" class="form-control" id="Senha" placeholder="Senha"> 
          </div>

          <button class="btn btn-lg btn-primary form-group" type="submit">Entrar</button>
          
          </form>
      </div>

</template>

<script>
export default {
    name: 'FormLogin'  
}

</script>

<style scoped>

.form-login{
  background: white;
  height: 889px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}


 label {
    font-weight: bold;
    color: #222;;
    padding: 5px 5px;
    
  }
  input, select {
    padding: 5px 5px;
    width: 450px;
    height: 50px;
  } 

.btn{
  margin: 10px;
}



</style>