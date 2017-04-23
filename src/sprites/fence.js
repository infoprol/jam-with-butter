import Phaser from 'phaser'
import FencePost from '../sprites/fence-post'
import {partitionPoints} from '../maths-box'


export default class Fence {
    constructor (game, {x,y}, phase, asset, numPosts, radius) {
        

        const [xf,yf] = [
            x + (radius * Math.cos(phase)),
            y + (radius * Math.sin(phase))
        ];
        
        


        
        const pp = partitionPoints(
            [x,y],
            [xf,yf],
            numPosts
        );

        console.log('PP----');
        console.log(pp);
        console.log('End PP----');
        
        this.posts = new Set()
        for (let i = 0; i < pp.length; i++) {
            let {x,y} = pp[i]

            console.log('create x/y: ' + x + '/' + y);

        	// change to x/y position of actual post position
        	this.posts.add(new FencePost(game, x, y, 'fencePost', numPosts))
        }
        
    }

    update() {
        // redraw lines
    }

    drawLines() {}
}
