<template>
    <div>
        <Titulo texto="Alunos"/>

        <div>
            <input type="text" placeholder="Nome do Aluno" v-model="nome" @keyup.enter="addAluno()">
            <button class="btn btn_input" @click="addAluno()">Adicionar</button>
        </div>
        
        <table>
            <thead>
                <th>Mat.</th>
                <th>Nome</th>
                <th>Opções</th>
            </thead>
            <tbody v-if="alunos.length">
                <tr v-for="(aluno, index) in alunos" :key="index">
                    <td>{{aluno.id}}</td>
                    <td>{{aluno.nome}}</td>
                    <td><button class="btn btn_danger" @click="remover(aluno)">Remover</button></td>
                </tr>
            </tbody>
            <tfoot v-else>Nenhum aluno cadastrado</tfoot>
        </table>
    </div>
</template>

<script>
    import Titulo from '../_share/Titulo.vue';
    import axios from 'axios'
    export default {
        name: "AlunosComponent",
        components:{
            Titulo
        },
        data(){
            return {
                titulo: "Aluno",
                nome: "",
                alunos: []
            }
        },
        created(){
            axios.get('http://localhost:3000/alunos')
            .then(alunos => this.alunos = alunos.data);
        },
        props: {

        },
        methods: {
            remover(aluno) {
                axios.delete(`http://localhost:3000/alunos/${aluno.id}`).then(()=>{
                    let indexof = this.alunos.indexOf(aluno);
                    this.alunos.splice(indexof, 1);
                });
            },
            addAluno(){
                let aluno = {nome: this.nome, sobrenome: ""};

                axios.post('http://localhost:3000/alunos', aluno)
                .then(result => {
                    this.alunos.push(result.data);
                    this.nome = "";
                });
            }
        },
    }
</script>

<style scoped>
    input{
        border: 0;
        padding: 20px;
        font-size: 1.3em;
        color: #687f7f;
        display: inline;
    }

    .btn_input{
        border: 0px;
        padding: 20px;
        font-size: 1.3em;
        color: white;
        display: inline;
        background-color: rgb(116, 115, 115);
    }

    .btn_input:hover{
        border: 0px;
        margin: 0px;
    }

</style>
