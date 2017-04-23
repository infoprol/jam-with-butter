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
            
        //let zenter = {x:game.world.centerX, y:game.world.centerY};

        
        let phases = [];
        for (let j = 0; j < numPlayers; j++) phases.push(j);
        
        phases = phases.map(j => j * (2 * Math.PI / numPlayers));


        this.fences = new Set()
        this.territories = new Set()

        
        phases.forEach(phase =>
            this.fences.add(new Fence(game, {x:300, y:300}, phase, asset, numPosts, planetRadius))
        );
        //this.fences.add(new Fence(game, {x:300, y:300}, Math.PI / 2, asset, 5, 256))
        //this.territories.add(new Territory(game, game.world.centerX + (i*20), game.world.centerY + (i*20), asset))

        //for (let i = 0; i < numPlayers; i++) {
        /*
        //[0, Math.PI / 2, Math.PI, 3 * Math.PI / 2].forEach(phase =>  
        [0].forEach(phase =>
            this.fences.add(new Fence(game, {x,y}, phase, asset, numPosts, planetRadius))
            //this.fences.add(new Fence(game, x, y, asset, numPosts))
        )
        */

    }
}

