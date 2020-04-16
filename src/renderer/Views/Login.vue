<template>
    <div v-if="isLoged == false" class="login">
        <div class="navbar">
            <img src="../assets/logoaftim.png" alt="">
        </div>
        <login-form v-show="isLogin == false" @loged="isLoged = true" @loggin="isLogin = !isLogin" ></login-form>
        <loader v-if="isLogin"/>
        <footer class="footer">
            <div class="content has-text-centered has-text-white">
                <button class="button is-primary"><i class="fas fa-wrench"></i>&nbsp; Settings</button>
                <p><strong class="has-text-white">Copyright Somos Sistemas C.A</strong><br>
                    Version 1.0.0
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
import loginForm from '../components/LoginForm'
import loader from '../components/Loader'
export default {
    name: 'login',
    data () {
        return {
            isLogin: false,
            isLoged: false
        }
    },
    components: {
        loginForm,
        loader
    }
}
</script>

<style scoped>
    .navbar{
        padding: 10px;
        text-align: center;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 32%, rgba(6,69,161,1) 75%, rgba(0,212,255,1) 100%);
    }
    img{
        max-height: 50px;
    }
    footer{
        position: fixed;
        height: 50px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        margin-bottom: 0px;

        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 32%, rgba(6,69,161,1) 75%, rgba(0,212,255,1) 100%);
    }
</style>