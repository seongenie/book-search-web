<template>
  <div class="dialog-container">
    <div class="dialog-overlay" :style="`display:${isShow}`"></div>
    <dialog v-mdl class="mdl-dialog"
      :style="`width:${width}px; height:${height}px;
      left:calc(50% - ${width/2}px); top:calc(50% - ${height/2}px); display:${isShow}`">
      <div class="mdl-dialog__header"><span class="header-title">{{title}}</span></div>
      <div class="mdl-dialog__content">
        <slot name="content"></slot>
        <Button v-if="useConfirm" class="dialog-ok-btn" :title="confirmTitle" @onClick="confirm"/>
        <Button class="dialog-close-btn" title="닫기" @onClick="close"/>
      </div>
    </dialog>
  </div>
</template>
<script>
import Button from '../form/Button';

export default {
  name: 'Dialog',
  components: { Button },
  data() {
    return {
      isShow: 'none'
    };
  },
  props: {
    title: { type: String },
    width: { type: Number, default: () => 500 },
    height: { type: Number, default: () => 300 },
    useConfirm: { type: Boolean, default: () => false },
    confirmTitle: { type: String },
  },
  methods: {
    show() {
      this.isShow = 'block';
    },
    close() {
      this.isShow = 'none';
    },
    confirm() {
      this.$emit('confirm');
    }
  }
};
</script>
<style>
.dialog-overlay{
  position:fixed;top:0;left:0;width:100%;height:100%;
  z-index:100;
  background-color:#000000;
  opacity: 0.5;
}
.mdl-dialog {position: fixed; padding: 0px; margin:0px;z-index:200;background-color: #ffffff;}
.dialog-close-btn{ position:absolute;right:10px; bottom:10px; }
.dialog-ok-btn { position:absolute; right:85px; bottom:10px; }
.mdl-dialog__header { background-color: #424242; height: 50px;}
.mdl-dialog__header .header-title {
  position: relative;
  top:calc(50% - 10px);
  margin:10px; color: #ffcd22; font-size: 16pt;
}

</style>
