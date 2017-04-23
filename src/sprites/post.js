import Phaser from 'phaser'
export default class Post extends Phaser.Sprite {
    held = false;
    constructor (game, x, y, asset) {
        super(game, x, y, asset);
        this.x = x;
        this.y = y;
        game.physics.enable(this, Phaser.Physics.ARCADE);
        Object.defineProperties(this.body, immovable, {
            get: () => !this.held,
        });
        this.body.collideWorldBounds = true;

        this.anchor.setTo(0.5);
    }
}
/**
 * Created by jhenley on 4/22/2017.
 */
