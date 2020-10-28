<script>
import Products from '../Products.json'

export default {
  name: "Products",
  data() {
    return {
      shoppingCartList: [],
      products: []
    }
  },
  mounted() {
    this.products = Products
  },
  methods: {
    addToCart(product) {
      let isProduct = 0;
      //verify if are the same element in Shopping cart
                    /*for (let i = 0; i < this.shoppingCartList.length; i++) {
                      if (this.shoppingCartList[i].id === product.id) {
                        isProduct = 1
                      }
                    }*/
      //    New version
      this.shoppingCartList.map( el => {
        if (el.id === product.id) isProduct = 1
      })

      // Push or add +1 to count
      if (!isProduct) {
        product.count = 1
        this.shoppingCartList.push(product);
      } else {
        this.shoppingCartList = this.shoppingCartList.map( el => {
          if ( (el.id === product.id) && (el.maxCount > el.count) ) el.count++
          return el
        })
                    //    Old version
                    /*for (let i = 0; i < this.shoppingCartList.length; i++) {
                      if (this.shoppingCartList[i].id === product.id) {
                        this.shoppingCartList[i].count++;
                      }
                    }*/
      }
      this.$emit('addCart',this.shoppingCartList)
    }
  },
}
</script>

<template>
  <div>
    <h1>Products </h1>
    <div id="products">
      <div v-for="product in products" :key="product.id" class="product">
        {{ product.name }}
        <div class="price">{{ product.price }} MDL / {{ product.unit }}</div>
        <div class="addProduct">
          <button @click="addToCart(product)">Send in your cart</button>
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
  padding: 100px 50px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  background: #97a2a2;
  position: relative;
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