import Phaser from 'phaser';
import Fence from '../sprites/fence';

export default class Planet extends Phaser.Sprite {
    constructor (game, x, y, asset) {
        super(game, x, y, asset);

        // pass this as argument
        let noPlayers = 2;

        this.fences = new Set();
        this.territories = new Set();

        for (let i = 0; i < noPlayers; i++) {
            this.fences.add(new Fence(game, x, y, asset));
        }

        console.log(this.fences);
    }
}
