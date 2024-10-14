import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CareerView from '../views/CareerView.vue';
import AdventureView from '../views/AdventureView.vue';
import ProjectsView from '../views/ProjectsView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/career', name: 'Career', component: CareerView },
  { path: '/adventure', name: 'Adventure', component: AdventureView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
