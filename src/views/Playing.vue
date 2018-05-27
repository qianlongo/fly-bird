<template>
  <div class="game-playing" @touchstart="handlePlaying">
    <Pipe 
      v-for="(pipe, index) in pipes"
      :key="index"
      :topPipeH="pipe.topPipeH"
      :bottomPipeH="pipe.bottomPipeH"
    />
    <Bird 
      class="playing-bird"
      ref="bird"
      :style="birdStyle"
    />
  </div>
</template>

<style lang="less" src="../assets/less/playing.less"></style>
<script src="../assets/js/playing.js"></script>
