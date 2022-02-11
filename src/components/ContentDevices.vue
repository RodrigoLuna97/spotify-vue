<template>
    
  <div class="devices">
     
        <div id="content">
          <img src="../assets/imgDevices.png" alt="">
        </div>

        <div id="titulo">
            <h1>Uma conta, escute onde quiser.</h1>
        </div>

        <div class="dispositivos">
            <ul class="item-dispositivo">
            <li>Celular</li>
            <li>Computador</li>
            <li>Tablet</li>
            <li>Carro</li>
            <li>Playstation</li>
            <li>Xbox</li>
            <li>TV</li>
            <li>Radio</li>
            <li>Navegador</li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    name:"ContentDevices"
}
</script>

<style scoped>
.devices{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #222326;    
}
#content{
    display: flex;
    justify-content: center;
    
    padding: 30px;
}

#titulo{
    align-self: center;
    padding-bottom: 30px;
}
.dispositivos ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-shrink:1;
    
}
li{
    display: flex;
    color: white;
    padding: 20px;
    text-transform: uppercase;
    list-style: none;
   
}
h1{
    color: white;
}


</style>