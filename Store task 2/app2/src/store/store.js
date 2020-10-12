import Vue from 'vue'
import Vuex from 'vuex'
import ProductsStore from "@/store/modules/ProductsStore";
import OrderStore from "@/store/modules/OrderStore";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    ProductsStore,
    OrderStore,
  },
})