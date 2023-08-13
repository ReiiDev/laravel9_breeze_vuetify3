<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const routes = router?.options.routes;

  const logout = () => {
    axios.post("logout").catch(() => {
      window.location.href = "/login";
    });
  };
  const drawer = ref(false);
</script>

<template>
  <v-layout>
    <v-app-bar clipped-left color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Photos</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical">
          <v-menu activator="parent">
            <v-list>
              <v-list-item>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title @click="logout()">Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer"  clipped temporary>
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in routes"
          :key="i"
          :value="item.path"
          active-color="primary"
          :to="item.path"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main> 
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>