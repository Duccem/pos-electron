<template>
    <div class="formulario container panel">
        <form action="">
            <h4 style="border-bottom:1px solid #3273dc" class="is-size-4 has-text-centered">Datos del cliente</h4>
            <br>
            <div class="field">
                <label for="cedula">Cedula</label>
                <div class="field-body">
                    <div class="field">
                        <input id="cedula" class="input is-info" type="text">
                    </div>
                    <button class="button is-primary" @click.prevent><i class="fa fa-search"></i></button>
                </div>
            </div>
            <div class="field">
                <label for="nombre">Nombre</label>
                <div class="control">
                    <input type="text" name="" id="nombre" class="input is-info">
                </div>
            </div>
            <div class="field">
                <label for="apellido">Apellido</label>
                <div class="control">
                    <input type="text" name="" id="apellido" class="input is-info">
                </div>
            </div>
            <div class="field">
                <label for="telefono">Telefono</label>
                <div class="control">
                    <input type="text" name="" id="telefono" class="input is-info">
                </div>
            </div>
            <div class="field">
                <label for="observacion">Observacion</label>
                <div class="control">
                    <textarea class="textarea is-info" name="" id="observacion" cols="30" rows="3"></textarea>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'cliente'
}
</script>

<style scoped>
    .formulario{
        padding: 10px 20px;
        max-width: 400px;
        margin-bottom: 0 !important;
    }
    textarea {
        resize: none;
    }
</style>