/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/player'
import Planet from '../sprites/planet'

export default class extends Phaser.State
{
    init() {}

    preload()
    {
        game.load.spritesheet('matt', 'assets/images/matt.png', 16, 32, 4)
    }

    create()
    {
        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        this.game.bottomLayer = game.add.group()
        this.game.middleLayer = game.add.group()
        this.game.topLayer = game.add.group()

        this.player = new Player(
            this.game,
            this.world.centerX,
            this.world.centerY,
            'matt'
        );

        this.planet = new Planet(
            this.game,
            this.world.centerX - 256,
            this.world.centerY - 256,
            'lawn'
        );

        this.game.bottomLayer.add(this.planet)
        this.game.middleLayer.add(this.player)
        


        //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function
        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP)
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    }

    render()
    {
        if (__DEV__) {
            //this.game.debug.spriteInfo(this.player, 16, 16)
        }
    }
}
