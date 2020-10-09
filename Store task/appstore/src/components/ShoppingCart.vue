<script>
export default {
  name: "ShoppingCart",
  props: {
    shopList: Array,
    orderToBuy: Object
  },
  methods: {
    changeCount(count, index) {
      this.shopList[index].countToBuy = count;
    },
    sendOrder(){
      this.orderToBuy.totalCost = this.totalPrice;
      let index;
      for (index in this.shopList){
        this.orderToBuy.boughtProducts.push({name: this.shopList[index].name, boughtCount: this.shopList[index].countToBuy})
      }
    }
  },
  computed:{
    producePrice(){
      let index,productPriceArray = [];
      for (index in this.shopList) {
        productPriceArray.push(this.shopList[index].pricePerUnit*this.shopList[index].countToBuy)
      }
      return productPriceArray
    },
    totalPrice(){
        let price,totalPrice = 0;
        for (price of this.producePrice) {
          totalPrice += price;
        }
        if (this.shopList[0]){
          return totalPrice
        } else {
          return ''
        }

    }
  }
}
</script>

<template>
  <div class="shoppingCart" >
    Your Shopping cart
    <img src="../assets/cart.png" alt="cart" height="25px">
    <div class="shopProduct">
      <div v-for="(product,index) in shopList" :key="product.name">
        <div class="product">
          <div class="name">{{ product.name }} {{index}}</div>
          <div class="pricePerUnit">{{ product.pricePerUnit }}</div>
          <div>
            <input class="countToBuy" type="number" @input="changeCount($event.target.value,index)" :value="product.countToBuy"> {{product.typeOfUnit}}
          </div>
          <div class="priceProduct">{{ producePrice[index] }}</div>
        </div>
      </div>
      <div class="totalPrice">{{ totalPrice }}</div>
      <div class="inputName">
        <input type="text" placeholder="Your Name" v-model="orderToBuy.contacts.name">
      </div>
      <div class="address">
        <input type="text" placeholder="Your Address" v-model="orderToBuy.contacts.address">
      </div>
      <div class="phone">
        <input type="text" placeholder="Your Phone" v-model="orderToBuy.contacts.phone">
      </div>
      <div class="makeOrder">
        <button @click.once="sendOrder()">Make Order</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shoppingCart {
  min-width: 200px;
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