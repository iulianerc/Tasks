<template>
  <div>
    <label for="x">X = </label> <input id="x" type="number" v-on:input="model_data">
    <br><br>
    <label for="y">Y = </label> <input id="y" type="number" v-on:input="model_data">
  </div>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      pass_data: {
        x: 0,
        y: 0
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
      this.$emit('input', this.pass_data);
    }
  }
}
</script>
