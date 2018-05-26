<template>
  <i class="bird"></i>
</template>

<script>
export default {

}
</script>

<style lang="less">
  @import url('../assets/less/animation.less');

  .bird{
    display: inline-block;
    width: 34px;
    height: 24px;
    background-image: url('../assets/imgs/bird.png');
    .animate-init-bird();
  }
</style>
