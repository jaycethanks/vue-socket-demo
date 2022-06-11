<template>
  <div id="app">
    <ChatWrapper />
  </div>
</template>

<script>
import ChatWrapper from "./pages/ChatWrapper.vue";

export default {
  name: "App",
  components: {
    ChatWrapper,
  },
};
</script>

<style lang="less">
*,
html,
body {
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
</style>
