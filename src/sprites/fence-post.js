import Phaser from 'phaser'

export default class FencePost extends Phaser.Sprite {
    constructor (game, x, y, asset) {
    	super(game, x, y, asset)

    	this.anchor.setTo(0.5)
    	this.game.middleLayer.add(this)

        // this.x
        // this.y
        // this.type
    }

    update() {}
}
