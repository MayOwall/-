<template>
  <h1>This is App.vue</h1>
  <button>Reverse Hello</button>
  <Hello :message="msg" />
  <Hello v-bind="userInfo" />
  <Button />
</template>

<script>
import Hello from "./components/Hello.vue";
export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Message from App.vue",
      userInfo: {
        id: 12,
        title: "MayOwall",
      },
    };
  },
};
</script>

<style></style>
