/**
 * Created by jhenley on 4/22/2017.
 */
import {Post} from './post'
export class CenterPost extends Post {
    held = false;
    constructor (game, x, y, asset) {
        super(game, x, y, asset);
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.immovable = true;
        this.body.collideWorldBounds = true;

        this.anchor.setTo(0.5);
    }
}