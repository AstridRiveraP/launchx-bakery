<template>
    <div class="container-deco">
    <h3>¡Escoge tus decoraciones!</h3>

    <dl v-for="(deco,index) in $store.getters.getAllDecorations" :key ="deco.nombre">
        <dt>{{deco.nombre}}</dt>
        <dd>
            <button class="button" @click="$store.dispatch('downQuantity',index)">-</button>
            <span id="cantidad">{{$store.getters.getDeco[index]}}</span>
            <button class="button" @click="$store.dispatch('upQuantity',index)">+</button>
        </dd>
    </dl>
    <!-- <dl>
        <dt>
            Paquete de velas
            
        </dt>
        <dd>
                <button class="button">-</button>
                <span id="cantidad-velas">0</span>
                <button class="button">+</button>
        </dd>
        <dt>
            Vela personalizada
        </dt>
        <dd>
            <button class="button">-</button>
            <span id="cantidad-vela">0</span>
            <button class="button">+</button>
        </dd>

        <dt>
            Mensaje personalizado
        </dt>
         <dd>
            <button class="button">-</button>
            <span id="cantidad-mensajes">0</span>
            <button class="button">+</button>
        </dd>
        <dt>
            Globos
        </dt>
        <dd>
            <button class="button">-</button>
            <span id="cantidad-globos">0</span>
            <button class="button">+</button>
        </dd>
    </dl> -->
    </div>
</template>
<script>
export default {
    name:"SelectDecorations"
}
</script>
<style scoped>
    .container-deco{
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    dl{
        list-style-type: none;
    }
    h3{
        
        font-size:1.2rem;
        color: rgb(109,57,46);
        font-family: 'Architects Daughter', cursive;

    }
    .button{
        border-radius: 50%;
        width: 30px;
        height: 30px;
}
</style>