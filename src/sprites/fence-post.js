import Phaser from 'phaser'

export default class FencePost extends Phaser.Sprite {
    constructor (game, x, y, asset) {

    	console.log('x:'+x )
    	console.log('y:'+y )
    	console.log('----' )

    	super(game, x, y, asset)

    	this.game.middleLayer.add(this);

        // this.x
        // this.y
        // this.type
    }

    update() {}
}
