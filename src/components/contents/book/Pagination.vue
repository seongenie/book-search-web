<template>
  <div class="pagination">
    <ul>
      <li v-if="page.currentPage > presentPageSize">
        <a href="#" @click="pageClick(pageNumbers[0] - 1)">&lt;</a>
      </li>
      <li v-for="pageNumber in pageNumbers" :key="`page-${pageNumber}`"
        :class="pageNumber === page.currentPage ? 'selected' : ''">
        <a href="#" @click="pageClick(pageNumber)">{{pageNumber}}</a>
      </li>
      <li v-if="(page.currentPage + presentPageSize) < page.pageTotalSize">
        <a href="#" @click="pageClick(pageNumbers[pageNumbers.length - 1 ] + 1)">&gt;</a>
      </li>
    </ul>
  </div>
</template>
<script>
import range from 'lodash/range';

export default {
  name: 'Pagination',
  data() {
    return {
      presentPageSize: 10, // 화면에 표시될 pageSize
    };
  },
  props: {
    page: { type: Object }
  },
  methods: {
    pageClick(pageNum) {
      this.$emit('pageClick', pageNum);
    }
  },
  computed: {
    pageNumbers() {
      const startPage = (parseInt(
        (this.page.currentPage - 1) / this.presentPageSize, this.presentPageSize
      ) * this.presentPageSize) + 1;
      const endPage = (startPage + this.presentPageSize) > this.page.pageTotalSize
        ? (this.page.pageTotalSize + 1) : startPage + 10;
      return range(startPage, endPage);
    }
  }
};
</script>
<style scoped>
ul {
  list-style:none;
  float:left;
  display:inline;
}
ul li {
  float:left;
}
ul li a {
  float:left;
  padding:4px;
  margin-right:3px;
  width:15px;
  color:#000;
  font:bold 12px tahoma;
  border:1px solid #eee;
  text-align:center;
  text-decoration:none;
}
ul li a:hover, ul li.selected a {
  color:#ffcd22;
  border:1px solid #424242;
  background-color:#424242;
}
.pagination {
  width: 500px;
  position: relative;
  margin-top: 50px;
  left:calc(50% - 200px);
}
</style>
