import { createRouter, createWebHistory } from 'vue-router'
import InicioVue from '@/views/Inicio.vue'
import PerfilVue from '@/views/Perfil.vue'
import ConfiguracionVue from '@/views/Configuracion.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioVue
    },
    {
      path: '/perfil/:nombreUsuario',
      name: 'perfil',
      component: PerfilVue,
      props:true
    },
    {
      path: '/configuracion',
      name: 'configuracion',
      component: ConfiguracionVue
    }
   
  ]
})

export default router
