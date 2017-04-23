/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/player'
import Planet from '../sprites/planet'
import CenterPost from '../sprites/center-post'

export default class extends Phaser.State
{
    init() {}

    preload()
    {
        game.load.spritesheet('derek', 'assets/images/derek.png', 16, 32, 1);
    }

    create()
    {
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
        let postConfig = this.postConfig('tutorial');
        this.posts = [];
        for (let post in postConfig) {
            this.posts.push(new Post(this.game, post.x, post.y, 'post'));
            if (postConfig.indexOf(post) === postConfig.length / 2) {
                this.posts.push(this.centerPost);
            }
        }

        for (let post in this.posts) {
            this.game.add.existing(post);
        }
        


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
                ]
        }
    }

    defaultPosition =  {
        x: this.world.centerX,
        y: this.world.centerY + 100
    }

    centerPost = new CenterPost(this.game, this.game.world.centerX, this.game.world.centerY, 'post');
}