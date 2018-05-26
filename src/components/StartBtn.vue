<template>
  <i class="start-btn" @click="handleClick"></i>
</template>

<script>
export default {
  name: 'startBtn',
  methods: {
    handleClick () {
      this.$emit('on-click')
    }
  }
}
</script>

<style lang="less">
  .start-btn{
    display: block;
    width: 104px;
    height: 58px;
    background-image: url('../assets/imgs/start-button.png');
  }
</style>
