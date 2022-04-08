<template>
    <h1 class="font-pacifico">Haz tu pedido</h1>
    <div class="form">
        <label for="name" >Nombre</label>
        <input type="text" id="name" name="name" v-model.lazy="inputName">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" name="email" v-model.lazy="inputEmail">
        <label for="tel">Teléfono</label>
        <input type="tel" id="phone" name="phone" v-model.lazy="inputTel">

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
            Precio: ${{$store.getters.getCakePrice.toFixed(2)}}

            <br>
            Decoraciones:
            <br>
             <p v-for="index in getDecoIndex" :key="index">
                {{$store.getters.getAllDecorations[index].nombre}} 
                <br>
                Cantidad: {{$store.getters.getDeco[index]}} Precio: ${{$store.getters.getPrices[index].toFixed(2)}}
            </p>
            <br>
            $TOTAL: {{$store.getters.getTotal.toFixed(2)}}
        </span>
        <div>
            <button @click="$store.dispatch('crearPedido')">Hacer pedido</button>

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
        inputName: {
            get () {
                return this.$store.state.pedidoActual.cliente.nombre;
            },
            set (value) {
                this.$store.commit('updateClientName', value)
            }
        },
        inputTel: {
            get () {
                return this.$store.state.pedidoActual.cliente.tel;
            },
            set (value) {
                this.$store.commit('updateClientTel', value)
            }
        },
        inputEmail: {
            get () {
                return this.$store.state.pedidoActual.cliente.email;
            },
            set (value) {
                this.$store.commit('updateClientEmail', value)
            }
        }
        
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