<template>
  <div class="game-ready" @click="switchToPagePlaying">
    <i class="ready-title-icon"></i>
    <Bird 
      class="ready-bird"
    />
    <i class="ready-instructions"></i>
  </div>
</template>

<style lang="less" src="../assets/less/ready.less"></style>
<script src="../assets/js/ready.js"></script>
