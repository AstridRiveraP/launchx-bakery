<template>
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

</template>

<script>
export default {
  name: 'SeeFlavors',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    
    .card-container{
        height: 90%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        box-sizing: border-box;
        padding: 1rem;
        gap: 2rem;
    }
    .card{
        cursor: pointer;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 6px 10px rgba(248, 174, 185, 0.3);
     
    }
    .card img{
        object-fit: cover;
        max-height: 100%;
        width:100%;
        height: 70%;
        border-radius: 10px 10px 0 0;
    }

    .card-body{
        flex-basis: 20%;
        height: 30%;
        align-content: space-between;
        display: flex;
        flex-direction: column;
        /* line-height: 2em; */
    }

    .card-body h5{
       font-family: 'Architects Daughter', cursive;
       font-size:3vw;

    }
    .card-body span{
        color:rgb(109,57,46) !important;
        font-size:2vw;


    }
    .card:hover{
        transform: scale(1.05);
        transition: cubic-bezier(0.55, 0.085, 0.68, 0.8);
        box-shadow: 0 10px 15px rgba(248, 174, 185, 0.5);


    }

   @media (min-width: 992px){
        
        .card-container{
            grid-template-columns: repeat(3, 1fr);
        }
   }
    @media (min-width: 576px) and (max-width: 992px){
        
        .card-container{
            grid-template-columns: repeat(2, 1fr);
        }
    }
     @media (max-width: 576px){
        
        .card-container{
            grid-template-columns: repeat(1, 1fr);
        }
         .card-body h5{
            font-size:5vw;

        }
        .card-body span{
            font-size:5vw;


        }
   }

</style>
