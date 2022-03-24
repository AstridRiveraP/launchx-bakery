<template>
    <div style="height:100%; width:100%">
        <div class="section-title">
            <h1 class="font-pacifico">Nuestros Pasteles</h1>
        </div>

  <div class="card-container">
        <div class="card">
            <img src="../assets/vainilla.jpg">
            <div class="card-body">
                <h5>Vainilla</h5>
                <span>Desde $250.00</span>
            </div>
        </div>
        <div class="card">
            <img src="../assets/chocolate.jpg">
            <div class="card-body">
                <h5>Chocolate</h5>
                <span>Desde $299.00</span>
            </div>
        </div>
        <div class="card">
            <img src="../assets/redvelvet.jpg">
            <div class="card-body">
                <h5>Red Velvet</h5>
                <span>Desde $350.00</span>
            </div>
        </div>
        <div class="card">
            <img src="../assets/moka.jpg">
            <div class="card-body">
                <h5>Moka</h5>
                <span>Desde $285.00</span>
            </div>

        </div>
        <div class="card">
            <img src="../assets/zanahoria.jpg">
            <div class="card-body">
                <h5>Zanahoria</h5>
                <span>Desde $245.00</span>
            </div>
        </div>
        <div class="card">
            <img src="../assets/quesofresas.jpg">
            <div class="card-body">
                <h5>Vainilla</h5>
                <span>Desde $275.00</span>
            </div>
        </div>
  </div>

    </div>
  
</template>

<script>
export default {
  name: 'SeeFlavors',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    
    .card-container{
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(2, min-content);
       
    }
    .card{

        box-shadow: 5px 5px 5px rgba(248, 174, 185, 0.3);
     
    }


    .card:hover{

        box-shadow: 0 10px 15px rgba(248, 174, 185, 0.5);


    }


    @media (min-width: 576px) and (max-width: 992px){
        
        .card-container{
            grid-template-columns: repeat(2, auto);
        }
    }
     @media (max-width: 576px){
        
        .card-container{
            grid-template-columns: repeat(1, auto);
        }

   } 
     
</style>
