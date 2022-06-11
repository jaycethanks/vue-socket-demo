import Vue from "vue";
import Notice from "@/components/Noticer/Notice.vue";

function create(Component, props) {
  // 先建立实例
  const vm = new Vue({
    render(h) {
      //h就是createElement,它返回VNode
      return h(Component, { props });
    },
  }).$mount();
  // 手动挂载

  // 判断是否存在container，如果不存在则先创建
  let container;
  container = document.querySelector(".noticer-container");
  if (container == null) {
    container = document.createElement("div");
    container.classList.add("noticer-container");
    container.style.position = "fixed";
    container.style.top = "50px";
    container.style.right = "0px";
    container.style.overflow = "hidden";
    container.style.zIndex = 9999;

    document.body.appendChild(container);
  }

  container.appendChild(vm.$el);

  //销毁方法
  const comp = vm.$children[0];
  comp.remove = function () {
    container.removeChild(comp["$el"]);
    vm.$destroy();
  };
  comp.show();
  return comp;
}

Vue.prototype.$notice = {
  error: function (props) {
    create(Notice, Object.assign(props, { type: "error" }));
  },
  info: function (props) {
    create(Notice, Object.assign(props, { type: "info" }));
  },
  success: function (props) {
    create(Notice, Object.assign(props, { type: "success" }));
  },
  warn: function (props) {
    create(Notice, Object.assign(props, { type: "warn" }));
  },
};
