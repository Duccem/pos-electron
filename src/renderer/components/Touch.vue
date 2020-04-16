<template>
    <div class="touch container">
        <h4 style="border-bottom:1px solid #3273dc" class="is-size-4 has-text-centered">Conceptos</h4>
        <br>
        <div class="grupos columns">
            <button class="column is-2" v-for="concepto in conceptos" :key="concepto.img">
                <img src="../assets/default.png" alt="">
            </button>
        </div>
        <div class="subgrupos columns">
            <button class="column is-2" v-for="concepto in conceptos" :key="concepto.img">
                <img src="../assets/default.png" alt="">
            </button>
        </div>
        <button v-for="concepto in conceptos" :key="concepto.img">
            <img src="../assets/default.png" alt="">
        </button>
    </div>
</template>

<script>
export default {
    name: 'touch',
    data () {
        return {
            conceptos: [
                {
                    img: '1'
                },
                {
                    img: '2'
                },
                {
                    img: '3'
                },
                {
                    img: '4'
                },
                {
                    img: '5'
                },
                {
                    img: '6'
                },
                {
                    img: '7'
                },
                {
                    img: '8'
                },
                {
                    img: '9'
                },
                {
                    img: '10'
                },
                {
                    img: '11'
                },
                {
                    img: '12'
                },
                {
                    img: '13'
                },
                {
                    img: '14'
                },
                {
                    img: '15'
                },
                {
                    img: '16'
                },
                {
                    img: '17'
                },
                {
                    img: '18'
                }
            ]
        }
    }
}
</script>

<style scoped>
img{
    height: 50px;
    width: 50px;
}
button{
    margin: 5px;
    cursor: pointer;
}
.touch{
    width: 25%;
    height: 500px;
    overflow-y: scroll;
    padding: 10px;
    text-align: center;
}

.touch::-webkit-scrollbar{
    display: none;
}

.grupos::-webkit-scrollbar{
    display: none;
}
.subgrupos::-webkit-scrollbar{
    display: none;
}
.grupos{
    margin-right: 10px;
    margin-left: 10px;
    overflow-x: scroll;
    border-bottom: 1px solid #3273dc;
}
.subgrupos{
    margin-right: 10px;
    margin-left: 10px;
    overflow-x: scroll;
    border-bottom: 1px solid #3273dc;
}
</style>