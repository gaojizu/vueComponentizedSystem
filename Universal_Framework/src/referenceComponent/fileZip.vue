<template>
  <div class="yb-page">
    <div class="yb-page-inner">
      <div class="yb-headSetting">
        <div class="yb-headSet-img">
          <img :src="picValue" alt=""
               onerror="this.src='https://ixxxxxx.com/we/tmpls/t9000/img/account/blackHead@2x.png'">
        </div>
        <div class="yb-headSet-but">
          <div class="btn-box">
            <input type="file" ref="avatarInput" accept="image/*" @change="uploadImg" class="fromAlbum">
            <a href="" class="weui-but">从相册选一张</a>
          </div>
          <div class="btn-box">
            <a href="" class="weui-but">拍一张照片</a>
            <input type="file" accept="image/*" @change="uploadImg" capture="camera" class="fromCamera">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fileZip",
    data() {
      return {
        picValue: 'http://img3.imgtn.bdimg.com/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
        file: null,
        fileType: ''
      };
    },
    methods:{
      uploadImg(e) {
        if (e.target.value == "") {
          return;
        }
        this.$indicator.open();
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.file = files[0];
        this.fileType = this.file.type.split('/')[1];
        this.imgResize(files[0], this.postImg);
      },
      postImg(file) {
        let image = new FormData();
        image.append("file", file, this.random_string(12) + '.' + this.fileType);
        console.log(image);
        setHead(image).then(res => {
          this.$indicator.close();
          if (res.Success) {
            let newPath = res.photoPath +'?t=' + this.random_string(12);
            this.$store.commit("UPDATE_BASEINFO", { photoPath: newPath });
            this.picValue = newPath;
            this.$messagebox.alert(res.Message);
          } else {
            this.$messagebox.alert(res.Message);
          }
        });
      },
      imgResize(file, callback) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function() {
          var IMG = new Image();
          IMG.src = this.result;
          IMG.onload = function() {
            var w = this.naturalWidth,
              h = this.naturalHeight,
              resizeW = 0,
              resizeH = 0;
            // maxSize 是压缩的设置，设置图片的最大宽度和最大高度，等比缩放，level是报错的质量，数值越小质量越低
            var maxSize = {
              width: 500,
              height: 500,
              level: 0.6
            };
            if (w > maxSize.width || h > maxSize.height) {
              var multiple = Math.max(w / maxSize.width, h / maxSize.height);
              resizeW = w / multiple;
              resizeH = h / multiple;
            } else {
              // 如果图片尺寸小于最大限制，则不压缩直接上传
              return callback(file);
            }
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            if (window.navigator.userAgent.indexOf("iPhone") > 0) {
              canvas.width = resizeH;
              canvas.height = resizeW;
              ctx.rotate(90 * Math.PI / 180);
              ctx.drawImage(IMG, 0, -resizeH, resizeW, resizeH);
            } else {
              canvas.width = resizeW;
              canvas.height = resizeH;
              ctx.drawImage(IMG, 0, 0, resizeW, resizeH);
            }
            var base64 = canvas.toDataURL("image/" + _this.fileType, maxSize.level);
            _this.convertBlob(window.atob(base64.split(",")[1]), callback);
          };
        };
        fileReader.readAsDataURL(file);
      },
      convertBlob(base64, callback) {
        var buffer = new ArrayBuffer(base64.length);
        var ubuffer = new Uint8Array(buffer);
        for (var i = 0; i < base64.length; i++) {
          ubuffer[i] = base64.charCodeAt(i);
        }
        var blob;
        try {
          blob = new Blob([buffer], { type: "image/" + this.fileType });
        } catch (e) {
          window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder;
          if (e.name === "TypeError" && window.BlobBuilder) {
            var blobBuilder = new BlobBuilder();
            blobBuilder.append(buffer);
            blob = blobBuilder.getBlob("image/" + this.fileType);
          }
        }
        callback(blob);
      },
      random_string(len) {
        len = len || 32;
        var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
        var maxPos = chars.length;
        var pwd = "";
        for (var i = 0; i < len; i++) {
          pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
      }
    }
  }
</script>

<style scoped>

</style>
