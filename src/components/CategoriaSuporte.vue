<template>
    <div class="categoria-section">

        <div class="container">

        <div class="categoria-celula">
            <h3>Ajuda com pagamentos</h3>

            <div class="categoria-lista">
                <ul class="categoria-item">
                    <li class="item"><a href="">Gerenciar pagamentos</a></li>
                    <li class="item"><a href="">Formas de pagamento</a></li>
                    <li class="item"><a href="">Ajuda com a cobrança</a></li>
                </ul>
            </div>
        </div>
        <div class="categoria-celula">
            <h3>Ajuda com a conta</h3>

            <div class="categoria-lista">
                <ul class="categoria-item">
                    <li class="item"><a href="">Como entrar</a></li>
                    <li class="item"><a href="">Ajuda com  o perfil</a></li>
                    <li class="item"><a href="">Configurações da conta</a></li>
                    <li class="item"><a href="">Segurança</a></li>
                </ul>
            </div>
        </div>
        <div class="categoria-celula">
            <h3>Ajuda com o plano</h3>

            <div class="categoria-lista">
                <ul class="categoria-item">
                    <li class="item"><a href="">Planos disponíveis</a></li>
                    <li class="item"><a href="">Preferências do plano</a></li>
                    <li class="item"><a href="">Premium Família e Kids</a></li>
                    <li class="item"><a href="">Premium Duo</a></li>
                    <li class="item"><a href="">Premium Universitário</a></li>
                </ul>
            </div>
        </div>
        <div class="categoria-celula">
            <h3>Ajuda com o app</h3>

            <div class="categoria-lista">
                <ul class="categoria-item">
                    <li class="item"><a href="">Como começar</a></li>
                    <li class="item"><a href="">Preferências do app</a></li>
                    <li class="item"><a href="">Solução de problemas</a></li>
                    <li class="item"><a href="">Playlist</a></li>
                    <li class="item"><a href="">Recursos</a></li>
                    <li class="item"><a href="">Recursos de redes sociais</a></li>
                    <li class="item"><a href="">Assistente de voz</a></li>
                </ul>
            </div>
        </div>
        <div class="categoria-celula">
            <h3>Ajuda com dispositivos</h3>

            <div class="categoria-lista">
                <ul class="categoria-item">
                    <li class="item"><a href="">Alto-falantes</a></li>
                    <li class="item"><a href="">Smartwatches</a></li>
                    <li class="item"><a href="">TVs</a></li>
                    <li class="item"><a href="">VídeoGames</a></li>
                    <li class="item"><a href="">Carros</a></li>
                    
                </ul>
            </div>
        </div>
        <div class="categoria-celula">
            <h3>Privacidade e Dados</h3>

            <div class="categoria-lista">
                <ul class="categoria-item">
                    <li class="item"><a href="">Privacidade de reprodução</a></li>
                    <li class="item"><a href="">Informações de privacidade e dados</a></li>
                    
                </ul>
            </div>
        </div>

        
        </div>

        
    </div>
</template>

<script>
export default {
    name: "CategoriaSuporte"
}
</script>

<style scoped>

.categoria-section{
    background-color: #EEEEEE;
    padding: 30px 30px;
    

}
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 130px;
}
.categoria-celula{
    box-sizing: border-box;
    flex: 2 2 2;
    flex-basis: 30%;
    
    
}
.categoria-lista{
    display: block;
    border: none;
    display: flex;
   
}

.item{
        padding-bottom: 12px;
       
}
.item > a{
    color: #117A37;
    text-decoration: none;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
    
}
ul{
    padding-left: 18px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
    box-sizing: border-box;
    font-family: spotify-circular, Helvetica, Arial, sans-serif;
    list-style-type: none;
}

h3{
    display: flex;
    justify-content: space-between;
    padding: 16px;
    font-weight: 600;
    font-size: 1.7rem;
    padding-bottom: 20px;
}
</style>