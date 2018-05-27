export default {
  name: 'ready',
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.$bus.$emit('playState', 'paused')
    },
    switchToPagePlaying () {
      this.$router.push({
        name: 'playing'
      })
    }
  }
}
