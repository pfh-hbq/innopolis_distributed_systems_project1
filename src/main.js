import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'


// enter ID and URL here
firebase.initializeApp({
	projectId: 'ID',
	databaseURL: 'URL'
})

export const db = firebase.firestore()


import titleMixin from './store/titleMixin'

Vue.mixin(titleMixin)


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
