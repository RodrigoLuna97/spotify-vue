<template>
  <section id="servicos">
          <div class="container">
            <div class="row">

              <!-- Albuns -->
              <div class="col-6">

                <div class="row albuns">

                  <div class="col-6">
                    <img src="../assets/img1.jpg" class="img-fluid">
                  </div>
                  <div class="col-6">
                    <img src="../assets/img2.jpg" class="img-fluid">
                  </div>

                </div> <!-- /row -->

                <div class="row albuns">

                  <div class="col-6">
                    <img src="../assets/img3.jpg" class="img-fluid">
                  </div>
                  <div class="col-6">
                    <img src="../assets/img4.jpg" class="img-fluid">
                  </div>

                </div> <!-- /row -->

              </div>
              
             
              <div class="col-6">

                <h2>O que o Spotify tem?</h2>

                <h3>Músicas</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam, nesciunt maxime doloremque beatae debitis saepe dolorum error. Voluptates doloremque aspernatur illum laboriosam voluptate tempora, ipsa voluptatum voluptatibus eligendi nulla.</p>

                <h3>Playlists</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ut facilis, at blanditiis porro animi numquam quam nisi? Iure cupiditate soluta dolore dignissimos earum, sed maiores ad minima accusamus quas.</p>

                <h3>Novos lançamentos</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima magnam officiis repellendus consectetur! Accusamus obcaecati quod ipsum aliquam commodi repellat quam nobis provident? Hic, amet? Ex est accusamus accusantium.</p>

              </div>
            </div>
            
          </div>
      </section>
</template>

<script>
export default {
    name: "Content"
}
</script>

<style scoped>
#servicos{
	background: white;
	padding-top: 20px;
	padding-bottom: 80px;
}
.albuns{
	padding: 10px 0px 10px 0px;
}
#sevicos h2, #servicos h3{
	color: #7c25f8;
}

</style>