/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/player'
import Planet from '../sprites/planet'
import CenterPost from '../sprites/center-post'
import Post from '../sprites/post'
import Fence from '../sprites/fence'

export default class extends Phaser.State
{
    init() {}

    preload()
    {
        game.load.spritesheet('derek', 'assets/images/derek.png', 16, 32, 1);
    }

    create()
    {
        this.skip = 0;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.player = new Player(
            this.game,
            this.defaultPosition.x,
            this.defaultPosition.y,
            'derek'
        );

        this.planet = new Planet(
            this.game,
            this.world.centerX - 256,
            this.world.centerY - 256,
            'lawn'
        );

        this.game.add.existing(this.planet);
        this.game.add.existing(this.player);
        // this.game.add.existing(new Post(this.game, this.defaultPosition.x, this.defaultPosition.y, 'fencePost'))
        let postConfig = this.postConfig('tutorial');
        this.posts = [];
        for (let i = 0; i < postConfig.length; i++) {
            this.posts.push(new Post(this.game, postConfig[i].x, postConfig[i].y, 'fencePost'));
            if (i === Math.floor(postConfig.length / 2 - 1)) {
                this.posts.push(this.centerPost);
            }
        }

        for (let i = 0; i < this.posts.length; i++) {
            this.game.add.existing(this.posts[i]);
        }

        //for (let post in this.posts) this.game.add.existing(post);

        this.fence = new Fence(this.game, this.posts);
        this.fence.drawLines();


        //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function
        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    }

    render()
    {
        if (__DEV__) {
            //this.game.debug.spriteInfo(this.player, 16, 16)
        }
    }

    update() {
        for (let i = 0; i < this.posts.length; i++) {
            this.game.physics.arcade.collide(this.posts[i], this.player);
        }
        let fenceCollision = false;
        if (this.skip === 0) {
            for (let i = 0; i < this.fence.lines.length; i++) {
                let coordinates = this.fence.lines[i].coordinatesOnLine(2);
                coordinates.forEach(coor => {
                    if (!fenceCollision && this.player.getBounds().contains(coor[0], coor[1])) {
                        let vector = -1 / this.fence.lines[i].perpSlope;
                        let velocity = this.player.body.velocity;
                        velocity.x = 1.5 * -velocity.x;
                        velocity.y = 1.5 * -velocity.y;
                        fenceCollision = true;
                        this.skip = 3;
                    }
                });
                if (fenceCollision) {
                    break;
                }
            }
        } else {
           this.skip--;
        }
    }

    postConfig(difficulty) {
        switch (difficulty) {
            case 'tutorial':
                return [
                    {
                        x: this.defaultPosition.x + 100,
                        y: this.defaultPosition.y
                    },
                    {
                        x: this.defaultPosition.x - 100,
                        y: this.defaultPosition.y
                    }
                ];
            default:
                return [];
        }
    }

    get defaultPosition() {
        return {
            x: this.world.centerX,
            y: this.world.centerY + 100
        }
    }

    get centerPost() {
        return new CenterPost(this.game, this.game.world.centerX, this.game.world.centerY, 'fencePost');
    }
}