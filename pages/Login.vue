<template>
  <div class="login-page" style="width:100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  //import { requestLogin } from '../api/api';
  //import NProgress from 'nprogress';
  import cookie from 'js-cookie';

  import {baseUrl} from '../static/global';

  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: false
      };
    },
    mounted(){
        console.log("mounted");

/*      axios.get('http://auth.purestart.com.cn/')
          .then((res) => {
          console.log(res);
          //store.commit('setStars', res.data)
      });*/
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            //NProgress.start();
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };


            let twoHrs = new Date(new Date().getTime() + 120 * 60 * 1000);

            //Cookies.set('focus', focusFlag, { expires: twoHrs });
            //cookie.set('userId', "888",{ expires: twoHrs });

            //this.$router.push({path:"/home"});

            let url=baseUrl+"/users/login";
            // console.log(this.$axios)
            this.$axios.get(url,{
              params:loginParams
            }).then( res => {
              console.log(res);
              this.logining=false;
                if(res.data.success){

                  let twoHrs = new Date(new Date().getTime() + 120 * 60 * 1000);
                  let user=res.data.user;
                  this.$store.commit('login', {user:user});//this.$store.state.user=user;
                  //Cookies.set('focus', focusFlag, { expires: twoHrs });
                  cookie.set('userId', user.id,{ expires: twoHrs });

                  var objStr = JSON.stringify(user);
                  window.localStorage.setItem('login_user',objStr);

                  this.$message({
                    message: "登录成功",
                    type: 'success'
                  });
                  this.$router.push({path:"/home"});
                }else{
                  this.$message({
                    message: res.data.errMsg,
                    type: 'error'
                  });
                }
            });

/*            requestLogin(loginParams).then(data => {
              this.logining = false;
              //NProgress.done();
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ path: '/table' });
              }
            });*/
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
 .login-page{
    background: url(/static/login_bg1.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .login-container {
/*    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
/*    margin: 180px auto;*/
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  }
</style>
