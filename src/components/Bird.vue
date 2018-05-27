<template>
  <div class="base-bird">
    <audio ref="audio">
      <source src="../assets/imgs/flap.mp3" type="audio/mp3">
    </audio>
  </div>
  
</template>

<script>
export default {
  name: 'bird',
  methods: {
    playAudio () {
      this.$refs.audio.play()
    }
  }
}
</script>

<style lang="less">
  @import url('../assets/less/animation.less');

  .base-bird{
    display: inline-block;
    width: 34px;
    height: 24px;
    background-image: url('../assets/imgs/bird.png');
    .animate-init-bird();
  }
</style>
