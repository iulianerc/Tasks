<script>
export default {
  name: "ShoppingCart",
  props: {
    shopList: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      contacts: {
        name: '',
        address: '',
        phone: ''
      }
    }
  },
  computed: {
    prices(){
      let productPrices = [];
      let totalPrice = 0;
      productPrices = this.shopList.map( el => {
        return el.count * el.price;
      })
      productPrices.map( el => {
        totalPrice += el;
      })
      return {
        productPrices: productPrices,
        totalPrices: totalPrice,
      }
    },
  },
  methods: {
    changeCount(count, index) {
      this.shopList[index].count = +count;
    },
    makeOrder(){
      /*this.orderToBuy.totalCost = this.totalPrice;
      /!*for (let index in this.shopList){
        this.orderToBuy.boughtProducts.push({name: this.shopList[index].name, boughtCount: this.shopList[index].countToBuy})
      }*!/
      this.orderToBuy.boughtProducts = this.shopList.map(el => ({
        name: el.name,
        boughtCount: el.countToBuy
      }))*/
      
      this.$emit('data')
    }
  }
}
</script>

<template>
  <div class="shoppingCart" >
    Your Shopping cart
    <img src="../assets/cart.png" alt="cart" height="25px">
    <div class="shopProduct">
      <div v-for="(product,index) in shopList" :key="product.id">
        <div class="product">
          <div class="name">{{ product.name }}</div>
          <div class="pricePerUnit">{{ product.price }}</div>
          <div>
            <input class="countToBuy" type="number" @input="changeCount($event.target.value,index)" :value="product.count" min="1" :max="product.maxCount"> {{product.unit}}
          </div>
          <div class="priceProduct">{{ prices.productPrices[index] }}</div>
        </div>
      </div>
      <div class="totalPrice">{{ prices.totalPrices }}</div>
      <div class="inputName">
        <input type="text" placeholder="Your Name" v-model="contacts.name">
      </div>
      <div class="address">
        <input type="text" placeholder="Your Address" v-model="contacts.address">
      </div>
      <div class="phone">
        <input type="text" placeholder="Your Phone" v-model="contacts.phone">
      </div>
      <div class="makeOrder">
        <button @click.once="makeOrder()">Make Order</button>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  .shoppingCart {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    background-color: lightblue;
    font-size: 16px;
    padding: 10px;
  }

  .shoppingCart:hover {
    background-color: cornflowerblue;
  }

  .shopProduct {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 1;
    background-color: #fff;
    border: solid 1px;
    padding: 20px;
  }

  .shoppingCart:hover .shopProduct {
    display: block;
  }

  .product {
    display: grid;
    grid-template-columns: 30% 25% 20% 25%;
    grid-gap: 10px;
    width: 600px;
  }

  .name {
    overflow: hidden;
  }

  .countToBuy {
    max-width: 70px;
    text-align: center;
    padding-left: 15px;
  }

  .totalPrice {
    text-align: right;
    padding-right: 30px;
  }

  .makeOrder {
    text-align: right;
  }

  .makeOrder button {
    cursor: pointer;
  }
  </style>