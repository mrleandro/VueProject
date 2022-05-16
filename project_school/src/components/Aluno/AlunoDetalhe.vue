<template>
    <div>
        <div class="title">
            <Titulo :texto="`Aluno: ${aluno.nome}`" hasBackBtn="true"/>

            <button v-if="!edit" class="btn btn_success btn_absolute" @click="EnableOrDisableEdit()">Editar</button>
            <button v-else class="btn btn_danger btn_absolute" @click="EnableOrDisableEdit()">Cancelar</button>
        </div>

        <table>
            <tbody>
                <tr>
                    <td>Matricula:</td>
                    <td>
                        <label> {{aluno.id}}</label>
                    </td>
                </tr>
                <tr>
                    <td>Nome:</td>
                    <td>
                        <label v-if="!edit">{{aluno.nome}}</label>
                        <input v-else v-model="aluno.nome" type="text"> 
                    </td>
                </tr>
                <tr>
                    <td>Sobrenome:</td>
                    <td>
                        <label v-if="!edit">{{aluno.sobrenome}}</label>
                        <input v-else v-model="aluno.sobrenome" type="text"> 
                    </td>
                </tr>
                <tr>
                    <td>Data de Nascimento:</td>
                    <td>
                        <label v-if="!edit">{{aluno.dataNasc}}</label>
                        <input v-else v-model="aluno.dataNasc" type="text"> 
                    </td>
                </tr>
                <tr>
                    <td>Professor:</td>
                    <td style="height: 40px;">
                        <label v-if="!edit">{{professor.nome}}</label>
                        <select v-else v-model="professor">
                            <option v-for="(professor, index) in professores" :key="index" :value="professor">
                                {{professor.nome}}
                            </option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>

        <button v-show="edit" class="btn btn_success" style="margin-top: 10px" @click="salvar()">Salvar</button>

    </div>
</template>

<script>
    import Titulo from '../_share/Titulo.vue';
    import axios from 'axios';

    export default {
        components: {
            Titulo
        },
        data(){
            return{
                aluno: {},
                professor: {},
                professores: [],
                edit: false
            }
        },
        created(){
            let id = this.$route.params.id;

            axios.get(`http://localhost:3000/alunos/${id}`)
                .then(resultAlunos => {
                    this.aluno = resultAlunos.data;

                    axios.get(`http://localhost:3000/professores`)
                        .then(resultProfessores => {
                            this.professores = resultProfessores.data;

                            this.professor = this.professores.filter(x => x.id == this.aluno.idProfessor)[0];
                        });
                });
        },
        methods:{
            EnableOrDisableEdit(){
                this.edit = !this.edit;
            },
            salvar(){
                this.aluno.idProfessor = this.professor.id;

                axios.put(`http://localhost:3000/alunos/${this.aluno.id}`, this.aluno);
                this.edit = false;
            }
        }
    }
</script>

<style scoped>
    table tr td:nth-child(1){
        width: 20%;
        text-align: right;
        background-color: rgb(125, 217, 245);
        font-weight: bold;
    }

    table tr td:nth-child(2){
        height: 35px;
    }

    table td{
        text-align: left;
    }

    .title{
        position: relative;
    }

    .btn{
        border: 0px;
        font-size: 1.3em;
        float: right;
    }

    .btn_absolute{
        position: absolute;
        top: 0;
        right: 1px;
    }

    .btn:hover{
        border: 0px;
        margin: 0px;
    }

    input, select{
        margin: 0;
        padding: 5px 10px;
        font-size: 0.9em;
        border: 1px solid silver;
        border-radius: 5px;
        font-family: 'Montserrat';
        width: 95%;
        background-color: rgb(245, 245, 245);
    }
    select {
        height: 38px;
        width: 100%;
    }
</style>