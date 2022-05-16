import { createWebHistory, createRouter } from "vue-router";
import Alunos from "./components/Aluno/Alunos.vue";
import AlunoDetalhe from "./components/Aluno/AlunoDetalhe.vue";
import Professores from "./components/Professor/Professor.vue";
import Sobre from "./components/Sobre/Sobre.vue";

const routes = [
    {
        path: "/professores",
        name: "Professores",
        component: Professores,
    },
    {
        path: "/alunos/:prof_id",
        name: "AlunosFromProf",
        component: Alunos,
    },
    {
        path: "/alunos",
        name: "Alunos",
        component: Alunos,
    },
    {
        path: "/alunoDetalhe/:id",
        name: "AlunoDetalhe",
        component: AlunoDetalhe,
    },
    {
        path: "/sobre",
        name: "Sobre",
        component: Sobre,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;