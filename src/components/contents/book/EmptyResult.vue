<template>
  <div class="empty-result"> 검색 결과가 없습니다.<br/> 검색어 입력 후 검색해주세요. </div>
</template>
<script>
export default {
  name: 'EmptyResult'
};
</script>
<style>
.empty-result {
  text-align: center;
  position: absolute;
  margin-top: 30px;
  left: calc(50% - 100px);
}
</style>
