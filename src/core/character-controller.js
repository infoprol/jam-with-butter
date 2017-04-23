import Phaser from 'phaser';
import Controller from '../core/controller';
import Animation from '../core/animation';


// Enums
const FacingDirection = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3 };
const CharacterState = { IDLE: 0, WALK: 1 };


export default class CharacterController extends Phaser.Sprite
{
    constructor(game, x, y, asset, controlMap, animations, settings)
    {
        super(game, x, y, asset);

        game.physics.enable(this, Phaser.Physics.ARCADE);

        this.directionFacing = FacingDirection.RIGHT;
        this.characterState = CharacterState.IDLE;
        this.isHolding = false;


        this.settings = settings;
        this.body.maxVelocity.setTo(this.settings.maxSpeed, this.settings.maxSpeed); // x, y
        this.body.drag.setTo(this.settings.drag, this.settings.drag); // x, y
        this.body.bounce.setTo(1,1);
        this.body.collideWorldBounds = true;

        this.anim = new Animation(animations, this);
        this.ctrl = new Controller(controlMap, this.game);


        this.ctrl.moveDown(() => {
          console.log('down event')
            this.body.acceleration.y = this.settings.acceleration;
            //this.y++;
            this.play('walking');
        });

        this.ctrl.moveUp(() => {
            this.body.acceleration.y = -this.settings.acceleration;
            //this.y--;
            this.play('walking');
        });

        this.ctrl.moveLeft(() => {
            this.body.acceleration.x = -this.settings.acceleration;
            //this.x--;
            this.play('walking');
        });

        this.ctrl.moveRight(() => {
            this.body.acceleration.x = this.settings.acceleration;
            //this.x++;
            this.play('walking');
        });
    }


    update()
    {
        this.ctrl.update();
    }

}