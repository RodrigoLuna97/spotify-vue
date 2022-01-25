<template>
  <div class="container" id="form-login">
   <form>
    
    <h1 class="h3">Efetue Login:</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

  

    <button class="btn btn-lg btn-primary" type="submit">Sign in</button>
    
  </form>
  </div>

</template>

<script>
export default {
    name: 'FormLogin'  
}

</script>

<style scoped>

#form-login {
    max-width: 400px;
    display: center;
    padding-top: 60px;
  }
.container{
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
    width: 400px;
  }

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}



</style>