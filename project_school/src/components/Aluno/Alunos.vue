<template>
    <div>
        <Titulo v-if="professor.id" hasBackBtn="true" :texto="`Alunos do professor ${professor.nome}`"/>
        <Titulo v-else texto="Todos os Alunos"/>

        <div v-if="professor.id" class="inputAndBtn">
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
                    <router-link :to="`/alunoDetalhe/${aluno.id}`" custom v-slot="{ href, navigate }">
                        <td :href="href" @click="navigate" style="cursor: pointer;">{{aluno.nome}} {{aluno.sobrenome}}</td>
                    </router-link>
                    <td><button class="btn btn_danger" @click="remover(aluno)">Remover</button></td>
                </tr>
            </tbody>
            <tfoot v-else>Nenhum aluno cadastrado</tfoot>
        </table>

    </div>
</template>

<script>
    import Titulo from '../_share/Titulo.vue';
    import axios from 'axios';

    export default {
        name: "AlunosComponent",
        components:{
            Titulo,
        },
        data(){
            return {
                titulo: "Aluno",
                professor: {},
                nome: "",
                alunos: []
            }
        },
        created(){
            let profId = this.$route.params.prof_id

            if(profId){
                axios.get(`http://localhost:3000/professores/${profId}`)
                .then(result => this.professor = result.data);

                axios.get(`http://localhost:3000/alunos?idProfessor=${profId}`)
                .then(result => this.alunos = result.data);
            }
            else
                axios.get('http://localhost:3000/alunos')
                .then(result => this.alunos = result.data);
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
                let aluno = {nome: this.nome, sobrenome: "", idProfessor: this.professor.id};

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
        width: 50%;
    }

    .btn_input{
        border: 0px;
        padding: 20px;
        font-size: 1.3em;
        color: white;
        background-color: rgb(116, 115, 115);
        float: right;
    }

    .btn_input:hover{
        border: 0px;
        margin: 0px;
    }

    .inputAndBtn{
        margin-top: 10px;
    }
</style>
