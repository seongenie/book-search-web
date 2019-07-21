<template>
  <div class="book-search-signup">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col label">ID</div>
      <TextField ref="id" class="mdl-cell mdl-cell--9-col"
        placeHolder="ID를 입력해주세요."/>
      <div class="mdl-cell mdl-cell--3-col label">PASSWORD</div>
      <TextField ref="password" class="mdl-cell mdl-cell--9-col" type="password"
        placeHolder="비밀번호를 입력해주세요."/>
      <div class="mdl-cell mdl-cell--3-col label">이름</div>
      <TextField ref="username" class="mdl-cell mdl-cell--9-col"
        placeHolder="이름을 입력해주세요."/>
    </div>
  </div>
</template>
<script>
import TextField from '../../foundation/form/TextField';

export default {
  name: 'Signup',
  components: { TextField },
  methods: {
    getValues() {
      return {
        userid: this.$refs.id.value,
        password: this.$refs.password.value,
        username: this.$refs.username.value,
      };
    }
  }
};
</script>
<style>
.book-search-signup .mdl-cell.mdl-cell--3-col.label {
  padding: 20px 0px;
  line-height:25px;
  color: black;
}
</style>
