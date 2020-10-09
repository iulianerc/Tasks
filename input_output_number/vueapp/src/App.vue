<script>
import InputComp  from "@/components/Input";
import Output1 from "@/components/Output";
import Output2 from "@/components/Output2";

export default {
  data() {
    return {
      input: {},
    }
  },
  computed: {
    isOperator() {
      return this.input.x && this.input.y && this.input.operator
    },
    isInput() {
      return this.input.x && this.input.y && !this.input.operator;
    }
  },
  components: {
    InputComp,
    Output1,
    Output2
  },
}
</script>

<template>
  <div id="app">
    <input-comp v-model="input" ></input-comp>
    <br><br>
    <output1 v-show="isInput" :input-data="input"></output1>
    <output2 v-show="isOperator" :input-data="input"></output2>
  </div>
</template>



<style lang="scss">

</style>
