import Pipe from '../../components/Pipe'
import { random } from '../../utils'

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

      pipeTimer: null,
      pipeTimeDelay: 1400,
      pipes: []
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
      let gameBgGroundRect = this.getGameBgGroundRect()
      let birdRect = this.getBirdRect()

      this.birdTop = birdRect.y
      this.birdMaxTop = gameBgGroundRect.y - birdRect.height
    },
    getGameBgGroundRect () {
      let $bgGround = document.querySelector('.bg-ground')

      return $bgGround.getBoundingClientRect()
    },
    getBirdRect () {
      let refBird = this.$refs.bird
      let rect = refBird.$el.getBoundingClientRect()

      return rect
    },
    startGame () {
      this.birdTimer = setInterval(this.birdLoop, this.birdTimeDelay)
      this.pipeTimer = setInterval(this.pipeLoop, this.pipeTimeDelay)
    },
    birdJump () {
      this.velocity = this.jump
    },
    birdLoop () {
      let birdTop = this.birdTop

      this.velocity += this.gravity

      birdTop += this.velocity
      birdTop = birdTop <= this.birdMinTop ? this.birdMinTop : (birdTop >= this.birdMaxTop ? this.birdMaxTop : birdTop)

      this.birdTop = birdTop
    },
    genPipe () {
      let $bgSky = document.querySelector('.bg-sky')
      let bgSkyH = $bgSky.getBoundingClientRect().height
      let minPipeH = 100
      let minPadding = 140
      let maxPadding = 200
      let padidng = random(minPadding, maxPadding)
      let topPipeH = random(minPipeH, (bgSkyH - padidng))
      let bottomPipeH = bgSkyH - (padidng + topPipeH)

      return {
        topPipeH,
        bottomPipeH
      }
    },
    pipeLoop () {
      this.pipes.push(this.genPipe())
    },
    handlePlaying () {
      this.birdJump()
    }
  }
}
