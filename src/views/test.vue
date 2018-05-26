<template>
  <div class="test">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      name: 'qianlongo'
    }
  }
}
</script>

<style lang="less">
  .test{
    color: red;
  }
</style>
