<template>
  <div id="app">
    <router-view></router-view>
    <Spinner/>
  </div>
</template>
<script>
import Spinner from './components/foundation/process/Spinner';

export default {
  name: 'app',
  components: { Spinner }
};
</script>
<style>
/* .mdl-layout-spacer {
  color: #ffcd22;
  font-size: 18pt;
  vertical-align: middle;
} */
@font-face {
  font-family: 'NanumSquareRoundB !important';
  src: url(/fonts/NanumSquareRoundB.ttf) format('truetype');
}
@font-face {
  font-family: 'NanumSquareRoundEB !important';
  src: url(/fonts/NanumSquareRoundEB.ttf) format('truetype');
}
body {
  font-family: 'NanumSquareRoundB !important'
}
</style>
