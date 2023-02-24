<template>
  <v-app>
    <v-main>
      <Navbar/>
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
    //
  }),
};
</script>