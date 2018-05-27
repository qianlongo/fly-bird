import StartBtn from '../../components/StartBtn'

export default {
  name: 'init',
  components: {
    StartBtn
  },
  data () {
    return {
      name: 'qianlongo'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.$bus.$emit('playState', 'running')
    },
    handleStart () {
      this.$router.push({
        name: 'ready'
      })
    }
  }
}
