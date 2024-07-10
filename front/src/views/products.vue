<template>
  <header>
    <h1>Cardápio</h1>
  </header>
  <div class="products" >
    <Card class="card" v-for="product in products">
      <template #title>{{ product.name }} ({{ product.price }})</template>
      <template #content>
        <p  v-html="product.description"/>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Pedir" class="w-full" @click="selectedProduct=product.id;visible=true;"/>
        </div>
      </template>
    </Card>
  </div>
<Dialog v-model:visible="visible" modal header="Fazer Pedido" :style="{ width: '25rem' }">
    <!-- <span class="text-surface-500 dark:text-surface-400 block mb-8">Fazer pedido.</span> -->
    <div class="flex items-center gap-4 mb-4">
        <label for="nome" class="font-semibold w-24 label">Nome: </label>
        <InputText id="nome" class="flex-auto" autocomplete="off" v-model="name" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="phone" class="font-semibold w-24 label">Telefone: </label>
        <InputText id="phone" class="flex-auto" autocomplete="off" v-model="number" />
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancelar" severity="secondary" @click="visible=false"></Button>
        <Button type="button" label="Finalizar Pedido" @click="createOrder();"></Button>
    </div>
</Dialog>
</template>

<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import store from '../store/store.js';
import { ref, onBeforeMount } from 'vue';

const selectedProduct = ref(null)
const name = ref('')
const number = ref('')
const products = ref({})
const visible = ref(false)

onBeforeMount(async () => {
  products.value = await store.getProducts();
})

async function createOrder() {
  await store.createOrder(name.value, number.value, selectedProduct.value)
  visible.value = false
}

</script>

<style>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 10px 16px;
  background: var(--color-background-mute);
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}
.products {
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  width: 60%;
  padding: 20px;
}
.card {
  width: 100%;
  margin: 5px;
  background: var(--color-background-mute);
}
.label {
  width: 100px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
</style>

