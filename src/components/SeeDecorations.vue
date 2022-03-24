<template>
    <div class="section-title">
        <h1 class="font-pacifico">Adornos y accesorios</h1>
        <h3 class="font-architects">¡Decora a tu gusto!</h3>
    </div>
    <div class="card-container">
        <div class="card">
            <img src="../assets/candlessmall.jpg" alt="velitas para pastel">
            <div class="card-body">
                <h5>Velas</h5>
                <span>$25.00</span>
            </div>
        </div>
        <div class="card">
            <img src="../assets/candlesbig.jpg" alt="vela personalizada">
            <div class="card-body">
                <h5>Vela personalizada</h5>
                <span>$45.00</span>
            </div>
        </div>
        <div class="card">
            <img src="../assets/message.jpg" alt="Mensaje personalizado">
            <div class="card-body">
                <h5>Mensaje</h5>
                <span>$50.00</span>
            </div>
        </div>
        <div class="card">
            <img src="../assets/balloons.jpg" alt="Globos">
            <div class="card-body">
                <h5>Globos</h5>
                <span>$100.00</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'SeeDecorations'
}
</script>
<style scoped>
    .section-title{
        height:20% !important;
        padding-bottom: 5%;
    }
    .section-title h1{
        color: rgb(111, 187, 187) !important;

    }
    .section-title h3{
        font-size:1.2rem;
        color: rgb(109,57,46);
    }
    .card-container{
        height:80% !important;
        grid-template-columns: repeat(4, 1fr);
        /* padding: 10% 0; */

    }
    .card{
        box-shadow: 5px 5px 5px rgba(111, 187, 187, 0.3);
    }
    .card-body h5{
        color: rgb(111, 187, 187) !important;

    }
    .card:hover{
        box-shadow: 5px 10px 15px rgba(111, 187, 187, 0.3);
   
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