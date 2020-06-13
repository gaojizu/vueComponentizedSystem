<template>
  <div>
    <van-dialog v-model="dialogShow" title="更新信息" confirmButtonText="复制密码" :data-clipboard-text="password"
                @confirm="closeDialog" class="filed" show-cancel-button>
      <van-cell-group>
        <van-field label-align="center" readonly colon v-model="url" label="登录地址" placeholder="www.baidu.com"/>
        <van-field label-align="center" readonly colon v-model="username" label="用户名" placeholder="weileiming"/>
        <van-field label-align="center" readonly colon v-model="password" label="密码" placeholder="12345678"/>
      </van-cell-group>
    </van-dialog>
    <van-button type="info" @click="openDialog">打开dialog</van-button>
  </div>
</template>

<script>
  import Clipboard from "clipboard";

  export default {
    name: "copy",
    data() {
      return {
        dialogShow: false,
        password: 'Vghlajgdsoi',
        username: '',
        url: ''
      }
    },
    methods: {
      /**
       *
       */
      closeDialog() {
        var clipboard = new Clipboard(".filed"); //单页面引用
        clipboard.on("success", e => {
          this.$toast("已复制到粘贴板")
          clipboard.destroy(); //释放内存
        });
      },
      openDialog() {
        this.dialogShow = true
      },
    }
  }
</script>

<style scoped>

</style>
