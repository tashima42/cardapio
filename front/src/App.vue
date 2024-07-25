<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar bg-base-100 sticky top-0 z-50 border-solid border-b-2 border-primary">
    <button class="btn btn-ghost text-xl">MOMMY's Cozinha caseira</button>
  </div>
  <RouterView class="view"/>
</template>

<style scoped>
.view {
  width: 100%;
  height: 100%;
}
</style>
