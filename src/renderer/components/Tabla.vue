<template>
    <div class="tabla panel">
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th> Bs </th>
                    <th> $ </th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="concepto in conceptos" :key="concepto.codigo">
                    <td>{{concepto.nombre}}</td>
                    <td>{{concepto.precio}}</td>
                    <td>{{concepto.precio_dolar}}</td>
                    <td>{{concepto.cantidad}}</td>
                    <td>{{concepto.total}}</td>
                    <td><button class="button is-danger">x</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'tabla',
  data () {
    return {
        conceptos: [
            {
                nombre: 'Pan canilla',
                descripcion: 'Pan salado tipo baguette',
                codigo: '001',
                precio: 25000,
                precio_dolar: 0.25,
                cantidad: 10,
                descuento: 0,
                total: 250000
            },
            {
                nombre: 'Coca-cola 2lts',
                descripcion: 'Gaseosa de cola, 2 Litros',
                codigo: '020',
                precio: 180000,
                precio_dolar: 1.8,
                cantidad: 1,
                descuento: 0,
                total: 180000
            },
            {
                nombre: 'Pan campesino',
                descripcion: 'Pan salado tipo campesino',
                codigo: '002',
                precio: 30000,
                precio_dolar: 0.30,
                cantidad: 3,
                descuento: 0,
                total: 90000
            },
            {
                nombre: 'Queso guayanes',
                descripcion: 'Queso tipo Guayanes por kilo',
                codigo: '187',
                precio: 267000,
                precio_dolar: 2.67,
                cantidad: 0.431,
                descuento: 0,
                total: 115077
            },
            {
                nombre: 'Pan de guayaba',
                descripcion: 'Pan dulce relleno de mermelada de guayaba',
                codigo: '005',
                precio: 56000,
                precio_dolar: 0.56,
                cantidad: 2,
                descuento: 0,
                total: 112000
            },
            {
                nombre: 'Harina PAN',
                descripcion: 'Harina de maiz precocida',
                codigo: '010',
                precio: 104000,
                precio_dolar: 1.04,
                cantidad: 3,
                descuento: 0,
                total: 312000
            },
            {
                nombre: 'Malta regional',
                descripcion: 'Gaseosa de malta 1/4 lts',
                codigo: '147',
                precio: 63000,
                precio_dolar: 0.63,
                cantidad: 1,
                descuento: 0,
                total: 63000
            },
            {
                nombre: 'Pan de guayaba',
                descripcion: 'Pan dulce relleno de mermelada de guayaba',
                codigo: '023',
                precio: 56000,
                precio_dolar: 0.56,
                cantidad: 2,
                descuento: 0,
                total: 112000
            }
        ]
    }
  }
}
</script>

<style scoped>
    .table{
        width: 100%;
    }
    .tabla{
        padding: 0;
        padding-top: 9px;
        padding-left: 10px;
        height: 500px;
        overflow-y: scroll;
        margin-bottom: 0 !important;
    }
    .tabla::-webkit-scrollbar{
        display: none;
    }
</style>