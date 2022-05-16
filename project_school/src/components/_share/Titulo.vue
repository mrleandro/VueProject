<template>
    <div class="title">
        <button v-show="hasBackBtn" class="voltar" @click="voltar()">&#60; </button>
        <h1 style="display: inline;">{{texto}}</h1>
    </div>
</template>

<script>
    export default {
        name: "TituloComponent",
        props:{
            texto: String,
            hasBackBtn: Boolean
        },
        methods:{
            voltar(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .voltar{
        border: 0;
        background-color: transparent;
        cursor: pointer;
        font-size: 30px;
        display: inline;
        margin-right: 10px;
        color: rgb(0, 110, 255);
    }

    .voltar:hover{
        text-shadow: 1px 1px 1px black;
    }

    .title{
        margin-top: 10px;
    }
</style>