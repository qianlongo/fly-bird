import Bird from '../../components/Bird'

export default {
  name: 'ready',
  components: {
    Bird
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.$bus.$emit('playState', 'paused')
    }
  }
}
