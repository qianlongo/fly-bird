<template>
  <div id="app" class="fly-bird">
    <GameBg />
    <router-view/>
  </div>
</template>
<script>
import GameBg from './components/GameBg'

export default {
  name: 'app',
  components: {
    GameBg
  }
}
</script>

<style lang="less">
  @import './assets/less/reset.less';
  @import './assets/less/base.less';
</style>
