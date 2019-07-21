<template>
  <div class="header mdl-shadow--2dp">
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
.book-header-col {text-align: center}
.header.mdl-shadow--2dp {
  background-color: #ffcd22;
}
</style>
