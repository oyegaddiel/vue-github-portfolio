import { createRouter, createWebHistory } from 'vue-router';
import RepositoryList from './components/RepositoryList.vue';
import NotFound from './components/NotFound.vue';
import SingleRepoPage from './components/SingleRepoPage.vue';
import TestErrorPage from './components/TestErrorPage.vue';


const routes = [
  { path: '/', component: RepositoryList },
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/', component: SingleRepoPage },
  { path: '/', component: TestErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
