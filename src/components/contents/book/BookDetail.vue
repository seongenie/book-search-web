<template>
  <div class="book-detail">
    <div style="float:left; margin-right:15px;">
      <img :src="book.thumbnail"/>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--2-col book-detail-label">제목</div>
      <div class="mdl-cell mdl-cell--10-col">{{book.title}}</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">소개</div>
      <div class="mdl-cell mdl-cell--10-col book-deatil-content">{{book.contents}}</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">ISBN</div>
      <div class="mdl-cell mdl-cell--10-col">{{book.isbn}}</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">저자</div>
      <div class="mdl-cell mdl-cell--10-col">{{authors}}</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">출판사</div>
      <div class="mdl-cell mdl-cell--10-col">{{book.publisher}}</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">출판일</div>
      <div class="mdl-cell mdl-cell--10-col">{{formatDate(book.datetime)}}</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">정가</div>
      <div class="mdl-cell mdl-cell--10-col">{{book.price}} 원</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">판매가</div>
      <div class="mdl-cell mdl-cell--10-col">{{salePrice}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BookDetail',
  props: {
    book: { type: Object }
  },
  methods: {
    paddingZero(time) {
      return (''.concat(time)).padStart(2, '0');
    },
    formatDate(datetime) {
      const dateObj = new Date(datetime);
      const year = ''.concat(dateObj.getFullYear());
      const month = this.paddingZero(dateObj.getMonth() + 1);
      const date = this.paddingZero(dateObj.getDate());
      return `${year}년 ${month}월 ${date}일`;
    }
  },
  computed: {
    authors() {
      if (!(this.book && this.book.authors)) return '';
      return this.book.authors.join(', ');
    },
    salePrice() {
      return this.book.salePrice > 0 ? `${this.book.salePrice} 원` : '';
    }
  }
};
</script>
<style>
.book-detail-label{color:black;}
.book-deatil-content {
  max-height:100px; overflow-wrap: normal; overflow: auto; text-overflow: ellipsis;
}
</style>
