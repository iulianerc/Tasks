export  default {
  state: {
    orderToBuy: {
      boughtProducts: [],
      totalCost: '',
      contacts: {
        name: '',
        address: '',
        phone: ''
      },
    }
  },
  getters:{
    orderToBuy(state){
      return state.orderToBuy
    }
  },
  mutations:{
    changeContactsName(state,name){
      state.orderToBuy.contacts.name = name
    },
    changeContactsAddress(state,address){
      state.orderToBuy.contacts.address = address
    },
    changeContactsPhone(state,phone){
      state.orderToBuy.contacts.phone = phone
    },
    makeOrder(state,getters){
      state.orderToBuy.totalCost = getters.totalPrice;
      let index;
      for (index in state.shoppingCartList){
        state.orderToBuy.boughtProducts.push({name: state.shoppingCartList[index].name, boughtCount: state.shoppingCartList[index].countToBuy})
      }
    }
  }
}