<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div v-show="isLoggedIn">
      <v-app-bar :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />
        <v-spacer />
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      drawer: false,

      items: [
          {
              icon: "mdi-apps",
              title: "Welcome",
              to: "/",
          },
          {
              icon: "mdi-chart-bubble",
              title: "Inspire",
              to: "/inspire",
          },
          {
            title: 'Logout',
            to: '/auth/logout'
          }
      ],
    }
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters['auth/getLoggedIn']
    }
  }
}
</script>

<style>

</style>
