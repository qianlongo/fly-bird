<template>
  <div class="pipe" ref="pipe">
    <i class="pipe-top" :style="topPipeStyle"></i>
    <i class="pipe-bottom" :style="bottomPipeStyle"></i>
  </div>
</template>

<script>
export default {
  name: 'pipe',
  props: {
    pipeId: {
      type:[ String, Number ]
    },
    topPipeH: {
      type:[ String, Number ]
    },
    bottomPipeH: {
      type:[ String, Number ]
    }
  },
  computed: {
    topPipeStyle () {
      let height = `${this.topPipeH}px`

      return {
        height
      }
    },
    bottomPipeStyle () {
      let height = `${this.bottomPipeH}px`

      return {
        height
      }
    }
  },
  mounted () {
    this.pipeAnimEnd()
  },
  methods: {
    pipeAnimEnd () {
      const animEnd = () => {
        this.$emit('on-anim-end', this.pipeId)
      }

      this.$refs.pipe.addEventListener('animationend', animEnd)
      this.$refs.pipe.addEventListener('webkitAnimationEnd', animEnd)
    }
  }
}
</script>

<style lang="less">
  @import url('../assets/less/animation.less');

  .pipe{
    position: absolute;
    left: -100px;
    top: 0;
    height: 78%;

    .animate-pipe();

    i{
      display: inline-block;
      position: absolute;
    }

    .pipe-top{
      width: 52px;
      top: 0;
      background-image: url('../assets/imgs/pipes.png');
      background-position: 0 100%;
    }

    .pipe-bottom{
      width: 52px;
      bottom: 0;
      background-image: url('../assets/imgs/pipes.png');
      background-position: 52px 0%;
    }
  }
</style>
