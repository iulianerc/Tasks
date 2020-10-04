<template>
  <div>
    <p> <code>x + y is : {{data.sum}}</code> </p>
    <p><code>x - y is : {{data.dec}}</code> </p>
    <p> <code>x * y is : {{data.mult}}</code></p>
    <p><code>x / y is : {{data.div}}</code></p>
  </div>
</template>

<script>
export default {
  name: "output",
  props: ['data'],
}
</script>