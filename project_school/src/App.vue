<template>
    <div>
        <Nav/>
        <div class="marginPrincipal">
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
</template>

<script>
    import Nav from './components/_nav/Nav.vue';

    export default {
        components: {
            Nav
        },
    };
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

    #app{
        width: 100%;
    }

    body{
        background-color: #eee;
        font-family: "Montserrat", sans-serif;
        display: grid;
        justify-items: center;
    }
    body, html {
        margin: 0;
        height: 100%;
    }

    table {
        margin: 0px;
        margin-top: 10px;
        padding: 0px;
        list-style-type: none;
        width: 100%;
    }
    table tr td{
        padding: 20px;
        font-size: 1.3em;
        background-color: #e0edf4;
        margin-bottom: 2px;
        color: #3e5252;
        text-align: center;
    }
    table thead th{
        background-color: rgb(184, 208, 216) !important;
        font-size: 1.2em;
        padding: 10px 0px;
        text-align: center !important;
    }

    .marginPrincipal{
        width: 50%;
        margin: auto;
    }

    .btn_danger{
        background-color: #fa4430;
        color: white;
    }

    .btn_success{
        background-color: #00a537;
        color: white;
    }

    .btn{
        padding: 10px 20px;
        cursor: pointer;
        border: 1px solid black;
        font-weight: bold;
        border-radius: 5px;
        border-bottom: 3px solid black;
    }

    .btn:hover{
        text-shadow: 1px 1px 1px black;
        margin-top: 3px;;
        border-bottom: 1px solid black;
    }

</style>
