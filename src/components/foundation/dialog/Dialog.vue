<template>
  <dialog v-mdl class="mdl-dialog" :style="`width:${width}px; height:${height}px`">
    <div class="mdl-dialog__header"><span class="header-title">{{title}}</span></div>
    <div class="mdl-dialog__content">
      <slot name="content"></slot>
      <Button v-if="useConfirm" class="dialog-ok-btn" :title="confirmTitle" @onClick="confirm"/>
      <Button class="dialog-close-btn" title="닫기" @onClick="closeDialog"/>
    </div>
  </dialog>
</template>
<script>
import Button from '../form/Button';

export default {
  name: 'Dialog',
  components: { Button },
  props: {
    title: { type: String },
    width: { type: Number, default: () => 500 },
    height: { type: Number, default: () => 300 },
    useConfirm: { type: Boolean, default: () => false },
    confirmTitle: { type: String },
  },
  methods: {
    closeDialog() {
      this.$el.close();
    },
    confirm() {
      this.$emit('confirm');
    }
  }
};
</script>
<style>
.mdl-dialog {padding: 0px}
.dialog-close-btn{ position:absolute;right:10px; bottom:10px; }
.dialog-ok-btn { position:absolute; right:85px; bottom:10px; }
.mdl-dialog__header { background-color: #424242; height: 50px;}
.mdl-dialog__header .header-title {
  position: relative;
  top:calc(50% - 10px);
  margin:10px; color: #ffcd22; font-size: 16pt;
}

</style>
