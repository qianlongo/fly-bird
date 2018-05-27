import Pipe from '../../components/Pipe'
import { random } from '../../utils'

const WIN_H = window.innerHeight
const BIRD_H = 24
const BIRD_T = WIN_H * 0.27
const BG_SKY_H = WIN_H * 0.78

export default {
  name: 'playing',
  data () {
    return {
      gravity: 0.25, // 重力
      velocity: 0, // 速度
      jump: -5,

      birdTimer: null,
      birdTimeDelay: 1000 / 60,
      birdTop: null,
      birdMinTop: 0,
      birdMaxTop: 0,

      pipeId: 0,
      pipeTimer: null,
      pipeTimeDelay: 1400,
      pipes: {}
    }
  },
  computed: {
    birdRotate () {
      return Math.min((this.velocity / 10) * 90, 90)
    },
    birdStyle () {
      let rotate = `rotate(${this.birdRotate}deg)`
      let top = `${this.birdTop}px`

      let transformObj = {
        top,
        transform: `${rotate}`,
        '-webkit-transform': `${rotate}`
      }

      return transformObj
    }
  },
  components: {
    Pipe
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.$bus.$emit('playState', 'running')
      this.setInitData()
      this.startGame()
    },
    setInitData () {
      this.birdTop = BIRD_T
      this.birdMaxTop = BG_SKY_H - BIRD_H
    },
    startGame () {
      this.birdTimer = setInterval(this.birdLoop, this.birdTimeDelay)
      this.pipeTimer = setInterval(this.pipeLoop, this.pipeTimeDelay)
    },
    birdJump () {
      this.velocity = this.jump
      this.$refs.bird.playAudio()
    },
    birdLoop () {
      let birdTop = this.birdTop

      this.velocity += this.gravity

      birdTop += this.velocity
      birdTop = birdTop <= this.birdMinTop ? this.birdMinTop : (birdTop >= this.birdMaxTop ? this.birdMaxTop : birdTop)

      this.birdTop = birdTop
    },
    genPipe () {
      let minPipeH = 100
      let minPadding = 140
      let maxPadding = 200
      let padidng = random(minPadding, maxPadding)
      let topPipeH = random(minPipeH, (BG_SKY_H - padidng))
      let bottomPipeH = BG_SKY_H - (padidng + topPipeH)
      let pipeId = `pipeKey${this.pipeId++}`

      return {
        topPipeH,
        bottomPipeH,
        pipeId
      }
    },
    pipeLoop () {
      let pipe = this.genPipe()

      this.pipes[ pipe.pipeId ] = pipe
    },
    handlePlaying () {
      this.birdJump()
    },
    handlePipeAnimEnd (pipeId) {
      delete this.pipes[pipeId]
    }
  }
}
