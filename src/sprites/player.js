import Phaser from 'phaser';
import Controller from '../core/controller';
import CharacterController from '../core/character-controller';
import Animation from '../core/animation';

export default class Player extends CharacterController
{
    constructor (game, x, y, asset)
    {
        let settings = {
            maxSpeed: 100,
            acceleration: 300,
            drag: 150
        };


        let animations = [
        {
            name: 'walking',
            frames: [0, 1, 2],
            fps: 8,
            loop: true
        }];


        let controlMap = [
        {
            name: 'moveUp',
            key: Phaser.Keyboard.W
        },
        {
            name: 'moveDown',
            key: Phaser.Keyboard.S
        },
        {
            name: 'moveLeft',
            key: Phaser.Keyboard.A
        },
        {
            name: 'moveRight',
            key: Phaser.Keyboard.D
        }];

        super(game, x, y, asset, controlMap, animations, settings);
        this.anchor.setTo(0.5);
    }
}
