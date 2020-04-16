<template>
  <div class="navbar" id="barra" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="#" class="navbar-item">
        <img src="../assets/logoaftim.png" width="112" height="28">
       </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-item">
        <input id="text-buscar" class="input is-rounded" type="text" placeholder="Buscar producto">
        <button class="button is-rounded">
          <i class="fa fa-search m-l-1"></i>
        </button>
        <h1 class="has-text-white is-size-3">Somos Sistemas C.A</h1> &nbsp;&nbsp;&nbsp;
        
      </div>
    </div>
    <div class="navbar-end">
      <h5 class="has-text-white is-size-5 has-text-right">Tasa: 100,000.00</h5>
      <div class="navbar-item">
        <button class="button is-primary" @click="maximizar()"><i class="fas fa-wrench"></i></button>
        <button class="button is-primary" @click="minimizar()"><i class="fas fa-window-minimize"></i></button>
        <button class="button is-danger" @click="cerrar()"><i class="fas fa-window-close"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import * as consulter from '../../main/database/consulter'
const { remote } = require('electron')
export default {
  name: 'barra',
  data () {
    return {
      conceptos: []
    }
  },
  async mounted () {
    this.conceptos = await consulter.get('adm_conceptos', {})
    console.log(this.conceptos)
  },
  methods: {
    cerrar () {
      remote.getCurrentWindow().close()
    },
    minimizar () {
      remote.getCurrentWindow().minimize()
    }
  }
}
</script>

<style scoped>
  #text-buscar{
    margin-right: 5px;
    width: 400px;
  }
  #barra{
    padding: 10px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 32%, rgba(6,69,161,1) 75%, rgba(0,212,255,1) 100%);
  }
  button{
    margin-right: 5px;
  }
</style>