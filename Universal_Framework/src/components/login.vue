<template>
  <div id="global-card">
    <el-card class="card-sty" shadow="hover">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="登录名" prop="name">
          <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      var validatename = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('登录名不可以为空'))
        } else {
          callback();
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: '',
          checkPass: '',
        },
        rules: {
          name: [
            {validator: validatename, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        }
      };
    },
    mounted() {
      localStorage.clear();
    },
    methods: {
      /**
       * @function submitForm 验证登录信息
       * @param formName
       */
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login(this.ruleForm.name, this.ruleForm.pass)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      login(name, password) {
        this.$axios.post('api/login.do', {name: name, password: password}).then((res) => {
          if (res.data.code === 200) {
            sessionStorage.setItem('loginName', name)
            sessionStorage.setItem('password', password)
            this.$router.push({path: '/main'})
          }
        }).catch((error) => {
          console.info(error)
        })
      },
      /**
       * @function resetForm 重置登录信息
       * @param formName
       */
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
  #global-card {
    display: flex;
    width: 100%;
    height: 500px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .card-sty {
    width: 40%;
  }
</style>
