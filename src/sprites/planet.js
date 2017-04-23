import Phaser from 'phaser'
import Fence from '../sprites/fence'
import Territory from '../sprites/territory'

export default class Planet extends Phaser.Sprite {
    constructor (game, x, y, asset) {
        super(game, x, y, asset)

        // pass this arguments
        let numPlayers = 5,
            numPosts = 11,
            planetRadius = 256;

        
        let phases = [];
        for (let j = 0; j < numPlayers; j++) phases.push(j);
        
        phases = phases.map(j => j * (2 * Math.PI / numPlayers));


        this.fences = new Set()
        this.territories = new Set()

        
        phases.forEach(phase => {
            this.fences.add(new Fence(game, {x:300, y:300}, phase, asset, numPosts, planetRadius))
            this.territories.add(new Territory(game, game.world.centerX, game.world.centerY, phase))
        })
    }
}