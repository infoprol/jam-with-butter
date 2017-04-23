import Phaser from 'phaser';
import FencePost from '../sprites/fence-post';

export default class Fence {
    constructor (game, posts) {
        this.game = game;
        this.posts = posts;
        this.edges = [];
        this.lines = [];
        for (let i = 0; i < posts.length - 1; i++) {
        	this.edges.push({
                post1: posts[i],
                post2: posts[i + 1]
            });
        }
    }

    update() {
    }

    drawLines() {
        this.edges.forEach(edge => {
            this.lines.push(new Phaser.Line(edge.post1.x, edge.post1.y, edge.post2.x, edge.post2.y));
        });
        var graphics = this.game.add.graphics(0, 0);

        // set a fill and line style
        graphics.lineStyle(4, 0xffd900, 1);
        graphics.moveTo(this.lines[0].start.x, this.lines[0].start.y);
        for (let i = 0; i < this.edges.length; i++) {
            graphics.lineTo(this.lines[i].end.x, this.lines[i].end.y);
        }
    }
}
