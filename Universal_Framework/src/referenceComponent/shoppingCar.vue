<template>
<div>
  <common-back :currPage='currPage'>
  </common-back>

</div>
</template>

<script>
  import commonBack from "../commonComponents/commonBack";
	export default {
    data(){
		  return {
        currPage : this.$route.params.pageFlag,
      }
    }
	}
</script>

<style scoped>

</style>
