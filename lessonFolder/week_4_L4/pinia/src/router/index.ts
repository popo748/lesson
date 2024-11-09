/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

router.beforeEach(async(to, from)=>{
  const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return token && token.length > 0;
  };
  if(to.path.startsWith('/loggedin') && !isAuthenticated()){
    return {path: '/signup'};
  }else if (to.path.startsWith('/signup') && isAuthenticated()){
    return{path:'/loggedin'};
  }
})

router.beforeEach(async(to, from)=>{
  const getUserRole = () => {
    return localStorage.getItem('roles');
  };

  //getItem('roles') is the name you declared to the key
  if(to.path.startsWith('/middleware/admin') && getUserRole()!=='admin'){
    return {path: '/users'};
  }else if(to.path.startsWith('/middleware/premiumuser') && getUserRole()!=='premiumUser') {
    return{path:'/users'};
  }else if(to.path.startsWith('/middleware/regularuser') && getUserRole()!=='regularUser') {
    return{path:'/users'};
  }

  const isPremium = () => {
    const token = localStorage.getItem('premiumToken');
    return token && token.length > 0;
  };
  if(to.path.startsWith('/users/premiumuser') && isPremium()){
    return {path: '/users/premiumuser'};
  }else if(to.path.startsWith('/users/premiumuser') && !isPremium()) {
    return{path:'/users'};
  }
})



// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
