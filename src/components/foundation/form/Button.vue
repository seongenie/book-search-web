<template>
  <button v-mdl
    :class="['mdl-button', 'mdl-js-button', 'mdl-button--raised',
      'mdl-button--colored', buttonClass]"
    @click="click">
  {{title}}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    title: { type: String },
    buttonClass: { type: String }
  },
  methods: {
    click() {
      this.$emit('onClick');
    }
  }
};
</script>
<style>
.mdl-button.mdl-js-button.mdl-button--raised.mdl-button--colored:hover{
  background-color: gray
}
.mdl-button.mdl-js-button.mdl-button--raised.mdl-button--colored {
  margin:5px;
  background-color: #424242;
  color: #ffcd22;
}
</style>
