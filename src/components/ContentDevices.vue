<template>
    
  <div class="devices">
     
        <div id="content">
          <img src="../assets/imgDevices.png" alt="">
        </div>

        <div id="titulo">
            <h1>Uma conta, escute onde quiser.</h1>
        </div>

        <div id="dispositivos">
            <span>Celular</span>
            <span>Computador</span>
            <span>Tablet</span>
            <span>Carro</span>
            <span>Playstation</span>
            <span>Xbox</span>
            <span>TV</span>
            <span>Radio</span>
            <span>Navegador</span>
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
    height: 450px;
    background: #222326;    
    position: relative;
}
#content{
    position: absolute;
     top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding-bottom: 100px; 
}

#titulo{
    position: absolute;
     top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding-top: 200px;
}
#dispositivos{
    position: absolute;
     top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding-top: 300px;
}
span{
    color: white;
    padding: 20px;
    text-transform: uppercase;
}
h1{
    color: white;
}


</style>