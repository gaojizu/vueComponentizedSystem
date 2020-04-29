<template>
<div>
  <common-header :currPage='currPage'>
  </common-header>
</div>
</template>

<script>
  import commonHeader from "../commonComponents/commonHeader";
	export default {
		name: "shoppingCar",
    components:{
		  'common-header' : commonHeader
    },
    data(){
		  return {
        currPage : this.$route.params.pageFlag,
      }
    }
	}
</script>

<style scoped>

</style>
