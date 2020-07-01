<template>
  <div>
    <nav v-for="(value,key,index) in datas">
      <input :list="key"/>
      <datalist :id="key">
        <option v-for="item in value" :value="item.description"></option>
      </datalist>
    </nav>

    <h3 v-for="(value,key,index) in datas">
      {{key}}
      <h5 v-for="item in value">
        {{item.description}}
      </h5>
    </h3>

    <div v-for="(value,key,index) in datas">
      <details v-for="item in value">
        {{item.description}}
        <summary>{{key}}</summary>
      </details>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        datas: [],
        datalist: [],
      }
    },
    created() {
      this.getKeyandValue()
    },
    methods: {
      getKeyandValue() {
        this.$axios.get("api/outputDatasOfkey.do").then(response => {
          if (response.data.code === 20000) {
            this.datas = response.data.data.value
            //使用es6语法处理key为中文的情况
            let tempArr = [];
            Object.keys(this.datas).forEach(value => {
              tempArr.push(...this.datas[value])
            })
            this.datalist = tempArr;
            console.info(response.data.data.value)
          }
        })
      }
    }
  }
</script>

<style>
  input {
    margin: 10px 10px 10px 10px;
  }
</style>
