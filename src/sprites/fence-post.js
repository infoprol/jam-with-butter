import Phaser from 'phaser'

export default class FencePost extends Phaser.Sprite {
    constructor (game, x, y, asset) {
    	super(game, x, y, asset)

    	this.game.add.existing(this);

        // this.x
        // this.y
        // this.type
    }

    update() {}
}
