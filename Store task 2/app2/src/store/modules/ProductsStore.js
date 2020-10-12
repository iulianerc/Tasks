export default {
  state: {
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
    shoppingCartList: []
  },
  getters: {
    products(state) {
      return state.products
    },
    shoppingCartList(state){
      return state.shoppingCartList
    },
    producePrice(state){
      let index,productPriceArray = [];
      for (index in state.shoppingCartList) {
        productPriceArray.push( state.shoppingCartList[index].pricePerUnit * state.shoppingCartList[index].countToBuy )
      }
      return productPriceArray
    },
      totalPrice(state,getters){
      let price,totalPrice = 0;
      for (price of getters.producePrice) {
        totalPrice += price;
      }
      if (state.shoppingCartList[0]){
        return totalPrice
      } else {
        return ''
      }
    }
  },
  mutations: {
    addToBuy(state,product) {
      //verify if are the same element in Shopping cart
      let isProduct = 0
      let index
      for ( index in state.shoppingCartList ) {
        if (state.shoppingCartList[index].id === product.id) {
          isProduct = 1
        }
      }
      // Push or add +1 to count
      if (!isProduct) {
        state.shoppingCartList.push(product);
      } else {
        for ( index in state.shoppingCartList ) {
          if (state.shoppingCartList[index].id === product.id) {
            state.shoppingCartList[index].countToBuy++;
          }
        }
      }
    },
    changeCount(state,payload) {
      state.shoppingCartList[payload.index].countToBuy = +payload.count;
    },
    sendOrder(state){
      this.orderToBuy.totalCost = this.totalPrice;
      let index;
      for (index in state.shoppingCartList){
        this.orderToBuy.boughtProducts.push({name: state.shoppingCartList[index].name, boughtCount: state.shoppingCartList[index].countToBuy})
      }
    }
  },
/*  action: {
    addToBuy({commit},payload){
      commit('addToBuy',payload)
    }
  }*/
}