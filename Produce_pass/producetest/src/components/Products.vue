<template>
  <div>
    <h2>Shops products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">{{product}} <button @click.once="addproduct(product)">+</button></li>
    </ul>
    <h2>Your Shopping cart with products</h2>
    <ul>
      <li v-for="shops in shopcart" :key="shops.id">{{shops}}</li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Produces",
  data(){
    return {
      products: ['smartphone', 'laptop', 'pizza', 'gamepad'],
      shopcart: ['nons']
    }
  },
  methods:{
    addproduct($value){
      this.shopcart.push($value);
    }
  }
}
</script>
