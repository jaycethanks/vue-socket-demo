const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: {
      "/ws": {
        target: "http://localhost:3200",
        // target: 'http://127.0.0.1:12345',
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   "^/api": "/", // 这种接口配置出来     http://XX.XX.XX.XX:8083/login
        // },
      },
    },
  },

  lintOnSave: false,
};
