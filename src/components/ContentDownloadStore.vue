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
    height: 310px;
    background: white;
    text-align: center;
    position: relative;
    padding-top: 70px;
   
}
#content-store h2{
        font-size: 35px;
        font-weight: bold;
}
#content-store p{
    font-size: 15px;
    font-weight: 400;
    padding-top: 30px;
}
.btn-store{
	padding: 25px 25px;	
	
}
button{
    padding: 15px;
    border: none;
    background: none;
}


</style>