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
          id: '1',
          name: 'Banana',
          pricePerUnit: '20',
          typeOfUnit: 'Kg',
          countToBuy: 1,
        },
        {
          id: '2',
          name: 'Apple',
          pricePerUnit: '10',
          typeOfUnit: 'Kg',
          countToBuy: 1,
        },
        {
          id: '3',
          name: 'book',
          pricePerUnit: '150',
          typeOfUnit: 'unit',
          countToBuy: 1,
        },
        {
          id: '4',
          name: 'Notebook Asus ...',
          pricePerUnit: '11000',
          typeOfUnit: 'unit',
          countToBuy: 1,
        }
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

    <h1>Final object with order</h1>
    <ul>
      <li v-for="item in orderToBuy.boughtProducts" :key="item.name">
        <br>
        Name product : {{ item.name }} <br>
        count bought : {{ item.boughtCount }}
        <br>
      </li>
    </ul>
    <br>
    Total price : {{ orderToBuy.totalCost }} $
    <br>
    <h2>Contacts</h2>
    <ul>
      <li v-for="item in orderToBuy.contacts" :key="item.name">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
#app {
}
</style>
