<template>
    <div>
        <Titulo texto="Professores"/>

        <table>
            <thead>
                <th>Mat.</th>
                <th>Nome</th>
                <th>Alunos</th>
            </thead>
            <tbody v-if="professores.length">
                <tr v-for="(professor, index) in professores" :key="index">
                    <td>{{professor.id}}</td>
                    <router-link :to="`/alunos/${professor.id}`" custom v-slot="{ href, navigate }">
                        <td :href="href" @click="navigate" style="cursor: pointer;">{{professor.nome}}</td>
                    </router-link>
                    <td>{{professor.qtdAlunos}}</td>
                </tr>
            </tbody>
            <tfoot v-else>Nenhum professor cadastrado</tfoot>
        </table>
    </div>
</template>

<script>
    import Titulo from '../_share/Titulo.vue';
    import axios from 'axios'

    export default {
        name: "ProfessorComponent",
        components:{
            Titulo
        },
        data(){
            return {
                professores: []
            }
        },
         created(){
            axios.get('http://localhost:3000/professores')
            .then(result => {
                this.professores = result.data

                this.professores.forEach((professor) => {
                   axios.get(`http://localhost:3000/alunos?idProfessor=${professor.id}`)
                   .then(result => professor.qtdAlunos = result.data.length);
                });
            });
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>