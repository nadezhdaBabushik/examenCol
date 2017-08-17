export default class BootState extends Phaser.State {

  preload() {
    this.load.spritesheet(`preloader`, `assets/images/preloader.png`, 222, 4);
  }
  create() {
    this.state.start(`Preload`);
    console.log(`booted`);
  }
}
