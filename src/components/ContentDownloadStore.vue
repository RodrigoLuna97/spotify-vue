<template>
  <div id="content-store">
            <h2>Traga sua música para celulares e tablets.</h2>
            <p>Ouvir pelo celular ou tablet é grátis, fácil e divertido.</p>

            <div class="btn-store">
                <button id="btn-apple"><img src="../assets/BtnApple.png" alt="apple"></button>
                <button id="btn-google"><img src="../assets/BtnGoogle.png" alt="google"></button>
                <button id="btn-microsoft"><img src="../assets/BtnMicrosoft.png" alt="microsoft"></button>
                <button id="btn-amazon"><img src="../assets/BtnAmazon.png" alt="amazon"></button>
                
            </div>
        </div>
</template>

<script>
export default {    
    name:"ContentStore"

}
</script>

<style>

#content-store{
    display: flex;
    background: white;
    text-align: center;
    padding-top: 70px;
    flex-direction: column;
    justify-content: center;
   
}
#content-store h2{
        font-size: 35px;
        font-weight: bold;
        text-align: center;
}
#content-store p{
    font-size: 15px;
    font-weight: 400;
    padding-top: 30px;
}
.btn-store{
	padding-bottom: 25px 
	
}
button{
    padding: 13px;
    border: none;
    background: none;
}


</style>