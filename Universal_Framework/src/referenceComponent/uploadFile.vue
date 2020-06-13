<template>
    <div>
      <van-uploader v-model="fileList" :before-delete="deleteImg" multiple/>
    </div>
</template>

<script>
    export default {
        name: "uploadFile"
    }
</script>

<style scoped>

</style>
