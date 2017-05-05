<template>
  <div class="hello">
    <img src="../../assets/logo.png">
    <button id="btn">Choose Image</button>
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'zepto-wrapper';
import wx from 'weixin-js-sdk';

const wechatReady = new Promise(rs => wx.ready(rs));
$.ajax({
  url: 'http://192.168.3.4:3000/wechat-config',
  type: 'GET',
  success(data) {
    wx.config(data);
  }
})
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    $('#btn').click(() => {
      wechatReady.then(() => {
        wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success(res) {
            let localIds = res.localIds;
            let img = new Image();
            img.src = localIds[0];
            $('.hello').append(img);
          }
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/flexible';
img {
  width: pr(200);
}

#btn {
  @include fz(20px);
}

</style>
