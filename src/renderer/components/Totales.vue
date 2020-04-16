<template>
    <div class="totales columns has-text-white">
        <div class="column botones">
            <button class="button is-primary tool"><i class="fas fa-print is-size-4"></i>&nbsp;Facturar</button>
            <button class="button is-primary tool"><i class="fas fa-fax is-size-4"></i>&nbsp;Nota</button>
        </div>
        <div class="column  has-text-right">
            <h2 class="is-size-3">Total Bs 1,234,077</h2>
            <h2 class="is-size-4">Total $ 12,340.77</h2>
            <h3 class="is-size-4">Descuento 0%</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'totales'
}
</script>

<style scoped>
.totales{
    padding: 10px 20px;
    max-width: 600px;
}
.botones {
    margin-top: 25px;
}
button{
    margin-bottom: 10px;
    min-width: 200px;
}
</style>