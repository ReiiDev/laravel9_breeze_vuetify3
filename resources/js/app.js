import './bootstrap';

import { createApp } from 'vue';
import App from './components/App.vue';
import router from './plugins/router.js';

import Login from './auth/Login.vue';

import axiosPlugin from './plugins/axios';
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})

const app = createApp({});
app.component('Login', Login);
app.component('App', App);

app.use(pinia);
app.use(router);
app.use(axiosPlugin);
app.use(vuetify);

app.mount('#app');