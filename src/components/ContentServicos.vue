<template>
  <div id="servico">
        <div class="container">
          <div class="row">
            <div class="col-md-4" > 

               <h2>Fácil</h2>

                <h3>Buscar</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic voluptate impedit maxime rem eum fugit quas aut, fuga qui minus, vel reiciendis eos nulla quia soluta? Iste, itaque temporibus!</p>
                <h3>Navegar</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores, eum odit quas placeat, excepturi suscipit officiis pariatur asperiores recusandae rerum? Dolore perspiciatis ducimus aspernatur fugiat hic! Nulla, facere illo.</p>
                <h3>Descobrir</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ad placeat et voluptatum. Dignissimos exercitationem suscipit tempore quidem reprehenderit necessitatibus dicta vero veritatis natus magnam illo laudantium repellendus, dolore laborum!</p>

            </div>
           
            <div class="col-md-8">      
            
             <div class="row rotacionar">

                  <div class="col-md-6">
                    <img src="../assets/iphone1.png" class="img-responsive">
                  </div>
                  <div class="col-md-6">
                    <img src="../assets/iphone2.png" class="img-responsive">
                  </div>

                </div> <!-- /row -->


              </div>
            </div>

          </div>
    </div>
      
 
</template>

<script>
export default {
    name: "ContentServico"
}
</script>

<style scoped>
#servico h2{
	font-size: 50px;
	font-weight: 700;
	letter-spacing: -0.04em;
  color: #ffffff;
}
#servico h3{
	font-size: 35px;
	font-weight: 700;
	letter-spacing: -0.04em;
  color: #9bf0e1;
}
p{
  color: white;
}
#recursos{
	padding-top: 20px;
	padding-bottom: 20px;
	color: white;
}
.rotacionar{
	transform: rotate(30deg);
	padding-left: 80px;
}
#recursos h3{
	color: #9bf0e1;
}

</style>