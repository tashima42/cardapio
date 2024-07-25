<template>
  <div>
    <h3 class="text-2xl font-semibold text-center mt-4">Cardápio da semana</h3>
    <div class="flex flex-row overflow-auto p-5 justify-center">
      <div v-for="(item, i) in highlightItems" class="m-2">
        <div class="card bg-base-100 w-60 shadow-md h-40">
          <div class="card-body">
            <h2 class="card-title text-primary bold">{{ item.name }}</h2>
            <div class="card-actions justify-end">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center w-100">
    <div class="products grid grid-cols-2 justify-items-center gap-6 w-3/5">
      <ProductCard v-for="product in products" :name="product.name" :price="formatPrice(product.price)"
        :description="product.description" class=""/>
    </div>
  </div>
  <!-- <Dialog v-model:visible="visible" modal header="Fazer Pedido" :style="{ width: '25rem' }">
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
</Dialog> -->
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import store from '../store/store.js';
import { ref, onBeforeMount } from 'vue';

const highlightItems = ref([])
const selectedProduct = ref(null)
const name = ref('')
const number = ref('')
const products = ref({})
const visible = ref(false)

onBeforeMount(async () => {
  const productsList = await store.getProducts();
  // find what product has hightlight: true
  for (let i = 0; i < productsList.length; i++) {
    if (productsList[i].highlight) {
      const highlightProduct = productsList[i]
      console.log(productsList)
      highlightItems.value = highlightProduct.items
      productsList.push(...highlightProduct.items)
      break
    }
  }
  products.value = productsList
})

async function createOrder() {
  await store.createOrder(name.value, number.value, selectedProduct.value)
  visible.value = false
}

function formatPrice(cents) {
  const price = cents / 100
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

</script>
