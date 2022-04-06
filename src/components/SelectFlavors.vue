<template>
    <h3>¡Escoge tus sabores favoritos!</h3>

    <div id="panes">
        <p class="item-title"> Elige el número de piezas de pan </p> 
        <div class="option1">
            <label class="radio-option">
                <input type="radio" id = "two" name="number-breads" value=2 @change="$store.dispatch('cambiarCantidad',$event.target.value)">
                <img class="option" src="../assets/two-layers.png">
            </label>
            <p>Dos capas</p>
        </div>
        <div class="option2">
            <label class="radio-option">
                <input type="radio" id = "three" name="number-breads" value=3 @change="$store.dispatch('cambiarCantidad',$event.target.value)">
                <img class="option" src="../assets/three-layers.png">
            </label>
            <p>Tres capas</p>
        </div>
        <p class="titulo-sabores"> Elige hasta {{$store.state.pedidoActual.capas}} sabores </p> 
        <ul class="opciones-sabores">
            <li>
                <input type="checkbox" id = "vainilla" value="Vainilla" name="sabores" @change="$store.dispatch('updateSelectedFlavors',$event.target)" :disabled="disable">
                <label for="vainilla">Vainilla</label>
            </li>
            <li>
                <input type="checkbox" id = "chocolate" value="Chocolate" name="sabores" @change="$store.dispatch('updateSelectedFlavors',$event.target)" :disabled="disable">
                <label for="chocolate">Chocolate</label>
            </li>
            <li>
                <input type="checkbox" id = "redvelvet" value="Red Velvet" name="sabores" @change="$store.dispatch('updateSelectedFlavors',$event.target)" :disabled="disable">
                <label for="redvelvet">Red Velvet</label>
            </li>
            <li>
                 <input type="checkbox" id = "moka" value="Moka" name="sabores" @change="$store.dispatch('updateSelectedFlavors',$event.target)" :disabled="disable">
                <label for="moka">Moka</label>
            </li>
            <li>
                 <input type="checkbox" id = "zanahoria" value="Zanahoria" name="sabores" @change="$store.dispatch('updateSelectedFlavors',$event.target)" :disabled="disable">
                <label for="zanahoria">Zanahoria</label>
            </li>
            <li>
                <input type="checkbox" id = "queso" value="Queso con fresas" name="sabores" @change="$store.dispatch('updateSelectedFlavors',$event.target)" :disabled="disable">
                <label for="queso">Queso</label>
            </li>
        
        
        
       
       
        

        </ul>
        
    </div>
   
</template>
<script>
export default {
    name: "SelectFlavors",
   computed:{
       disable(){
           const flavors = this.$store.getters.getFlavors;
           const flavorLen =  this.$store.getters.getFlavors.length;
           const capas = this.$store.getters.getCapas ;
           if ( flavorLen >= capas && flavorLen > 0 || capas == 0){
               return true
           }
           
       }
   }
}
</script>
<style scoped>
    .flex-col{
        display: flex;
        flex-direction: column;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
        padding-bottom: 0.5rem;
    }
    h3{
        
        font-size:1.2rem;
        color: rgb(109,57,46);
        font-family: 'Architects Daughter', cursive;

    }


    #panes{
        max-height: 100vh;
        display: grid;
        padding: 5%;
        column-gap: 5%;
        row-gap: 2rem;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        grid-template-areas: 
        "item-title item-title"
        "option1 option2"
        "titulo-sabores titulo-sabores"
        "opciones-sabores opciones-sabores"
        
        
        ;
        
    }

    /* ---------grid location--------- */
    .item-title{
        grid-area:item-title;
    }
    .option1{
        grid-area:option1;

    }
    .option2{
        grid-area:option2;

    }
    .titulo-sabores{
        grid-area:titulo-sabores;
    }
    .opciones-sabores{
        grid-area: opciones-sabores;
        columns:2;
        -webkit-columns: 2;
        -moz-columns: 2;    
    }
    /* ---------radio options--------- */
    .radio-option{
        /* border: 1px dotted rgb(239,24,127); */
        border-radius: 10px;
        padding: 0;
    }
    .option{
        object-fit:contain;
        max-width: 100%;
        max-height: 150px;
        padding: 5%;
    }
    [type=radio] { 
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;

    }
    [type=radio] + img {
        cursor: pointer;
        border-radius: 5px;
    }
    [type=radio]:checked + img{
        border: 1px solid rgb(248, 174, 185);
        box-shadow: 0px 0px 10px rgb(248, 174, 185);

    }
    .option:hover{
        box-shadow: 0px 0px 5px rgba(248, 174, 185, 0.5);
    }
    ul{
        list-style-type: none;
    }
</style>