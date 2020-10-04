<template>
  <div id="app">
    <input-comp v-model="input" @input="calc"></input-comp>
    <br><br>
    <output-comp :data="operation"></output-comp>
  </div>
</template>

<script>
import input from "@/components/input";
import output from "@/components/output";
export default {
  data() {
    return {
      input: {
        x: 0,
        Y: 0
      },
      operation:{
        sum: 0,
        dec: 0,
        div: 0,
        mult: 0
      }
    }
  },
  methods: {
    calc: function(){
      this.operation.sum = this.input.x + this.input.y;
      this.operation.dec = this.input.x - this.input.y;
      this.operation.mult = this.input.x * this.input.y;
      this.operation.div = this.input.x / this.input.y;
    }
  },
  components: {
    'input-comp': input,
    'output-comp': output
  }
}
</script>

<style lang="scss">

</style>
