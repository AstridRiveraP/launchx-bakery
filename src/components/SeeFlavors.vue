<template>
    <div style="height:100%; width:100%">
        <div class="section-title">
            <h1 class="font-pacifico">Nuestros Pasteles</h1>
        </div>


    <div class="card-container">
        <div v-for="flavor in flavorData" :key ="flavor.nombre">
            <!-- {{flavor.nombre}} -->
            <div class="card">
                <img :src="flavor.image">
                <div class="card-body">
                    <h5>{{flavor.nombre}}</h5>
                    <span>Desde ${{flavor.precio.toFixed(2)}}</span>
                </div>
            </div>
                
        
        </div>
    </div>
</div>
  
</template>

<script>
// import {mapState} from 'vuex';

export default {
  name: 'SeeFlavors',
 computed: {
     flavorData: function(){
        //  console.log(this.$store.getters.getAllFlavors);
         return this.$store.getters.getAllFlavors;
     },
   
 }
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
