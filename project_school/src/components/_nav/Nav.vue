<template>
    <div class="topBar">
        <nav class="marginPrincipal">
            <router-link to="/professores">Professor</router-link>
            <router-link to="/alunos">Aluno</router-link>
            <router-link to="/sobre">Sobre</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavComponet"

    }
</script>

<style scoped>
    .topBar{
        background-color: rgb(230, 230, 230);
    }

    nav{
        padding: 20px 20px 20px 0px;
    }

    nav a{
        padding: 10px;
        text-decoration: none;
        background-color: white;
        border-radius: 3px;
        color: rgb(0, 110, 255);
        font-weight: bold;
        margin-right: 15px;
    }

    nav .router-link-active{
        background-color: rgb(160, 160, 160);
        color: white;
    }
</style>