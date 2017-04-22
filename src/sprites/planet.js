import Phaser from 'phaser';
import Fence from '../sprites/fence';

export default class Planet extends Phaser.Sprite {
    constructor (game, x, y, asset) {
        super(game, x, y, asset);

        // pass this arguments
        let numPlayers = 3,
            numPosts = 5;

        this.fences = new Set();
        this.territories = new Set();

        for (let i = 0; i < numPlayers; i++) {
            this.fences.add(new Fence(game, x, y, asset, numPosts));
        }

        console.log(this.fences);
    }
}
