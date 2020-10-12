<template>
  <div id="app">
    <Products></Products>

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

<script>
import Products from "@/components/Products";
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Products
  },
  computed: mapGetters(['orderToBuy'])
}
</script>

