import { boot } from 'quasar/wrappers'
import anime from 'animejs/lib/anime.es.js';

export default boot(({ app }) => {
  
    // Create anime js global variable
    app.config.globalProperties.$anime = anime
    
})
