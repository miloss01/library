import router from '@/router'
import firebase from 'firebase'
import { db } from '@/firebase'

export default {
  state: {
    currentUser: null
  },
  getters: {
    user (state) {
      return state.currentUser
    }
  },
  mutations: {
    setUser (state, payload) {
      state.currentUser = payload
    }
  },
  actions: {
    signup ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        const dbUser = {
          id: user.user.uid,
          ...payload
        }
        const newUser = {
          id: user.user.uid
        }
        db.collection('users').doc(dbUser.id).set(dbUser)
        .then(() => {
          commit('setUser', newUser)
          router.push({ name: 'home' })
        })
      })
    },
    login ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        const newUser = {
          id: user.user.uid
        }
        commit('setUser', newUser)
        router.push({ name: 'home' })
      })
    },
    autoLogin ({commit}, payload) {
      const newUser = {
        id: payload.uid
      }
      commit('setUser', newUser)
    },
    logout ({commit}) {
      firebase.auth().signOut()
      .then(() => {
        commit('setUser', null)
        router.push({ name: 'login' })
      })
    }
  }
}