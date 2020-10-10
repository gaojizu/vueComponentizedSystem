<template>
  <div>
    <span>
      {{message}}
    </span>
    <input v-model="message" />
  </div>
</template>

<script>
  export default {
    data: () => ({
      Lists: [],
      message: "",
    }),
    async created() {
      this.$axios.get('api/getStudents.do').then(res => {
        this.Lists = res.data.data.list
        console.info(res)
        console.info(this.Lists)
        this.message = res.data.message
      }).catch(err => {
        console.info(err)
      })
    }
  }
</script>

<style>
</style>
