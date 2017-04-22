import Phaser from 'phaser';
import FencePost from '../sprites/fence-post';

export default class Fence {
    constructor (game, x, y, asset, numPosts) {

        this.posts = new Set();

        for (let i = 0; i < numPosts; i++) {
        	this.posts.add(new FencePost(game, x, y, asset, numPosts));
        }
    }

    update() {
        // redraw lines
    }

    drawLines() {}
}
