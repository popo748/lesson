/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.directive('color-on-hover',{
    mounted(el, binding){
        el.style.transition = 'color 0.3s';

        el.addEventListener('mouseover',()=>{
            el.style.color = binding.value || 'yellow';

        });
        el.addEventListener('mouseout',()=>{
            el.style.color='';
        });
        
    },
});


let currentHighlightElement: any = null;
app.directive('highlight-on-click',{
    mounted(el){
        el.addEventListener('click',()=>{
            if(currentHighlightElement){
                currentHighlightElement.classList.remove('highlighted');
            }
            el.classList.toggle('highlighted');
            currentHighlightElement = el.classList.contains('highlighted') ? el:null;
        });
        
        
    },
});
app.directive('focus', {
    mounted(el) {
      el.focus(); // When the element is mounted, it will receive focus
    }
  });
registerPlugins(app)

app.mount('#app')
