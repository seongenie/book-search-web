<template>
  <div :class="['mdl-spinner', 'mdl-js-spinner', isShow ? 'is-active' : '']" v-mdl/>
</template>
<script>
import SpinnerUtil from '../../../utils/SpinnerUtil';

export default {
  name: 'Spinner',
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    }
  },
  created() {
    SpinnerUtil.setSpinner(this);
  },
  destroyed() {
    SpinnerUtil.removeSpinner();
  }
};
</script>

<style>
.mdl-spinner {
  z-index: 10000;
  position: absolute;
  width:30px;
  height:30px;
  left: calc(50% - 15px);
  top: calc(50% - 15px);
}
.mdl-spinner:not(.is-upgraded).is-active:after{content:""}
</style>
