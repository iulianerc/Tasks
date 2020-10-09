<script>
export default {
  name: 'inputComp',
  data() {
    return {
      model: {
        x: '',
        y: '',
        operator: '',
      },
    }
  },
  methods: {
    //
    getInputValue() {
      this.$emit('input', this.model);
    },
    getCurrentOperator(operator){
      this.model.operator = operator
    },
  }
}
</script>

<template>
  <div>
    <label for="x">X = </label> <input id="x" type="number" @input="getInputValue()" v-model="model.x">
    <br><br>
    <label for="y">Y = </label> <input id="y" type="number" @input="getInputValue()" v-model="model.y">
    <br><br>
    <button @click="getCurrentOperator('+')">+</button>
    <button @click="getCurrentOperator('-')">-</button>
    <button @click="getCurrentOperator('*')">*</button>
    <button @click="getCurrentOperator('/')">/</button>
  </div>
</template>
