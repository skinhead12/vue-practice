<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Projects</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey--text">
        <span>Log Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-spacer></v-spacer>

    <v-navigation-drawer app v-model="drawer" class="primary">
  <v-list>
    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
      <v-list-item-action>
        <v-icon class="white--text">{{ link.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      clipped: false,
      links: [
        {
          icon: 'dashboard',
          text: "Dashboard",
          route: "/",
        },
        {
          icon: 'folder',
          text: "My project",
          route: "/projects",
        },
        {
          icon: 'person',
          text: "Team",
          route: "/team",
        },
      ],
    };
  },
};
</script>

<style>
</style>