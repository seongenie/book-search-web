<template>
  <header class="book-search-header">
    <div class="mdl-layout__header-row">
      <div class="mdl-layout-spacer">
        <span>BOOK Search</span>
      </div>
      <div class="mdl-icon-container">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
          <i class="material-icons" @click="showMyHistory">history</i>
        </label>
        <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
          <i class="material-icons" @click="signout">power_settings_new</i>
        </label>
      </div>
    </div>
    <Dialog ref="dialog" title="나의 검색이력" :width=600 :height=500>
      <MyHistory slot="content" :histories="histories"></MyHistory>
    </Dialog>
  </header>
</template>
<script>
import MyHistory from './contents/history/MyHistory';
import Dialog from './foundation/dialog/Dialog';
import userApi from '../api/user/UserApi';

export default {
  name: 'BookHeader',
  components: { MyHistory, Dialog },
  data() {
    return {
      histories: []
    };
  },
  methods: {
    signout() {
      this.$emit('signout');
    },
    async showMyHistory() {
      const response = await userApi.getMyHistories();
      this.histories = response.data;
      this.$refs.dialog.show();
    }
  }
};
</script>

<style>
.book-search-header {
  background: #424242;
}
.mdl-icon-container {position: relative; top:0}
.book-search-header .material-icons {color: #ffcd22; position:relative}
.mdl-layout-spacer {
  color: #ffcd22;
  font-weight: bold;
  font-size: 18pt;
  font-family: 'NanumSquareRoundEB';
  vertical-align: middle;
}
.mdl-layout__header-row {
  padding-left: 30px;
}
.mdl-icon-container label i.material-icons {
  left: 12px;
  top: 12px;
}
.mdl-layout__header {
  background: #424242;
}
</style>
