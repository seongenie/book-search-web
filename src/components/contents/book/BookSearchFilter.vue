<template>
  <div class="search-filter">
    <TextField ref="searchField" @enter="searchClick" style="width:220px;margin-right:15px;"
      placeHolder="검색어를 입력해주세요."/>
    <Button title="검색" @onClick="searchClick"></Button>
  </div>
</template>
<script>
import TextField from '../../foundation/form/TextField';
import Button from '../../foundation/form/Button';

export default {
  name: 'BookSearchFilter',
  components: { TextField, Button },
  methods: {
    searchClick() {
      this.$emit('search');
    },
    getSearchField() {
      return this.$refs.searchField.value;
    }
  }
};
</script>
<style>
.search-filter {
  margin: 10px 20px 10px 20px;
  /* border: 1px solid #808080 */
}
</style>
