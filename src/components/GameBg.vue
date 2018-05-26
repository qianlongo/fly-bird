<template>
  <!-- 游戏背景 -->
  <div class="fly-bird-bg">
    <div :class="[ 'bg-sky', `${playStateClass}` ]"></div>
    <div :class="[ 'bg-ground', `${playStateClass}` ]"></div>
  </div>
</template>

<script>
export default {
  name: 'gameBg',
  props: {
    playState: {
      type: String,
      default: 'running'
    }
  },
  computed: {
    playStateClass () {
      return `animate-state-${this.playState}`
    }
  }
}
</script>

<style lang="less">
  @import '../assets/less/common.less';
  @import '../assets/less/animation.less';

  .fly-bird-bg{
    height: 100%;

    .bg-sky{
      height: 78%;
      background-image: url('../assets/imgs/background-1.png');
      background-color: #068cfd;
      background-repeat: repeat-x;
      background-position: 0 100%;
      .animate-sky();
    }

    .bg-ground{
      height: 22%;
      background-image: url('../assets/imgs/ground.png');
      background-color: #825705;
      background-repeat: repeat-x;
      background-position: 0 0;

      .animate-ground();
    }
  }
</style>
