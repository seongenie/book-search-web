<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <BookHeader @signout="signout"/>
    <main class="mdl-layout__content" :style="{ height: `${pageHeight}px` }">
      <div class="page-content">
        <BookSearch/>
      </div>
    </main>
    <BookFooter></BookFooter>
  </div>
</template>
<script>
import BookHeader from './BookHeader';
import BookFooter from './BookFooter';
import BookSearch from './contents/book/BookSearch';
import Constant from '../constants/HttpConstant';

export default {
  name: 'MainContainer',
  components: {
    BookHeader,
    BookFooter,
    BookSearch
  },
  methods: {
    signout() {
      sessionStorage.clear();
      setTimeout(() => {
        window.location.href = 'login';
      }, 100);
    }
  },
  created() {
    const token = sessionStorage.getItem(Constant.TOKEN);
    if (!token) {
      this.$router.push('login');
    }
  },
  computed: {
    pageHeight() {
      return 800;
      // return window.innerHeight - 114;
    }
  }
};
</script>
<style>
.mdl-layout__content {
  margin: 5px 20px 5px 20px;
  /* margin-right: 20px;
  height:100%;
  position: relative; */
}
.page-content {
  position: absolute;
  width: 100%;
  /* height: 100%; */
}
</style>
