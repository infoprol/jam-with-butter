import Phaser from 'phaser'
import Controller from '../core/controller'
import Animation from '../core/animation'


// Enums
const FacingDirection = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3 }
const CharacterState = { IDLE: 0, WALK: 1 }


export default class CharacterController extends Phaser.Sprite
{
    constructor(game, x, y, asset, controlMap, animations, settings)
    {
        super(game, x, y, asset)

        game.physics.enable(this, Phaser.Physics.ARCADE)

        this.directionFacing = FacingDirection.RIGHT
        this.characterState = CharacterState.IDLE
        this.isHolding = false


        this.settings = settings
        this.body.maxVelocity.setTo(this.settings.maxSpeed, this.settings.maxSpeed) // x, y
        this.body.drag.setTo(this.settings.drag, this.settings.drag) // x, y

        this.anim = new Animation(animations, this)
        this.ctrl = new Controller(controlMap, this.game)

        this.play('idling')


        this.ctrl.moveDown((e) => {
            this.body.acceleration.y = this.settings.acceleration
            //this.y++
            this.play('walking')
        }, () => {
          if (this.body.acceleration.y > 0) { this.body.acceleration.y = 0 }
        })

        this.ctrl.moveUp((e) => {
            this.body.acceleration.y = -this.settings.acceleration
            //this.y--
            this.play('walking')
        }, () => {
          if (this.body.acceleration.y < 0) { this.body.acceleration.y = 0 }
        })

        this.ctrl.moveLeft((e) => {
            this.body.acceleration.x = -this.settings.acceleration
            //this.x--
            this.play('walking')
        }, () => {
          if (this.body.acceleration.x < 0) { this.body.acceleration.x = 0 }
        })

        this.ctrl.moveRight((e) => {
            this.body.acceleration.x = this.settings.acceleration
            //this.x++
            this.play('walking')
        }, () => {
          if (this.body.acceleration.x > 0) { this.body.acceleration.x = 0 }
        })
    }


    update()
    {
        this.ctrl.update()
    }

}