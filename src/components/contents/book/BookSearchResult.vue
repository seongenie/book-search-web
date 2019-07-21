<template>
  <div>
    <BookHeader :header="header"></BookHeader>
    <div v-if="searchResult.books.length > 0">
      <BookSearchRow v-for="(book, idx) in searchResult.books" :key="`book-row-${idx}`"
        :book="book"
        @bookClick="bookClick">
      </BookSearchRow>
      <Pagination @pageClick="pageClick" :page="searchResult.page"></Pagination>
    </div>
    <EmptyResult v-else></EmptyResult>
  </div>
</template>
<script>
import BookHeader from './BookHeader';
import BookSearchRow from './BookSearchRow';
import EmptyResult from './EmptyResult';
import Pagination from './Pagination';

export default {
  name: 'BookSearchResult',
  components: {
    BookHeader, BookSearchRow, EmptyResult, Pagination
  },
  data() {
    return {
      header: [
        { title: '제목', width: 3 },
        { title: '소개', width: 5 },
        { title: '저자', width: 2 },
        { title: '정가', width: 2 }]
    };
  },
  props: {
    searchResult: {
      type: Object
    }
  },
  methods: {
    bookClick(book) {
      this.$emit('bookClick', book);
    },
    pageClick(pageNum) {
      this.$emit('pageClick', pageNum);
    }
  }
};
</script>
<style>
</style>
