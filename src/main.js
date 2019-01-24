// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import firebase from 'firebase'

import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Initialize Firebase

const config = {
  apiKey: 'AIzaSyAHmHFt5iyCIl59kVlgF2qW6pfe3FlT6cE',
  authDomain: 'forum-vue.firebaseapp.com',
  databaseURL: 'https://forum-vue.firebaseio.com',
  projectId: 'forum-vue',
  storageBucket: 'forum-vue.appspot.com',
  messagingSenderId: '335656754127'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
