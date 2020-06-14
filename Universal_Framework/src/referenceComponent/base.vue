<template>

    <div>
      <van-field label="请输入：" placeholder="请输入" v-model="UnicodeValue" @input="enCodeClick">

      </van-field>

    </div>
</template>

<script>
    export default {
        name: "base",
      data(){
          return{
            UnicodeValue: '',
          }
      }
    }
</script>

<style scoped>

</style>
