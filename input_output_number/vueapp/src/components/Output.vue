<script>
export default {
  name: "Output",
  props: ['inputData']
}
</script>

<template>
  <div>
    <p> <code>x + y is : {{inputData.x + inputData.y}}</code> </p>
    <p><code>x - y is : {{inputData.x - inputData.y}}</code> </p>
    <p> <code>x * y is : {{inputData.x * inputData.y}}</code></p>
    <p><code>x / y is : {{inputData.x / inputData.y}}</code></p>
  </div>
</template>