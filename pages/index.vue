<script setup lang="ts">
import { chains } from '~/data/chains'

useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle || 'Malder validator'
  }
})
</script>
<template>
  <v-container>
    <v-row class="mt-8 mb-8">
      <v-col cols="12" class="text-center">
        <div class="d-flex justify-center align-center mb-4">
          <NuxtImg
              loading="lazy"
              format="webp"
              src="/images/logo.jpg"
              width="60"
              height="60"
              alt="logo"
              class="img-rounded"
          />&nbsp;
          <h1 class="text-h2">Malder</h1>
        </div>
        <div class="mb-4 text-h4 validator-description">Cosmos SDK based blockchains validator</div>
        <div class="mb-4">Successfully completed training at the
          <a href="https://validators.network/#school" target="_blank">
            Posthuman DVS Validator School
          </a>
        </div>
      </v-col>
      <v-col cols="12">
        <v-card
            v-for="chain in chains"
            :key="chain.name"
            class="mx-auto my-8"
            elevation="8"
            variant="outlined"
            max-width="600"
        >
          <v-card-item>
            <v-card-title class="d-flex align-center">
              <NuxtImg
                  loading="lazy"
                  format="webp"
                  :src="chain.image"
                  width="50"
                  height="50"
                  :alt="chain.name"
                  class="img-rounded"
              />&nbsp;
              <h3>{{ chain.name }}</h3>
            </v-card-title>
          </v-card-item>

          <v-card-text>
            {{ chain.description }}
          </v-card-text>
          <v-card-text>
            Website: <a :href="chain.website" target="_blank">{{ chain.website }}</a>
          </v-card-text>
          <v-card-text>
            My validator link: <a :href="chain.validator_link" target="_blank">Malder</a>
          </v-card-text>
        </v-card>
        <v-card
            class="mx-auto my-8"
            elevation="8"
            max-width="600"
        >
          <v-card-item>
            <v-card-title class="d-flex align-center text-h5">
              More chains coming soon...
            </v-card-title>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>