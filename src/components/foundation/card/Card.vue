<template>
  <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">{{title}}</h2>
    </div>
    <div class="mdl-card__supporting-text">{{text}}</div>
    <div class="mdl-card__actions mdl-card--border">
      <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
        @click="btnClick">
        {{buttonText}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String },
    text: { type: String },
    buttonText: { type: String },
  },
  methods: {
    btnClick() {
      this.$emit('btnClick', this.title);
    }
  }
};
</script>

<!-- Square card -->
<style>
.demo-card-square.mdl-card {
  width: 310px;
  height: 250px;
  float:left;
  margin:15px 0 0 15px;
  border-radius: 5%;
}
.demo-card-square > .mdl-card__title.mdl-card--expand {
  color: #fff;
  background: #424242;
  /* background:
    url('../assets/demos/dog.png') bottom right 15% no-repeat #46B6AC; */
}
/* .mdl-button { */
  /* color: black; */
  /* background: lightgoldenrodyellow; */
/* } */
/* .mdl-button.mdl-button--colored {
  color: chocolate
} */
</style>
