<script setup>
import { defineProps } from 'vue';
const props = defineProps(["name", "price", "description"])
</script>

<template>
  <div class="card bg-accent w-96 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-primary">{{ props.name }} ({{ props.price }})</h2>
      <div class="card-actions justify-end">
        <p v-html="props.description"></p>
        <button class="btn btn-primary">Pedir</button>
      </div>
    </div>
  </div>
</template>