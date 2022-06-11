<template>
  <div class="chat-box">
    <!-- <button @click="toggleModal" style="position: fixed; z-index: 3000">
      Toggle
    </button> -->

    <div class="chat-panel">
      <div class="easy">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        consequuntur natus tempora aliquam culpa ipsa, quidem necessitatibus
        inventore quis aut dolorum facere mollitia deserunt, consectetur nostrum
        eum temporibus asperiores. Dolorum. Neque facere aspernatur molestiae,
        ducimus quos aliquam officiis aperiam commodi at laboriosam atque
        impedit suscipit accusamus hic, voluptas fuga ab! Vel accusantium
        eligendi sint sapiente laboriosam quae eveniet, facilis ab! Vero
        officiis quos placeat rem? Quos, neque. Sapiente, assumenda natus dolor
        blanditiis expedita magnam alias minima, architecto placeat debitis
        veniam exercitationem consequatur delectus autem amet totam, optio at
        perferendis? Quas. Eligendi veniam reprehenderit ullam, aliquam corporis
        at accusamus animi aspernatur iusto quia harum quo impedit non explicabo
        soluta? Temporibus impedit harum quam numquam laboriosam, praesentium
        necessitatibus autem delectus obcaecati provident? Tempore pariatur
        officiis eveniet, numquam, omnis asperiores harum recusandae dolorum ea
        molestiae corrupti fugit odio iusto. Excepturi, culpa, incidunt
        molestiae aliquam rem neque nostrum voluptatibus vel quos sunt hic
        eveniet. Inventore dicta mollitia fugit dolore consequuntur veniam nisi
        minima, voluptas sed delectus voluptatum rem, quaerat velit totam
        dolorum praesentium nam assumenda earum blanditiis iusto magni fuga. Sed
        natus delectus eum! Ipsum pariatur sapiente voluptate nobis in
        repudiandae autem, esse tenetur veritatis architecto? Deleniti illum,
        esse nobis veniam corporis odit provident totam, nam quaerat enim quod
        facere quo vitae laboriosam odio! Tempore, voluptatibus, sed ratione
        dolorem vitae eos itaque optio quia beatae repellat eaque, quod nemo
        molestiae aut perferendis modi consequatur. Incidunt vitae nostrum
        necessitatibus minima a optio delectus obcaecati natus! Expedita laborum
        dolorum vitae quo nobis deserunt totam earum nemo
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
      </div>
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
// import "@/components/Noticer/createNoticer.js";
export default {
  name: "ChatWrapper",
  props: {
    msg: String,
  },
  data() {
    return {
      showModal: true,
      nickname: "",
    };
  },
  mounted() {
    var socket = io();
  },
  methods: {
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
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
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
