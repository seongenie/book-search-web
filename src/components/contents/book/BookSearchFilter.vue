<template>
  <div class="search-filter">
    <TextField ref="searchField" @enter="searchClick" style="width:220px;margin-right:15px;"
      placeHolder="검색어를 입력해주세요."/>
    <Button title="검색" @onClick="searchClick"></Button>
    <History ref="history" class="page-history" @search="search"/>
  </div>
</template>
<script>
import TextField from '../../foundation/form/TextField';
import Button from '../../foundation/form/Button';
import History from '../history/History';

export default {
  name: 'BookSearchFilter',
  components: { TextField, Button, History },
  methods: {
    searchClick() {
      this.$emit('search');
    },
    getSearchField() {
      return this.$refs.searchField.value;
    },
    search(keyword) {
      this.$refs.searchField.value = keyword;
      this.$refs.searchField.$el.classList.add('is-dirty');
      this.searchClick();
    },
    refreshHistory() {
      this.$refs.history.refresh();
    }
  }
};
</script>
<style>
.search-filter {
  margin: 0px 20px 10px 20px;
  /* border: 1px solid #808080 */
}
.page-history {
  float:right;
  margin: 10px 50px;
}
</style>
