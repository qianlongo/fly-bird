<template>
  <div class="game-init">
    <div class="init-title">
      <i class="init-title-icon"></i>
      <Bird class="init-bird" />
    </div>
    <StartBtn 
      class="center"
      @on-click="handleStart"
    />
  </div>
</template>

<style lang="less" src="../assets/less/init.less"></style>
<script src="../assets/js/init.js"></script>
