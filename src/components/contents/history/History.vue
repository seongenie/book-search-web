<template>
  <div class="book-search-history">
    <strong class="history-title">검색 순위</strong>
    <div ref="top" class="history-top" @mouseover="handleMouseover">
      <div v-if="histories.length > 0">
        <span class="history-order">1</span>
        <span class="history-keyword">{{histories[0].keyword}}</span>
        <span class="history-count">{{histories[0].count}}</span>
      </div>
      <div v-else>none</div>
    </div>
    <div class="history-detail-container" :style="`display: ${detailShow}`"
      @mouseleave="handleMouseout">
      <div class="history-detail" v-for="(history, idx) in histories" :key="`history-${idx}`"
        :style="`left:${left}; top:${top};`"
      >
        <div class="history-row">
          <span class="history-order">{{idx + 1}}</span>
          <span class="history-keyword"
            @click="handleSearch(history.keyword)"
          >{{history.keyword}}</span>
          <span class="history-count">{{history.count}}</span>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
// import userApi from '../../../api/user/UserApi';
import bookApi from '../../../api/book/BookApi';

export default {
  name: 'History',
  data() {
    return {
      histories: [],
      left: 0,
      right: 0,
      detailShow: 'none'
    };
  },
  methods: {
    search() {
      this.$emit('search');
    },
    handleMouseover() {
      this.detailShow = 'block';
    },
    handleMouseout() {
      this.detailShow = 'none';
    },
    handleSearch(keyword) {
      this.$emit('search', keyword);
    },
    async refresh() {
      const response = await bookApi.getTop10Histories();
      this.histories = response.data;
    }
  },
  async mounted() {
    this.left = this.$refs.top.offsetLeft;
    this.top = this.$refs.top.offsetTop;
    // const reponse = await userApi.getMyHistories();
    const response = await bookApi.getTop10Histories();
    this.histories = response.data;
  }
};
</script>
<style>
.history-title {
  margin-left:10px;
}
.history-top {
  position: absolute;
  z-index: 10;
  padding: 3px; margin: 5px 10px; border-radius: 3px;
}
.history-top > div{margin-left: 5px;}
.history-order {color: red}
.history-row {margin:3px 10px 3px 15px;}
.history-keyword {margin-left: 15px; }
.history-keyword:hover {cursor:pointer; text-decoration: underline;}
.history-count {float: right; margin-right:10px}
.book-search-history {width: 150px;}
.history-top {
  width:150px;
  text-align: left;
  border: 1px solid #cdcdcd;
}
.history-detail-container {
  position: absolute;
  width: 200px;
  border: 1px solid #cdcdcd;
  background-color: #ffffff;
  z-index: 20;
  border-radius: 3px;
}
</style>
