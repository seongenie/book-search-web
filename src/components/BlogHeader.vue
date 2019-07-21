<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <div class="mdl-layout-spacer">
        <span>BOOK Search</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
        mdl-textfield--floating-label mdl-textfield--align-right">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
          <i class="material-icons" @click="signout">power_settings_new</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input
            class="mdl-textfield__input"
            type="text"
            name="sample"
            id="fixed-header-drawer-exp">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BlogHeader',
  methods: {
    signout() {
      this.$emit('signout');
    }
  }
};
</script>

<style>
.mdl-layout-spacer {
  color: #ffcd22;
  font-size: 18pt;
  font-family: 'NanumSquareRoundEB';
  vertical-align: middle;
}
.mdl-layout-spacer i {
  font-size: 15pt;
}
.mdl-layout__header {
  background: #424242;
}
</style>
