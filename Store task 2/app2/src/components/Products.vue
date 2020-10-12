<script>
import {mapGetters}  from 'vuex'
import {mapMutations} from 'vuex'
import ShoppingCart from "@/components/ShoppingCart";

export default {
  name: "Products",
  components: {ShoppingCart},
  computed: mapGetters(['products']),
  methods: {
    ...mapMutations(['addToBuy']),
/*    addToBuyItem(product){
      store.commit('addToBuy',product)
    }*/
  }
}
</script>

<template>
  <div>
    <h1>Products</h1>
    <div id="products">
      <div class="shopCart">
        <shopping-cart ></shopping-cart>
      </div>
      <div v-for="product in products" :key="product.id" class="product">
        {{ product.name }}
        <div class="price">{{ product.pricePerUnit }} MDL / {{ product.typeOfUnit }}</div>
        <div class="addProduct">
          <button @click="addToBuy(product)">Send in your cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

#products {
  width: 80%;
  margin: auto;
  padding: 100px 50px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  background: #97a2a2;
  position: relative;
}

.shopCart {
  position: absolute;
  right: 10px;
  top: 10px;
}

.product {
  background-color: #97A2A2;
  border: solid 1px;
  text-align: center;
  height: 200px;
  line-height: 200px;
  position: relative;
}

.price {
  height: 40px;
  min-width: 70px;
  position: absolute;
  bottom: 0;
  right: 50px;
  line-height: 40px;
  background-color: lightcoral;
  padding: 10px;
}

.addProduct {
  position: absolute;
  top: 10px;
  right: 30px;
  width: auto;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

.addProduct button {
  cursor: pointer;
}

</style>