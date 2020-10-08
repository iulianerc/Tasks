
<script>
export default {
  name: "Output2",
  props: ['InputData'],
  methods:{
    show(){
      switch (this.$props.InputData.oper){
        case "+" :
        return this.$props.InputData.x + this.$props.InputData.y;
         /* break*/
        case "-" :
          return this.$props.InputData.x - this.$props.InputData.y;
          // break;
        case "*" :
          return this.$props.InputData.x * this.$props.InputData.y;
          // break;
        case "/" :
          return this.$props.InputData.x / this.$props.InputData.y;
          // break;
      }
    }
  }
}
</script>

<template>
  <div>
    <p >Rezultatul Operatiei este x {{this.$props.InputData.oper}} y : {{show()}}</p>
  </div>
</template>
