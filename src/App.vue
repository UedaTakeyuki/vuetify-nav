<template>
  <v-app>
    <Navbar titleStr="毛呂山" :links="links">
<!--      <template v-slot:title>
        <v-toolbar-title class="grey--text">
          <span class="font-weight-light">ケロヨン</span>
          <span>太郎</span>
        </v-toolbar-title> 
      </template> -->
<!--
      <template v-slot:menu>
        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text>
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </template>-->
    </Navbar>
    <Login/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import {AccountRoutes} from 'vue-faui-user-fe/'

//import "firebaseui/dist/firebaseui.css";
//import firebase from "firebase/app";

//import { Login } from 'vue-faui-user-fe/'
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
import {AccountRoutes, PurchaseRoutes} from 'vue-faui-user-fe/'

export default {
  name: 'App',
  components: { Navbar, Login },
  data: () => ({
    links: [
      { icon: 'home', text: 'Home', route: '/'},
      AccountRoutes.menuItem,
      PurchaseRoutes.menuItem,
    ]
//    firebase: firebase,
    //
  }),
  created(){
    AccountRoutes.init()
  }
};
</script>
