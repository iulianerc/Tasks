<script>
import {mapGetters} from 'vuex'
import {mapMutations} from'vuex'

export default {
  name: 'ShoppingCart',
  data(){
    return {
      orderToBuy:{

      }
    }
  },
  computed:{
    ...mapGetters([
      'shoppingCartList',
      'producePrice',
      'totalPrice'
    ]),
    isEmpty(){
      // if (this.shoppingCartList[0]) return 0
      return !this.shoppingCartList[0]
    }
  },
  methods:{
   ...mapMutations([
     'changeCount',
     'changeContactsName',
     'changeContactsAddress',
     'changeContactsPhone',
     'makeOrder'
   ])
  }
}
</script>

<template>
  <div class="shoppingCart" >
    Your Shopping cart
    <img src="../assets/cart.png" alt="cart" height="25px">
    <div class="shopProduct">
      <div v-for="(product,index) in shoppingCartList" :key="product.id">
        <div class="product">
          <div class="name">{{ product.name }} {{index}}</div>
          <div class="pricePerUnit">{{ product.pricePerUnit }}</div>
          <div>
            <input class="countToBuy" type="number" @input="changeCount({count: $event.target.value,index: index})" :value="product.countToBuy"> {{product.typeOfUnit}}
          </div>
          <div class="priceProduct">{{ producePrice[index] }}</div>
        </div>
      </div>
      <div align="center" v-if="isEmpty">Cart is empty</div>
      <div class="totalPrice">{{ totalPrice }}</div>
      <div class="inputName">
        <input type="text" placeholder="Your Name" @input="changeContactsName($event.target.value)">
      </div>
      <div class="address">
        <input type="text" placeholder="Your Address" @input="changeContactsAddress($event.target.value)">
      </div>
      <div class="phone">
        <input type="text" placeholder="Your Phone" @input="changeContactsPhone($event.target.value)">
      </div>
      <div class="makeOrder">
        <button @click.once="makeOrder()">Make Order</button>
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


