import Phaser from 'phaser'
import FencePost from '../sprites/fence-post'
import {partitionPoints} from '../maths-box'


export default class Fence {
    constructor (game, {x,y}, phase, asset, numPosts, radius) {
        
        this.posts = new Set()

        const [xf,yf] = [
            x + (radius * Math.cos(phase)),
            y + (radius * Math.sin(phase))
        ]
        
        const pp = partitionPoints(
            [x,y],
            [xf,yf],
            numPosts
        )
        
        
        for (let i = 0; i < pp.length; i++) {
            let {x,y} = pp[i]
        	this.posts.add(new FencePost(game, x, y, 'fencePost', numPosts))
        }
        
    }

    update() {
        // redraw lines
    }

    drawLines() {}
}
