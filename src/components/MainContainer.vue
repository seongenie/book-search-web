<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <BlogHeader @signout="signout"/>
    <main class="mdl-layout__content" :style="{ height: `${pageHeight}px` }">
      <div class="page-content">
        <BookSearch/>
      </div>
    </main>
    <BlogFooter></BlogFooter>
  </div>
</template>
<script>
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';
import BookSearch from './contents/book/BookSearch';
import Constant from '../constants/HttpConstant';

export default {
  name: 'MainContainer',
  components: {
    BlogHeader, BlogFooter, BookSearch
  },
  methods: {
    signout() {
      sessionStorage.clear();
      this.$router.push('login');
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
      return window.innerHeight - 114;
    }
  }
};
</script>
<style>
.mdl-layout__content {
  margin-left: 20px;
  margin-right: 20px;
  height:100%;
  position: relative;
}
.page-content {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
