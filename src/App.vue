<template>
  <v-app>
    <v-navigation-drawer 
      permanent
      app
      v-if="!['signup', 'as', 'login'].includes($route.name)"
    >
    </v-navigation-drawer>

    <v-app-bar 
      app
      dense
    >
      <v-toolbar-title>AS Dnevnik</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logout" v-if="userIsAuth">Logout</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    userIsAuth () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
