<template>
<div>
  <common-header :currPage='currPage'>
  </common-header>
</div>
</template>

<script>
  import commonHeader from "../commonComponents/commonHeader";
	export default {
		name: "referSteps",
    data(){
		  return {
        currPage : this.$route.params.pageFlag
      }
    },
    components :{
      'common-header' : commonHeader
    }
	}
</script>

<style scoped>

</style>
