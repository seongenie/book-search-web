<template>
  <div class="book-grid-header">
    <div class="mdl-grid">
      <div v-for="(item, idx) in header"
        :class="['mdl-cell', `mdl-cell--${item.width}-col`, 'book-header-col']"
        :key="`book-header-${idx}`">
        {{item.title.toUpperCase()}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'book-header',
  props: {
    header: { type: Array }
  }
};
</script>
<style>
.book-grid-header{border-top: 1px solid black;border-bottom: 1px solid black;}
.book-header-col {text-align: center}
</style>
