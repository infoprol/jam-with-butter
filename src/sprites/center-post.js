/**
 * Created by jhenley on 4/22/2017.
 */
import Post from './post'
export default class CenterPost extends Post {
    held = false;
    constructor (game, x, y, asset) {
        super(game, x, y, asset);

        this.anchor.setTo(0.5);
    }
}