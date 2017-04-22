import Phaser from 'phaser';
import FencePost from '../sprites/fence-post';

export default class Fence {
    constructor (game, x, y, asset) {

        this.posts = new Set();

    }

    update() {
        // redraw lines
    }

    drawLines() {}
}
