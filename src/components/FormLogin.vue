<template>

  <div class="form-login">
    
    <div class="container">

      <form>
        
        <h1 >Efetue Login:</h1>
        
        <div class="form-floating form-group">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email:</label>
        </div>
        <div class="form-floating form-group">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Senha:</label>
        </div>
        <button class="btn btn-lg btn-primary" type="submit">Entrar</button>
        
        </form>
    </div>
  </div>

</template>

<script>
export default {
    name: 'FormLogin'  
}

</script>

<style scoped>

.form-login {
    
    padding-top: 60px;
    background-color: white;
    height: 500px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 10px 10px;
    
  }
  input, select {
    padding: 5px 5px;
    width: 450px;
  }
h1{
  text-align: center;
}




</style>