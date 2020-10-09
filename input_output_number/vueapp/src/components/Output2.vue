<script>
export default {
  name: "Output2",
  props: ['InputData'],
  computed:{
    evalExpression(){
      if (this.InputData.x && this.InputData.y && this.InputData.operator) {
        return eval(`${this.InputData.x}${this.InputData.operator}${this.InputData.y}`)
      }
      return ''
    }
  },
}
</script>

<template>
  <div>
    <p>Result of operation is x {{ InputData.operator }} y : {{ evalExpression}}</p>
  </div>
</template>
