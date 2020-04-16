<template>
  <div>
    <barra/>
    <main>
      <div class="columns" id="superior">
        <tabla/>
        <touch/>
        <cliente/>
      </div>
      <div class="columns" id="inferior">
        <herramientas @abrir="showModal = true"/>
        <totales/>
      </div>
    </main>
    <modal v-if="showModal" @close="showModal = false">
      <template slot="title">Prueba de slot</template>
      
    </modal>
  </div>
</template>

<script>
import barra from '../components/Barra'
import tabla from '../components/Tabla'
import cliente from '../components/Cliente'
import herramientas from '../components/Herramientas'
import touch from '../components/Touch'
import totales from '../components/Totales'
import modal from '../components/Modal'
const { remote } = require('electron')
export default {
  name: 'home',
  data () {
    return {
      showModal: false
    }
  },
  components: {
    tabla,
    cliente,
    herramientas,
    touch,
    totales,
    modal,
    barra
  },
  beforeMount () {
    const { height, width } = remote.screen.getPrimaryDisplay().workAreaSize
    remote.getCurrentWindow().setPosition(0, 0)
    remote.getCurrentWindow().setSize(width, height)
  }
}
</script>

<style>
  #superior{
    padding: 5px;
  }
  #inferior{
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 32%, rgba(6,69,161,1) 75%, rgba(0,212,255,1) 100%);
  }

</style>
