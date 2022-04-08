<template>
    <h3>Inventario de sabores</h3>
    <table>
        <tr>
            <th>Sabor</th>
            <th>Precio</th>
            <th>Cantidad</th>
        </tr>
        <tr v-for="flavor in $store.getters.getAllFlavors" :key="flavor.nombre">
            <td>{{flavor.nombre}}</td>
            <td>${{flavor.precio.toFixed(2)}}</td>
            <td>{{flavor.cantidad}}</td>
        </tr>
    </table>
</template>
<script>
export default {
    name:"FlavorQuantity"
}
</script>