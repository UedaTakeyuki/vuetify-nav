<template>
  <v-app>
    <Navbar titleStr="Demo App" :links="links"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {Navbar} from 'vuetify-nav'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    links: [
      { icon: 'home', text: 'Home', route: '/'},
      { icon: 'info', text: 'About', route: '/about'},
    ]
  }),
  mounted(){
    console.log("window",window)
  }
};
</script>