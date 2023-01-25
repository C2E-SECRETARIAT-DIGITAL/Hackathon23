require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import { createApp } from 'vue';
import QrCode from '../components/QrCode.vue';


createApp({
    components: {
        QrCode,
    }
}).mount('#app');
