<template>
  <div class="book-search-login">
    <div class="login-header mdl-shadow--8dp">
      <h2 class="login-header-title">BOOK Search</h2>
      <h2 class="login-header-title">Login</h2>
    </div>
    <div class="login-content">
      <div class="mdl-grid">
        <TextField ref="userid" class="mdl-cell mdl-cell--12-col"
          :floating="true"
          placeHolder="ID"/>
        <TextField ref="password" class="mdl-cell mdl-cell--12-col"
          :floating="true"
          @enter="signin"
          type="password"
          placeHolder="PASSWORD"/>
        <Button title="로그인" class="mdl-cell mdl-cell--6-col" @onClick="signin"></Button>
        <Button title="회원가입" class="mdl-cell mdl-cell--6-col" @onClick="showSingup"></Button>
      </div>
    </div>
    <Dialog ref="dialog" title="회원가입" :width=500 :height=500
      :useConfirm="true"
      confirmTitle="회원가입"
      @confirm="signup">
      <Signup ref="signup" slot="content"></Signup>
    </Dialog>
  </div>
</template>
<script>
import TextField from '../../foundation/form/TextField';
import Button from '../../foundation/form/Button';
import Dialog from '../../foundation/dialog/Dialog';
import Signup from './Signup';
import userApi from '../../../api/user/UserApi';
import Constant from '../../../constants/HttpConstant';

export default {
  name: 'Login',
  components: {
    TextField, Button, Dialog, Signup
  },
  methods: {
    showSingup() {
      this.$refs.dialog.show();
    },
    async signin() {
      const userid = this.$refs.userid.value;
      const password = this.$refs.password.value;
      const response = await userApi.signin({ userid, password });
      if (response && response.data) {
        sessionStorage.setItem(Constant.TOKEN, response.data);
        this.$router.replace('search');
      } else {
        console.log('Login 실패');
      }
    },
    async signup() {
      const payload = this.$refs.signup.getValues();
      const response = await userApi.signup(payload);
      if (response && response.data) {
        alert('가입되었습니다.');
        this.$refs.dialog.close();
      } else {
        alert('오류');
      }
    },
  },
  created() {
    const token = sessionStorage.getItem(Constant.TOKEN);
    if (token) {
      this.$router.push('search');
    }
  }
};
</script>
<style>
.book-search-login {position: absolute; height:100%; width:100%;}
.book-search-login .login-header {
  position: absolute; height:320px; width:100%; background-color: #424242; color:#ffcd22
}
.book-search-login .login-header .login-header-title {
  position:relative; top:130px; text-align: center
}
.book-search-login .login-content {
  position: relative;
  top:320px;
  margin-top:30px;
  height: 500px;
  width: 360px;
  left: calc(50% - 180px);
}
</style>
