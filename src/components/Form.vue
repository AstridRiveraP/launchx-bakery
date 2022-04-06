<template>
    <h1 class="font-pacifico">Haz tu pedido</h1>
    <div class="form">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" name="email">
        <label for="tel">Teléfono</label>
        <input type="tel" id="phone" name="phone">

        <span>
            <h3>Descripción del pedido</h3>
            <br>

            Pastel de {{$store.getters.getCapas}} capas.
            <br>
            Sabores: 
            <br>
            <p v-for="flavor in $store.getters.getFlavors" :key="flavor">
                {{flavor}}
                <br>
            </p>
            <br>
            Precio:

            <br>
            Decoraciones:
            <br>
             <p v-for="index in getDecoIndex" :key="index">
                {{$store.getters.getAllDecorations[index].nombre}} 
                <br>
                Cantidad: {{$store.getters.getDeco[index]}} Precio: 
            </p>
            <br>
        </span>
        <div>
            <button>Hacer pedido</button>

        </div>
    </div>
    
</template>
<script>
export default {
    name:"Form",
    computed: {
        getDecoIndex: function(){
            let arrIndexes = [];
            const dec = this.$store.getters.getDeco;
            for (let index = 0; index < dec.length; index++) {
                if (dec[index]>0){
                    arrIndexes.push(index);
                }  
            }
            // console.log(arrIndexes);
            return arrIndexes
        },
        
    },
        
}
</script>
<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        padding: 0 20%;
        text-align: left;
    }
    h3{
        font-size:1.2rem;
        color: rgb(109,57,46);
        font-family: 'Architects Daughter', cursive;
    }
</style>