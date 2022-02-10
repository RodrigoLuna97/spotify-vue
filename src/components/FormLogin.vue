<template>

  <div id="fundo">

        <form class="form-control">

          <p>Para continuar, faça login no  spotify</p> 

            <div class="botoes">      
              
             <button class="btn btn-facebook btn-lg" type="submit"> Continuar com o Facebook</button>
          </div> 

          <div class="botoes">
              <button class="btn btn-apple btn-lg" type="submit">Continuar com a apple</button>
          </div>

          <div class="botoes">
              <button class="btn btn-google btn-lg" type="submit">Continuar com o google</button>
          </div>

          <div class="botoes">
              <button class="btn btn-numero btn-lg" type="submit">Continuar com número de telefone</button>
              <hr>
          </div>

          
          
          <div class="form-group ">
            <label for="">Endereço de e-mail ou nome de usuário</label>
            <input type="email" class="form-control" id="Login" placeholder="Endereço de e-mail ou nome de usuário">
          
          </div>
          <div class="form-group ">
            <label for="">Senha</label>
            <input type="password" class="form-control" id="Senha" placeholder="Senha"> 
            
          </div>

          <div class="checkbox">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
              <label class="form-check-label" for="">
               Lembrar de mim
              </label>  
          </div>
          
          <button class="btn-lg btn-login" type="submit">Entrar</button>
          
          </form>
          
      </div>

</template>

<script>
export default {
    name: 'FormLogin'  
}

</script>

<style scoped>
#fundo{
  height: 95vh;
  width: 100vw;
  background: white;
  overflow-y: hidden;
  
}

.form-control{
  display: flex;
  flex-direction: column;
  align-items: center;
}

p{
  text-align: center;
  color: black;
  font-weight: bold;
}

 label {
    font-weight: bold;
    color: #222;;
    padding: 5px 5px;
    font-size: 13px;
    
  }

  input, select {
    padding: 5px 5px;
    width: 473px;
    height: 50px;
    border: 1px solid gray;
  } 

.btn-login{
  margin: 15px;
  background: #1FDF64;
  font-weight: 500;
  border-radius: 500px;
  padding: 5px 35px;
  text-transform: uppercase;
  font-size: 17px;
  border: none;
  
}

.separador{
  padding-top: 10px;
}

.checkbox input{
  height: 15px;
  width: 15px;
  margin-top: 10px;
}

.checkbox label{
  padding-top: 8px;
}

.btn{
  border-radius: 500px;
  padding: 12px 35px;
  text-transform: uppercase;
  border: solid 1px gray;
  font-size: 15px;
  font-weight: 500;
  width: 473px;
  margin-top: 12px;
  letter-spacing: 0.1em; 
}

.btn-facebook{
  background: #3B5998;
  color: white;
}

.btn-apple{
  background: black;
  color: white;
  
}
.btn-google{
  background: white;
  color: gray;
}
.btn-numero{
  background: white;
  color: gray;
}


</style>