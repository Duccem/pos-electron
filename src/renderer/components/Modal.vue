<template>
  <div >
    <div class="modal is-active" @keydown.esc="$emit('close')" tabindex="0">
        <div class="modal-background"></div>
        <div class="modal-card" @keydown.esc="$emit('close')" tabindex="0">
            <header class="modal-card-head">
                <p class="modal-card-title"><slot name="title"></slot></p>
                <button class="delete" aria-label="close" @click="$emit('close')"></button>
            </header>
            <section class="modal-card-body">
                <slot name="body">
                    <h5>Facturas</h5>
                </slot>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button" @click="$emit('close')">Cancel</button>
            </footer>
        </div>
    </div>
   </div>
</template>

<script>
export default {
    name: 'modal'
}
</script>

<style scoped>
    .modal-card{
        width: 1000px;
        height: 600px;
    }
</style>