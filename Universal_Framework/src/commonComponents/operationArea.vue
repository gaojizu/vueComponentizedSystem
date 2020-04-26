<template>
  <div>
    <el-card
      :header='header'
      :shadow='shadow'
      :style="card_style"
      :body-style="card_body_style"
    >

    </el-card>
  </div>
</template>

<script>
  export default {
    name: "operationArea",
    props: {
      header: {
        type: String,
        default: '操作区',
      },
      shadow: {
        type: String,
        default: 'hover'
      },
      card_style: {
        type: Object,
        default: () => {
          return {
            'position': 'absolute',
            'color': '#000000',
            'border-color': '#58aef5',
            'bottom': '10px',
            'left': '10px',
            'border-radius': '10px',
            'width': '90%',
          }
        }
      },
      card_body_style: {
        type: Object,
        default: () => {
          return {}
        }
      }

    },
    data() {
      return {
        value: false
      }
    },
    methods: {}
  }
</script>

<style>
  .card-style {
    position: absolute;
    margin-bottom: 10px;
    margin-left: 10px;
    background-color: red !important;
    color: darkred;
    border-radius: 10px;
    width: 40%;
    height: 30%;
    border-color: #58aef5;

  }
</style>
