<script>
import Products from "@/components/Products";

export default {
  name: 'App',
  components: {
    Products
  },
  data() {
    return {
      products: [
        {
          name: 'Banana',
          pricePerUnit: '20',
          typeOfUnit: 'Kg',
          countToBuy: 1,
        },
        {
          name: 'Apple',
          pricePerUnit: '10',
          typeOfUnit: 'Kg',
          countToBuy: 1,
        },
        {
          name: 'book',
          pricePerUnit: '150',
          typeOfUnit: 'unit',
          countToBuy: 1,
        },
        {
          name: 'Notebook Asus ...',
          pricePerUnit: '11000',
          typeOfUnit: 'unit',
          countToBuy: 1,
        },
      ],
      orderToBuy: {
        boughtProducts: [],
        totalCost: '',
        contacts: {
          name: '',
          address: '',
          phone: ''
        },
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <Products :products="products" :orderToBuy="orderToBuy"></Products>
    <ul>
      <li v-for="item in orderToBuy.boughtProducts" :key="item.name">{{ item.name }} : {{ item.boughtCount }}</li>
    </ul>
    <br>
    {{ orderToBuy.totalCost }} $
    <br>
    <ul>
      <li v-for="item in orderToBuy.contacts" :key="item.name">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
#app {
}
</style>
