<template>
  <div class="my-search-history">
    <div class="mdl-grid label">
      <div class="mdl-cell mdl-cell--1-col label">순번</div>
      <div class="mdl-cell mdl-cell--6-col label">키워드</div>
      <div class="mdl-cell mdl-cell--5-col label">검색시간</div>
    </div>
    <div v-for="(history, idx) in histories" :key="`history-${idx}`"
      class="mdl-grid">
      <div class="mdl-cell mdl-cell--1-col">{{idx + 1}}</div>
      <div class="mdl-cell mdl-cell--6-col">{{history.keyword}}</div>
      <div class="mdl-cell mdl-cell--5-col">{{formatDate(history.updateDate)}}</div>
    </div>
  </div>
</template>
<script>
import FormatUtil from '../../../utils/FormatUtil';

export default {
  name: 'MyHistory',
  props: {
    histories: { type: Array }
  },
  methods: {
    formatDate(date) {
      return FormatUtil.formatDateTime(date);
    }
  }
};
</script>
<style>
.my-search-history {height: 350px; overflow: auto;}
.my-search-history .mdl-grid.label {border-bottom: 1px solid #000}
.my-search-history .mdl-grid {margin:0; padding:0;border-bottom: 1px solid #ccc;text-align: center;}
.my-search-history .mdl-grid .label { color: #000; }
</style>
