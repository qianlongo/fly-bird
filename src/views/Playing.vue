<template>
  <div class="game-playing" @touchstart="handlePlaying">
    <Bird 
      class="playing-bird"
      ref="bird"
      :style="birdStyle"
    />
  </div>
</template>

<style lang="less" src="../assets/less/playing.less"></style>
<script src="../assets/js/playing.js"></script>
