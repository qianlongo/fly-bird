export default {
  name: 'playing',
  data () {
    return {
      gravity: 0.25, // 重力
      velocity: 0, // 速度
      birdTimer: null,
      birdTop: null,
      birdMinTop: 0,
      birdMaxTop: 0,
      birdTimeDelay: 1000 / 60,
      jump: -5
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
    handlePlaying () {
      this.birdJump()
    }
  }
}
