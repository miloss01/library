import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.config.productionTip = false

let app = null

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      beforeCreate () {
        if (user)
          this.$store.dispatch('autoLogin', user)
      },
      render: h => h(App)
    }).$mount('#app')
  }
})
