<template>
  <div class="section">

      <div class="container-planos">
          <h1>Escolha seu Plano</h1>
          <p>Escute sem limites no seu celular, caixa de som ou outro dispositivo.</p>

          <div class="row-planos">

            <div class="coluna individual">
                <div class="card-title ">
                    <h3>Individual</h3>
                    <p>R$ 9,99/mês após período da oferta</p>
                    <hr>
                </div>
                    <ul class="card-1">
                        <li>Escute músicas sem anúncios.</li>
                        <li>Escute em qualquer canto - até  offline.</li>
                        <li>Reprodução sob demanda.</li>
                    </ul>
                       <div class="btn">
                        <a href="#" class="btn-1">Comece</a>
                      </div>
                </div>
            
            
            <div class="coluna duo">
                 <div class="card-title ">
                    <h3>Duo</h3>
                    <p>R$ 12,99/mês após período da oferta</p>               
                   <hr>
                 </div>
                <ul class="card-2">
                    <li>2 contas Premium para um casal sob o mesmo teto</li>
                    <li>Duo Mix: uma lista de reprodução para dois, atualizada regularmente com músicas de que ambos gostam.</li>
                    <li>Ouvir música sem anúncios, reproduzir offline, reprodução sob demanda.</li>
                </ul>
                    <div class="btn">
                        <a href="#" class="btn-1">Comece</a>
                    </div>
            </div>
            

            <div class="coluna familia">
                 <div class="card-title ">
                <h3>Família</h3>
                <p>R$ 15,99/mês após período da oferta</p>               
                <hr>
                 </div>
                <ul class="card-3">
                    <li>6 contas premium para membros da família que vivem sob o mesmo teto.</li>
                    <li>Family Mix: uma lista de reprodução para sua família, atualizada regularmente com músicas de que todos gostam.</li>
                    <li>Bloquear música explícita.</li>
                    <li>Ouvir música sem anúncios, reproduzir offline, reprodução sob demanda.</li>
                    <li>Spotify Kids: um aplicativo separado feito apenas para crianças.</li>
                </ul>
                     <div class="btn">
                        <a href="#" class="btn-1">Comece</a>
                    </div>
                </div>
                 

            <div class="coluna estudante">
                 <div class="card-title">
                <h3>Estudante</h3>
                    <p>R$ 4,99/mês após período da oferta</p>                
                    <hr>
                 </div>
                <ul class="card-4">
                    <li>Plano Hulu (suportado por anúncios).</li>
                    <li>ALTURA DE COMEÇAR.</li>
                    <li>Ouça música sem anúncios.</li>
                    <li>Jogue em qualquer lugar - mesmo offline.</li>
                    <li>Reprodução sob demanda.</li>
                </ul>
                <div class="btn">
                <a href="#" class="btn-1">Comece</a>
                </div>
             </div>
            
        
  
          </div>
      </div>
  </div>

</template>

<script>
export default {
    name: "PlanoPremium"
}
</script>

<style scoped>
.section{
    background-color: #EFEFEF;
    
}

.row-planos{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto); 
    -webkit-box-pack: center; 
    margin: 0 370px;
}

.coluna {
    display: grid;
    width: 265px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: rgb(255 255 255) 0px 8px 0px 0px, rgb(0 0 0 / 30%) 0px 0px 8px;
    flex-wrap: wrap;
}

.card-title{
    margin: 10px;
}
.individual> .card-1{
    grid-column: 1;
    grid-row: 2;
}

.duo > .card-2{
    grid-column: 1;
    grid-row: 2;
}
.familia > .card-3{
    grid-column: 1;
    grid-row: 2;
}
.estudante > .card-4{
    grid-column: 1;
    grid-row: 2;
}
 h1{
    text-align: center;
    padding: 60px 0px 0px 0px;
    font-weight: bold;
}
p{
    text-align: center;
}

.btn{
    padding-bottom: 20px;
}
.btn-1{
	color: rgb(255, 254, 254);
	border-radius: 500px;
	padding: 10px 75px;
    text-decoration: none;
	text-transform: uppercase;
    background-color: rgb(0, 5, 5);
    font-weight: bold;
    
}
ul{
    display: flex;
    flex-direction: column;
    min-height: 350px;
}
li{
    list-style: '✓';
    font-size: 15px;
    font-weight: 400;
    
}

hr{
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-width: 1px;
    color: rgb(0, 0, 0);
   
}

</style>