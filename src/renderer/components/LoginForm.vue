<template>
    <div class="panel is-info">
        <div class="panel-heading">
            <h2 class="has-text-centered">Sing In</h2>
        </div>
        <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input" type="text" v-model="user" placeholder="User">
                <span class="icon is-left">
                    <i class="fas fa-user" aria-hidden="true"></i>
                </span>
            </p>
        </div>
        <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input" type="password" @keydown.enter="login()" v-model="password" placeholder="Password">
                <span class="icon is-left">
                    <i class="fas fa-key" aria-hidden="true"></i>
                </span>
            </p>
        </div>
        <div class="panel-block" >
            <button @click="login()" class="button is-link is-outlined is-fullwidth">
            Login
            </button>
        </div>
        <div class="panel-block">
            <button @click="cerrar()" class="button is-danger is-outlined is-fullwidth">
            Exit
            </button>
        </div>
    </div>
</template>

<script>
import * as consulter from '../../main/database/consulter'
const { remote } = require('electron')
export default {
    name: 'login-form',
    data () {
        return {
            user: '',
            password: ''
        }
    },
    methods: {
        async login () {
            this.$emit('loggin')
            try {
                let usuario = await consulter.query(`SELECT * FROM usuario WHERE login = '${this.user}' OR email = '${this.user}'`)
                setTimeout(() => {
                    if (usuario[0] && usuario[0].password === this.password) {
                        this.$emit('loged')
                        this.$router.push('/home')
                    }
                    this.$emit('loggin')
                }, 2000)
            } catch (error) {
                console.log(error)
                setTimeout(() => {
                    this.$emit('loggin')
                }, 2000)
            }
        },
        cerrar () {
            remote.getCurrentWindow().close()
        }
    }
}
</script>

<style scoped>
    .panel{
        width: 400px;
        margin: auto;
        margin-top: 10rem;
        box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 2px rgba(10, 10, 10, 0.02);
    }
    
</style>