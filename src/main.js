import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueFire);
firebase.initializeApp({
  projectId: 'getpakt-633fa',
  databaseURL: 'https://getpakt-633fa.firebaseio.com',
});
// eslint-disable-next-line
export const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

new Vue({
  render: h => h(App),
}).$mount('#app');
