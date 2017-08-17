import BootState from './states/BootState';
import PreloadState from './states/PreloadState';
import PlayState from './states/PlayState';

export default class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, `content`);
    this.state.add(`Boot`, BootState);
    this.state.add(`Preload`, PreloadState);
    this.state.add(`Play`, PlayState);
    this.state.start(`Boot`);
  }
}
