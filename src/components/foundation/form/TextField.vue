<template>
  <div v-mdl :class="['mdl-textfield', 'mdl-js-textfield',
    floating ? 'mdl-textfield--floating-label' : '']">
    <input class="mdl-textfield__input"
      :id="id"
      :type="type"
      :maxLength="maxLength"
      v-model="value"
      @keyup.enter="enter">
    <label class="mdl-textfield__label" :for="id">{{placeHolder}}</label>
    <span class="mdl-textfield__error">{{errorMessage}}</span>
  </div>
</template>
<script>
import v4 from 'uuid/v4';

export default {
  name: 'TextField',
  data() {
    return {
      value: ''
    };
  },
  props: {
    id: { type: String, default: () => v4() },
    type: {
      type: String,
      default: () => {
        'text';
      }
    },
    placeHolder: { type: String },
    pattern: { type: String, default: () => '' },
    maxLength: { type: Number },
    errorMessage: {
      type: String,
      default: () => 'Input value error!'
    },
    floating: { type: Boolean, default: () => false },
  },
  methods: {
    enter() {
      this.$emit('enter');
    }
  }
};
</script>
<style>
.mdl-textfield__label:after {background-color: #ffcd22;}
/* .mdl-textfield.mdl-js-textfield {margin: 5px;} */
</style>
