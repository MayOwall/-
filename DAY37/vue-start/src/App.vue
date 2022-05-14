<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello, vue~",
    };
  },
};
</script>

<style lang="scss">
$color: "orange";
h1 {
  color: "orange";
}
</style>
