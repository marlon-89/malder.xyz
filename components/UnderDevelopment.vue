<script setup lang="ts">

</script>

<template>
  <div class="under-development">
    <div class="under-development__inner">
      <span>
        <v-icon icon="fas fa-wrench" color="primary"/>
        Website is under development
        <v-icon icon="fas fa-rocket" color="primary"/>
      </span>
      <span>
        <v-icon icon="fas fa-wrench" color="primary"/>
        Website is under development
        <v-icon icon="fas fa-rocket" color="primary"/>
      </span>
      <span>
        <v-icon icon="fas fa-wrench" color="primary"/>
        Website is under development
        <v-icon icon="fas fa-rocket" color="primary"/>
      </span>
    </div>
    <div class="under-development__inner">
      <span>
        <v-icon icon="fas fa-wrench" color="primary"/>
        Website is under development
        <v-icon icon="fas fa-rocket" color="primary"/>
      </span>
      <span>
        <v-icon icon="fas fa-wrench" color="primary"/>
        Website is under development
        <v-icon icon="fas fa-rocket" color="primary"/>
      </span>
      <span>
        <v-icon icon="fas fa-wrench" color="primary"/>
        Website is under development
        <v-icon icon="fas fa-rocket" color="primary"/>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.under-development {
  overflow: hidden;
  white-space: nowrap;
  position: fixed;
  background: #111111;
  color: #ffff46;
  padding: 8px 0;
  font-size: 14px;
  letter-spacing: 1.5px;
  font-weight: bold;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  border-bottom: 4px solid #111111;

  &__inner {
    display: inline-flex;
    min-width: 100%;
    animation: under-development 30s linear infinite;

    span {
      display: inline-block;
      padding-left: 250px;
    }
  }
}

@keyframes under-development {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>