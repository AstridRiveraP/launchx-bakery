<template>
    <h3>Inventario de decoraciones</h3>
    <table>
        <tr>
            <th>Decoración</th>
            <th>Precio</th>
            <th>Cantidad</th>
        </tr>
        <tr v-for="deco in $store.getters.getAllDecorations" :key="deco.nombre">
            <td>{{deco.nombre}}</td>
            <td>${{deco.precio.toFixed(2)}}</td>
            <td>{{deco.cantidad}}</td>
        </tr>
    </table>
</template>
<script>
export default {
    name:"DecoQuantity"
}
</script>