<template>
  <h2 @click="changeMessage">
    This message is from {{ newMessage }} <br />
    {{ id }} {{ title }} / {{ email }}
  </h2>
</template>

<script>
export default {
  props: {
    message: String,
    id: Number,
    title: String,
    email: {
      type : String,
      default : "이메일이 입력되지 않았습니다",
    },
  },
  data() {
    return {
      newMessage: this.message,
    };
  },
  methods: {
    changeMessage() {
      console.log("clicked!");
      this.newMessage = "I'm the clicked message!";
    },
  },
};
</script>
