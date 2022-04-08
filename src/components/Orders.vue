<template>
    <h3>Inventario de sabores</h3>
    <div v-for="pedido in $store.getters.getAllPedidos" :key="pedido.nombre">
        <b>Capas:</b>
        {{pedido.capas}}
        <br>
        <b>Sabores:</b>
        {{pedido.sabores}}
        <br>
        <b>Total:</b>
        {{pedido.total}}
        <h4>Datos del cliente</h4>
        <p><b>Nombre:</b> {{pedido.cliente.nombre}}</p>
        <p><b>Tel:</b> {{pedido.cliente.tel}}</p>
        <p><b>E-mail:</b> {{pedido.cliente.email}}</p>
    </div>
   
</template>
<script>
export default {
    name:"Orders"
}
</script>