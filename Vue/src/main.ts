import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faRss, faLink } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBars);
library.add(faRss);
library.add(faLink);
library.add(faApple);

createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')