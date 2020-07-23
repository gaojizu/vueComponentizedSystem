<template>
  <div>
    <video id="video" ref="video" controls="controls" @timeupdate="cutImg" @loadeddata="onloadeddata">
    </video>

    <div ref="slider" class="box" id="box"></div>

    <input type="file" id="file" @change="onInputFileChange()">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        totalCount: 10, //展示写的固定时间
        index: 0,  //当前视频播放时间
        time: '',  //当前视频总时间
        oImg: '',
      }
    },
    methods: {
      //获取上传视频文件
      onInputFileChange() {
        var file = document.getElementById('file').files[0];
        console.log(file)
        var url = URL.createObjectURL(file);
        console.log(url);
        document.getElementById('video').src = url;
        setTimeout(() => {
          this.time = document.getElementById('video').duration;
          var hour = parseInt((this.time) / 3600);
          var minute = parseInt((this.time % 3600) / 60);
          var second = Math.ceil((this.time % 60))
          console.log(this.time)
        }, 800)
      },
      cutImg() {
        console.info(this.index)
        console.info(this.totalCount)
        //如果当前的时间没有超过视频的时间就继续截图！
        if (this.index >= this.time) {
          this.getImg()
          return;
        }
        console.log("cutImg", this.index);
        console.log(Date.now());
        let video = this.$refs.video;
        let canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        let img = document.createElement("img");
        img.onload = () => {
          this.$refs.slider.appendChild(img);
          this.index += 1;
        }
        img.src = canvas.toDataURL();
      },
      onloadeddata() {
        let video = this.$refs.video;
        console.log(video)
        video.currentTime = 0;
      },
      //获取添加的照片
      getImg() {
        this.oImg = document.getElementById('box').getElementsByTagName('img');
        console.log(this.oImg);
      }

    },
    watch: {
      index() {
        console.log(this.index)
        let video = this.$refs.video;
        video.currentTime = 0 + this.index / 1;
        console.log(video.currentTime)
      },

    },
  };
</script>

<style scoped>



</style>
