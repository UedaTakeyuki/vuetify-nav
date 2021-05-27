# Out-of-the-box Vuetify navigation menu component, with Toolbar, Navigation Drawers, Menus

Provide Toolbar with Navigation drawer and drop down menu as follows:

<img src="https://github.com/UedaTakeyuki/vuetify-nav/blob/main/img/ss.2021-05-26_22.28.01.png" width="30%"/> <img src="https://github.com/UedaTakeyuki/vuetify-nav/blob/main/img/ss.2021-05-26_22.28.54.png" width="30%"/> <img src="https://github.com/UedaTakeyuki/vuetify-nav/blob/main/img/ss.2021-05-26_22.29.04.png" width="30%"/>

## Install

```bash:
npm install vue-faui-user-fe 

# or

yarn add vue-faui-user-fe
```

## How to use
Just set ``<Navbar/>`` component to your ``App.vue`` file as follows:

```vue:{3,8,10,12-16}
<template>
  <v-app>
    <Navbar titleStr="Demo App" :links="links" />
  </v-app>
</template>

<script>
import {Navbar} from 'vuetify-nav'
export default {
  components: { Navbar},
  data: () => ({
    links: [
      { icon: 'home', text: 'Home', route: '/'},
      { icon: 'face', text: 'Account', route: '/account'},
      { icon: 'shop', text: 'Purchase', route: '/purchase'},
    ]
  }),
};
</script>
```

for more detail refer [wiki](https://github.com/UedaTakeyuki/vuetify-nav/wiki/How-to-use)

## How to setup
refer [wiki](https://github.com/UedaTakeyuki/vuetify-nav/wiki/How-to-setup)

## Demo
Demo site is available at [here](https://vue-faui-user-fe-sample.uedasoft.com/).

## Q&A
Github [issues](https://github.com/UedaTakeyuki/vuetify-nav/issues) are available. Any questions, suggestions, request, and reports are welcome!

## Author
[Dr. Takeyuki UEDA](https://atelierueda.uedasoft.com/)

## History
- 1.0.0  2021.05.25 first version.
