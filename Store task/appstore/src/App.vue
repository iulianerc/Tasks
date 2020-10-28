<script>
import Products from "@/components/Products";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  name: 'App',
  data(){
    return {
      shoppingCartList: []
    }
  },
  components: {
    Products,
    ShoppingCart
  },
}
</script>

<template>
  <div id="app">
    <Products @addCart="shoppingCartList = $event"></Products>
    <div class="Cart">
      <ShoppingCart :shopList="shoppingCartList"></ShoppingCart>
    </div>

  </div>
</template>

<style scoped>
#app {
  width: 80%;
  margin: auto;
  position: relative;
}
.Cart{
  position: absolute;
  top: 65px;
  right: 20px;
}
</style>
