<template>
  <div class="columns is-vcentered" id="herramientas">
      <div class="column">
            <div class="columns">
                <button class="button is-warning tool" @click="$emit('abrir')"><i class="fas fa-file is-size-4"></i>&nbsp;Buscar nota</button>
                <button class="button is-warning tool"><i class="fas fa-file-invoice is-size-4"></i>&nbsp;Documento</button>
                <button class="button is-warning tool"><i class="fas fa-paste is-size-4"></i>&nbsp;Devoluciones</button>
                <button class="button is-warning tool"><i class="fas fa-concierge-bell is-size-4"></i>&nbsp;Mesas</button>
                <button class="button is-warning" style="margin:5px;"><i class="fas fa-undo is-size-4"></i></button>
            </div>
            <div class="columns">
                <button class="button is-warning tool"><i class="fas fa-chart-pie is-size-4"></i>&nbsp;Cuadrar caja</button>
                <button class="button is-warning tool"><i class="fas fa-book is-size-4"></i>&nbsp;Presupuesto</button>
                <button class="button is-warning tool"><i class="fas fa-balance-scale is-size-4"></i>&nbsp;Dividir cuenta</button>
                <button class="button is-warning tool"><i class="fas fa-piggy-bank is-size-4"></i>&nbsp;Precuenta</button>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'herramientas'
}
</script>

<style scoped>
    #herramientas{
        margin-top: 10px;
        width: 60%;
        height: 100%;
        min-height: 145px;
        padding-left:25px;
    }
    .tool{
        width: 140px;
        margin:5px;
    }
</style>