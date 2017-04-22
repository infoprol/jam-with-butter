import Phaser from 'phaser'
import FencePost from '../sprites/fence-post'

export default class Fence {
    constructor (game, x, y, asset, numPosts) {

        this.posts = new Set()

        for (let i = 0; i < numPosts; i++) {

        	// change to x/y position of actual post position
        	this.posts.add(new FencePost(game, x+(i*10), y+(i*10), 'fencePost', numPosts))
        }
    }

    update() {
        // redraw lines
    }

    drawLines() {}
}
