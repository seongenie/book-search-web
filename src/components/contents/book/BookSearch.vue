<template>
  <div>
    <BookSearchFilter ref="filter" @search="search"></BookSearchFilter>
    <BookSearchResult :searchResult="searchResult" @pageClick="search" @bookClick="bookClick"/>
    <Dialog ref="dialog" title="책 상세정보" :width=700 :height=500>
      <BookDetail slot="content" :book="selectedBook"></BookDetail>
    </Dialog>
  </div>
</template>
<script>
import BookSearchFilter from './BookSearchFilter';
import BookSearchResult from './BookSearchResult';
import BookApi from '../../../api/book/BookApi';
import Dialog from '../../foundation/dialog/Dialog';
import BookDetail from './BookDetail';

export default {
  name: 'BookSearch',
  components: {
    BookSearchFilter, BookSearchResult, Dialog, BookDetail
  },
  data() {
    return {
      searchResult: {
        books: []
      },
      selectedBook: {
      }
    };
  },
  methods: {
    bookClick(book) {
      this.selectedBook = book;
      this.showDialog();
    },
    async search(page = 1, size = 10, sort = 'accuracy') {
      const keyword = this.$refs.filter.getSearchField();
      if (!keyword) {
        alert('검색어를 입력해주세요.');
        return;
      }
      const response = await BookApi.searchBook({
        query: keyword, page, size, sort
      });
      this.searchResult = response.data;
    },
    showDialog() {
      this.$refs.dialog.$el.showModal();
    },
    closeDialog() {
      this.$refs.dialog.$el.close();
    },
  }
};
</script>
<style>
</style>
