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
      <div class="mdl-cell mdl-cell--10-col">{{formattedDate}}</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">정가</div>
      <div class="mdl-cell mdl-cell--10-col">{{book.price}} 원</div>
      <div class="mdl-cell mdl-cell--2-col book-detail-label">판매가</div>
      <div class="mdl-cell mdl-cell--10-col">{{salePrice}}</div>
    </div>
  </div>
</template>
<script>
import FormatUtil from '../../../utils/FormatUtil';

export default {
  name: 'BookDetail',
  props: {
    book: { type: Object }
  },
  computed: {
    authors() {
      if (!(this.book && this.book.authors)) return '';
      return this.book.authors.join(', ');
    },
    salePrice() {
      return this.book.salePrice > 0 ? `${this.book.salePrice} 원` : '';
    },
    formattedDate() {
      return FormatUtil.formatDate(this.book.datetime);
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
