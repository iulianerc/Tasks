<script>
export default {
  name: 'Inputcomp',
  data() {
    return {
      pass_data: {
        x: 0,
        y: 0,
        oper: '',
      },
    }
  },
  methods: {
    model_data: function ($event) {
      var value = $event.target.value, id = $event.target.getAttribute("id");
      if (id == 'x') {
        this.pass_data.x = Number(value);
      }
      if (id == 'y') {
        this.pass_data.y = Number(value);
      }
      this.$emit('input', this.pass_data );
    },
    sum() {
      this.pass_data.oper = "+"
    },
    def() {
      this.pass_data.oper = "-"
    },
    mult() {
      this.pass_data.oper = "*"
    },
    subs() {
      this.pass_data.oper = "/"
    }
  }
}
</script>

<template>
  <div>
    <label for="x">X = </label> <input id="x" type="number" v-on:input="model_data">
    <br><br>
    <label for="y">Y = </label> <input id="y" type="number" v-on:input="model_data">
    <br><br>
    <button @click="sum">+</button><button @click="def">-</button><button @click="mult">*</button><button @click="subs">/</button>
  </div>
</template>
