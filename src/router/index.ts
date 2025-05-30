import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LibrosCorporativosView from '../views/LibrosCorporativosView.vue' // Placeholder para React

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
    meta: { title: 'Dashboard' },
  },
  {
    path: '/contratos',
    name: 'Contratos',
    component: () => import('../views/OtraPaginaView.vue'), // Lazy loading
    props: { pageTitle: 'Gestión de Contratos' },
    meta: { title: 'Contratos' },
  },
  {
    path: '/libros-corporativos',
    name: 'LibrosCorporativos',
    component: LibrosCorporativosView,
    meta: { title: 'Libros Corporativos' },
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import('../views/OtraPaginaView.vue'), // Lazy loading
    props: { pageTitle: 'Administración de Clientes' },
    meta: { title: 'Clientes' },
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: () => import('../views/OtraPaginaView.vue'), // Lazy loading
    props: { pageTitle: 'Ajustes del Sistema' },
    meta: { title: 'Configuración' },
  },
  // Puedes añadir una ruta catch-all para 404 si quieres
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView, meta: { title: 'Página no encontrada' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Opcional: Cambiar el título del documento con cada navegación
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} - LegalHunt` : 'LegalHunt'
})

export default router
