<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
const menuItems = ref([
  {link: '/', text: 'Home'},
  {link: '/about', text: 'About'},
  {link: '/services', text: 'Services'},
  {link: '/contacts', text: 'Contacts'}
]);
</script>

<template>
  <div>
    <under-development/>
    <v-app-bar app color="primary" class="fixed-menu">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>

      <v-toolbar-title class="toolbar-title">
        <NuxtImg
            loading="lazy"
            format="webp"
            src="/images/logo.jpg"
            width="30"
            height="30"
            alt="logo"
            class="img-rounded"
        />&nbsp;
        <strong>Malder validator</strong>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-for="(item, i) in menuItems" :key="i" variant="outlined" class="d-none d-md-flex mr-4">
        <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="i" @click="drawer = false">
          <v-list-item-title class="mobile-menu-item">
            <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
//TODO delete after development
.fixed-menu {
  top: 42px !important;
}
.v-navigation-drawer--mobile {
  top: 108px !important;
}
</style>