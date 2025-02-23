<script setup lang="ts">
const contacts = [
  {
    icon: 'fab fa-github',
    link: 'https://github.com/marlon-89'
  },
  {
    icon: 'fab fa-twitter',
    link: 'https://x.com/lashko_yaroslav'
  },
  {
    icon: 'fab fa-telegram',
    link: 'https://t.me/yaroslav_lashko'
  },
  {
    icon: 'fab fa-discord',
    link: 'https://discord.com/users/404301815673257995'
  }
]
</script>

<template>
  <v-footer class="text-center d-flex flex-column">
    <div class="pa-2">
      <a
          v-for="item in contacts"
          :key="item.link"
          :href="item.link"
          target="_blank"
          class="pa-0 ma-4 contacts-icon"
      >
        <v-icon :icon="item.icon" size="large" color="primary"/>
      </a>
    </div>

    <div>
      {{ new Date().getFullYear() }} — <strong>Malder validator</strong>
    </div>
  </v-footer>
</template>

<style scoped>

</style>