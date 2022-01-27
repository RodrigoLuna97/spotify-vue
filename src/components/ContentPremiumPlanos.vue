<template>
  <div id="planos">
      <div class="container">
          <h1>Escolha seu Plano</h1>
          <p>Escute sem limites no seu celular, caixa de som ou outro dispositivo.</p>

          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col-lg-3 individual">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <h3>Individual</h3>
                    <p>R$ 9,99/mês após período da oferta</p>
                    
                    <p>____________________________</p>
                    <ul >
                        <li>Escute músicas sem anúncios.</li>
                        <li>Escute em qualquer canto - até  offline.</li>
                        <li>Reprodução sob demanda.</li>
                    </ul>
                    <a href="#" class="btn btn-1">Comece</a>
                </div>
            </div>
            
            <div class="col-lg-3 duo">
                 <div class="card mb-4 rounded-3 shadow-sm">
                <h3>Duo</h3>
                <p>R$ 12,99/mês após período da oferta</p>
                
                <p>____________________________</p>
                <ul>
                    <li>2 contas Premium para um casal sob o mesmo teto</li>
                    <li>Duo Mix: uma lista de reprodução para dois, atualizada regularmente com músicas de que ambos gostam.</li>
                    <li>Ouvir música sem anúncios, reproduzir offline, reprodução sob demanda.</li>
                </ul>
                <a href="#" class="btn btn-1">Comece</a>
                 </div>
            </div>

            <div class="col-lg-3 familia">
                 <div class="card mb-4 rounded-3 shadow-sm">
                <h3>Família</h3>
                <p>R$ 15,99/mês após período da oferta</p>
                
                <p>____________________________</p>
                <ul>
                    <li>6 contas premium para membros da família que vivem sob o mesmo teto.</li>
                    <li>Family Mix: uma lista de reprodução para sua família, atualizada regularmente com músicas de que todos gostam.</li>
                    <li>Bloquear música explícita.</li>
                    <li>Ouvir música sem anúncios, reproduzir offline, reprodução sob demanda.</li>
                    <li>Spotify Kids: um aplicativo separado feito apenas para crianças.</li>
                </ul>
                <a href="#" class="btn btn-1">Comece</a>
                 </div>
            </div>

            <div class="col-lg-3 estudante">
                 <div class="card mb-4 rounded-3 shadow-sm">
                <h3>Estudante</h3>
                <p>R$ 4,99/mês após período da oferta</p>
                
                <p>____________________________</p>
                <ul>
                    <li>Plano Hulu (suportado por anúncios).</li>
                    <li>ALTURA DE COMEÇAR.</li>
                    <li>Ouça música sem anúncios.</li>
                    <li>Jogue em qualquer lugar - mesmo offline.</li>
                    <li>Reprodução sob demanda.</li>
                </ul>
                <a href="#" class="btn btn-1">Comece</a>
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
#planos{
    background-color: #EFEFEF;
    padding: 60px;
}
 h1{
    text-align: center;
    padding-bottom: 30px;
    font-weight: bold;
}
p{
    text-align: center;
}
.btn{
	color: rgb(255, 254, 254);
	border-radius: 500px;
	padding: 10px 65px;
	text-transform: uppercase;
	margin: 5px;
	transition: background 0.4s, color 0.4s;
    background-color: rgb(0, 5, 5);
    font-weight: bold;
    
    
}
ul{
    height: 400px;
}

</style>