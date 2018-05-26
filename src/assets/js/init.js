import StartBtn from '../../components/StartBtn'
import Bird from '../../components/Bird'

export default {
  name: 'init',
  components: {
    StartBtn,
    Bird
  },
  data () {
    return {
      name: 'qianlongo'
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.init()
    })
  },
  methods: {
    init () {
      this.$bus.$emit('playState', 'paused')
    }
  }
}
