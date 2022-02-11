<template>
  <div class="section">

        <class class="conteudo">

            <div class="cabecalho">

                <div class="header">
    
                    <div class="img-logo">
                        </div> 
                    <h1>Inscreva-se grátis e comece a curtir.</h1>

                </div>

                <div class="botoes-header">
                        
                    <button class="btn btn-facebook">Inscrever-se com o Facebook</button>
                    <br>
                    <button class="btn btn-google">Inscrever-se com o Google</button>
                    <hr>
                </div>

             </div>

         <form>
                <div class="mb-3">
                    <label for="formGroupEmail" class="form-label">Qual seu e-mail?</label>
                    <input type="text" class="form-control" id="email" placeholder="Insira seu e-mail">
                    </div>

                    <div class="mb-3">
                    <label for="formGroupEmail" class="form-label">Confirme seu e-mail</label>
                    <input type="text" class="form-control" id="email" placeholder="Insira o e-mail novamente">
                    </div>

                    <div class="mb-3">
                    <label for="formGroupSenha" class="form-label">Crie uma senha</label>
                    <input type="password" class="form-control" id="email" placeholder="Crie uma senha">
                    </div>

                    <div class="mb-3">
                    <label for="formGroupSenha" class="form-label">Como devemos chamar você?</label>
                    <input type="text" class="form-control" id="senha" placeholder="Insira um nome de perfil">
                    <div id="emailHelp" class="form-text">Isso será exibido no seu perfil.</div>
                    </div>

                    <div class="mb-3">
                    <label for="formGroupData" class="form-label">Qual sua  data de nascimento</label>
                    <input type="date" class="form-control" id="dataNascimento" >
                    </div>

                    <div class="gender-group">
                        <label for="formGroupSenha" class="form-label">Qual seu gênero?</label>
                        <div class="checkbox"><input type="radio" id="gender_option_masculino"> 
                         <label for="gender_option_masculino">Masculino</label>
                         </div>
                         <div class="checkbox"><input type="radio" id="gender_option_feminino"> 
                         <label for="gender_option_feminino">Feminino</label>
                         </div>

                        <div class="checkbox"><input type="radio" id="gender_option_nonbinary"> 
                         <label for="gender_option_nonbinary">Não binário</label>
                         </div>
                    </div>

                    <button class="btn btn-inscrever">Inscrever-se</button>
                   


            </form>

        </class>

  </div>
</template>

<script>
export default {
    name: "Inscrever"
}
</script>

<style scoped>
.section{
    height: 110vh;
    width: 100vw;
    background-color: white;

}
.conteudo{
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;  
}
 
 .botoes-header{
     display: flex;
     flex-direction: column;
     align-items: center;
 }

 form{
     display: flex;
     flex-direction: column;
     align-items: center; 
 }

 h1{
     text-align: center;
 }

.img-logo{
display: flex;
margin: auto;
height: 40px;
width: 132px;
background:url('../assets/spotify-logo.png') no-repeat;
background-size: contain;
}

.btn-inscrever{
    display: flex;
    flex-direction: column;
     align-items: center;
}

.btn{
  border-radius: 500px;
  text-transform: uppercase;
  border: solid 1px gray;
  font-size: 12px;
  font-weight: 500;
  width: 300px;
  margin-top: 12px;
  letter-spacing: 0.1em; 
  padding: 14px 32px;
}

.btn-facebook{
  background: #3085F3;
  color: white;
}

.btn-google{
  background: white;
  color: gray;
}

.btn-inscrever{
     background-color: #1ED760; 
      font-weight: bold;
  }

 label {
    font-weight: bold;
    color: #222;;
    padding: 5px 5px;
    font-size: 13px;
    width: 400px; 
  }
  
    
</style>