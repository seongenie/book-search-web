<template>
  <div class="book-row" @click="bookClick">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col">{{book.title}}</div>
      <div class="mdl-cell mdl-cell--5-col">{{book.contents}}</div>
      <div class="mdl-cell mdl-cell--2-col">{{authors}}</div>
      <div class="mdl-cell mdl-cell--2-col" style="text-align:right">{{book.price}} 원</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BookSearchRow',
  props: {
    book: { type: Object }
  },
  data() {
    return {
    };
  },
  methods: {
    bookClick() {
      this.$emit('bookClick', this.book);
    }
  },
  computed: {
    authors() {
      return this.book.authors.join(', ');
    }
  }
};
</script>
<style>
.book-row .mdl-grid {height:38px; border-bottom: 1px solid #cdcdcd}
.book-row:hover {background-color: lightgray; cursor: pointer;}
.book-row .mdl-cell {
  overflow:hidden; white-space: nowrap; text-overflow: ellipsis; margin-left:7px; margin-right: 7px;
}
</style>
