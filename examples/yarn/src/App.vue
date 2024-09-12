<template>
  <v-app>
    <Navbar  :links="links"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import { Navbar } from '../../../src/components/build-entry.js'
const links = [
      { icon: 'home', text: 'Home', route: '/'},
    ]
//import  Navbar from '/src/components/Navbar.vue'
</script>
