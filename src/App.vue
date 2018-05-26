<template>
  <div id="app" class="fly-bird">
    <GameBg 
      :playState="playState"
    />
    <router-view/>
  </div>
</template>
<script>
import GameBg from './components/GameBg'

export default {
  name: 'app',
  data () {
    return {
      playState: 'running'
    }
  },
  components: {
    GameBg
  },
  mounted () {
    this.changeGameBgAnimState()
  },
  methods: {
    changeGameBgAnimState () {
      this.$bus.$on('playState', (playState = 'running') => {
        this.playState = playState
      })
    }
  }
}
</script>

<style lang="less">
  @import './assets/less/reset.less';
  @import './assets/less/base.less';
</style>
