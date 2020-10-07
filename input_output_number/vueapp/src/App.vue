<script>
import InputComp  from "@/components/Input";
import Output1 from "@/components/Output";
import Output2 from "@/components/Output2";

export default {
  data() {
    return {
      input: {oper:''},
    }
  },
  computed:{
    isOper(){
      return this.input.oper == '' ? true : false;
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
    <output1 v-show="isOper" :input-data="input"></output1>
    <output2 v-show="isOper == false" :input-data="input"></output2>
  </div>
</template>



<style lang="scss">

</style>
