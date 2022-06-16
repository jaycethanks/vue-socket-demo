<template>
  <div class="chat-box">
    <!-- <button @click="toggleModal" style="position: fixed; z-index: 3000">
      Toggle
    </button> -->

    <div class="chat-panel">
      <div class="chat-content">
        <ul>
          <li v-for="i in list" :key="i.id">
            <div class="msg-item">
              <div class="avatar-container"></div>
              <div class="msg-container">
                <div class="msg">{{ i.message }}</div>
                <div class="time"></div>
              </div>
            </div>
            <p class="time-text">
              Sun Aug 22 2021 00:59:01 GMT+0800 (中国标准时间)
            </p>
          </li>
        </ul>
      </div>
      <!-- <div class="easy">
        <p style="display: flex; gap: 20px; margin-top: 40px">
          <button
            class="ant-button"
            @click="
              handleNotice(
                'success',
                '成功了成功了成功了成功了成功了成功了成功了成功了成功了'
              )
            "
          >
            success
          </button>
          <button
            class="ant-button"
            @click="handleNotice('error', '错误了错误了错误了')"
          >
            error
          </button>
          <button
            class="ant-button"
            @click="handleNotice('warn', '告警了告警了')"
          >
            warn
          </button>
          <button
            class="ant-button"
            @click="handleNotice('info', '只是个提示通知啦')"
          >
            info
          </button>
        </p>
      </div> -->
    </div>

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
import NiceAvatar from "vue-nice-avatar";
export default {
  name: "ChatWrapper",
  props: {
    msg: String,
  },
  data() {
    return {
      showModal: false,
      nickname: "",
      websock: null,
      list: [
        { id: 1, message: "hello!" },
        { id: 2, message: "hello!" },
        { id: 3, message: "hello!" },
        { id: 4, message: "hello!" },
        { id: 5, message: "hello!" },
      ],
    };
  },
  mounted() {
    this.websock = new WebSocket("ws://localhost:3200");
    this.websock.onopen = this.websocketOnopen;
    this.websock.onerror = this.websocketOnerror;
    this.websock.onmessage = this.websocketOnmessage;
    this.websock.onclose = this.websocketOnclose;
  },

  methods: {
    websocketOnopen(e) {
      console.log("open:: ", e);
    },
    websocketOnerror(e) {
      console.error(e);
    },
    websocketOnmessage(e) {
      console.log("message:: ", e);
    },
    websocketOnclose(e) {
      console.log("close:: ", e);
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    handleOk() {
      if (!this.nickname) {
        this.$notice.error({
          message: "好汉！姓甚名谁？",
          time: 3000,
        });
      } else {
        this.showModal = false;
        this.$notice.info({
          message: this.nickname + "来了！！！",
          time: 3000,
        });
      }
    },
    handleNotice(type, msg) {
      this.$notice[type]({
        message: msg,
        time: 3000,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.animate__animated.animate__fadeOut,
.animate__animated.animate__fadeIn {
  --animate-duration: 2s !important;
}
.chat-box {
  width: 100vw;
  position: relative;
  height: auto;
  overflow: hidden;
  .chat-panel {
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 800px;
    margin-left: 50%;
    margin-top: 100px;
    transform: translate(-50%);
    border-radius: 5px;
    padding: 30px 20px;
    box-shadow: 0px 0px 20px 20px #e6e6e6 inset;
    ul {
      display: block;
      li {
        height: 48px;
        font-size: 16px;
        list-style: none;
        margin: 10px 20px;
        // box-shadow: 0 0 4px 2px #f4f4f4;
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        &:nth-child(odd) {
          background: #efefef;
        }
        .msg-item {
          display: flex;
          .avatar-container {
            width: 50px;
            height: 50px;
            background-color: rgb(255, 188, 164);
          }
          .msg-container {
            height: 100%;
            width: 100%;
            .msg {
              height: 36px;
            }
          }
        }
        .time-text {
          font-size: 12px;
          text-align: center;
        }
      }
    }

    // overflow-y: auto;

    .chat-content {
      // border: 1px solid rgb(255, 22, 22);
    }
    .easy {
      width: 80%;
      margin: 100px;
    }
  }

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

  //
  .ant-button {
    user-select: none;
    line-height: 48px;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 48px;
    padding: 0 15px;
    font-size: 18px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border: 1px solid #d9d9d9;

    &:hover {
      color: #383838;
      background-color: #fff;
      border-color: #383838;
    }
  }
  .ant-input {
    font-weight: bold;
    width: 80%;
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    height: 48px;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 18px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    &:hover {
      border-color: #383838;
      border-right-width: 1px !important;
    }
  }
}
</style>
