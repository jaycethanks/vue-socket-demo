<template>
  <div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="register-modal-wrapper" v-if="showModal"></div>
    </transition>

    <transition
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOutUp"
    >
      <div class="register__box" v-if="showModal">
        <p style="text-align: center">
          <span class="register__box--title">英雄留名！！！🙈🍉🍉🍉</span>
        </p>
        <p style="text-align: center">
          <input
            class="ant-input"
            v-model="nickname"
            id="nickname"
            type="text"
          />
        </p>
        <button class="ant-button" @click="handleOk">👌 确定</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="less">
.register-modal-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000ad;
  overflow: hidden;
}
.register__box {
  z-index: 2010;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -150px;
  font-size: 24px;
  font-weight: bold;
  width: 500px;
  height: 300px;
  // border: 1px solid red;
  border-radius: 8px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  .register__box--title {
    user-select: none;
  }
}
</style>
