<template>
  <transition
    enter-active-class="animate__animated animate__slideInRight"
    leave-active-class="animate__animated animate__slideOutRight"
    @after-leave="afterLeave"
  >
    <div v-if="isShow" class="notice__root">
      <div :class="`notice-type-${type}`" class="noticer">
        {{
          type === "error"
            ? "&#127827;"
            : type === "success"
            ? "&#127808;"
            : type === "warn"
            ? "&#127819;"
            : "&#128051;"
        }}
        : {{ message }}
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    time: {
      type: Number,
      default: 1000,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.time);
    },
    hide() {
      this.isShow = false;
    },
    afterLeave() {
      this.remove();
    },
  },
};
</script>
<style lang="less" scoped>
@error: rgb(255, 30, 30);
@warn: rgb(240, 192, 0);
@success: rgb(0, 144, 74);
@info: rgb(0, 80, 218);

@errorBg: rgb(255, 208, 208);
@warnBg: rgb(255, 245, 207);
@successBg: rgb(210, 255, 233);
@infoBg: rgb(203, 222, 255);

.notice__root {
  user-select: none;
  padding: 5px 50px 5px 5px;
}

.noticer {
  padding: 5px 20px;
  margin: 10px 0px;
  // margin-right: 50px;
  border-radius: 8px;
  font-size: 16px;
  width: auto;
  min-width: 280px;
  max-width: 300px;
  word-break: break-all;
  text-align: center;
  box-sizing: border-box;
}
.notice-type-error {
  color: @error !important;
  border: 2px solid @error;
  box-shadow: 1px 1px 5px 2px @errorBg;
  background-color: @errorBg;

  // border: 1px solid red;
}
.notice-type-warn {
  color: @warn !important;
  border: 2px solid @warn;
  background-color: @warnBg;
  box-shadow: 1px 1px 5px 2px @warnBg;
}
.notice-type-success {
  color: @success !important;
  border: 2px solid @success;
  background-color: @successBg;
  box-shadow: 1px 1px 5px 2px @successBg;
}
.notice-type-info {
  color: @info !important;
  border: 2px solid @info;
  background-color: @infoBg;
  box-shadow: 1px 1px 5px 2px @infoBg;
}
</style>