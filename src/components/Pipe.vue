<template>
  <div class="pipe">
    <i class="pipe-top"></i>
    <i class="pipe-bottom"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .pipe{
    position: absolute;
    left: 0;
    top: 0;
    height: 78%;

    i{
      display: inline-block;
      position: absolute;
    }

    .pipe-top{
      width: 52px;
      height: 147px;
      top: 0;
      background-image: url('../assets/imgs/pipes.png');
      background-position: 0 100%;
    }

    .pipe-bottom{
      width: 52px;
      height: 183px;
      bottom: 0;
      background-image: url('../assets/imgs/pipes.png');
      background-position: 52px 0%;
    }
  }
</style>
