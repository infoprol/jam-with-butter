import Phaser from 'phaser'
import Fence from '../sprites/fence'

export default class Planet extends Phaser.Sprite {
    constructor (game, x, y, asset) {
        super(game, x, y, asset)

        // pass this arguments
        let numPlayers = 3,
            numPosts = 5,
            planetRadius = 512;
            
        //let zenter = {x:game.world.centerX, y:game.world.centerY};

        


        this.fences = new Set()
        this.territories = new Set()


        this.fences.add(new Fence(game, {x:300, y:300}, Math.PI / 2, asset, 5, 256));

        //for (let i = 0; i < numPlayers; i++) {
        /*
        //[0, Math.PI / 2, Math.PI, 3 * Math.PI / 2].forEach(phase =>  
        [0].forEach(phase =>
            this.fences.add(new Fence(game, {x,y}, phase, asset, numPosts, planetRadius))
            //this.fences.add(new Fence(game, x, y, asset, numPosts))
        )
        */

        console.log(this.fences)
    }
}
