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
              <div class="avatar-container">
                <avatar username="Jane Doe"></avatar>
              </div>
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
    </div>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  name: "ChatWrapper",
  props: {
    msg: String,
  },
  components: {
    Avatar,
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
