export default class PreloadState extends Phaser.State {

  init() {
    this.preloader = this.add.sprite(this.game.width / 2, this.game.height / 2, `preloader`);
    this.preloader.animations.add(`preloading`);
    this.preloader.animations.play(`preloading`, 30, true);
    this.preloader.anchor.setTo(0.5, 0.5);
  }
  preload() {
    this.load.bitmapFont(`flappyfont`, `assets/fonts/flappyfont/flappyfont.png`,
      `assets/fonts/flappyfont/flappyfont.fnt`);
    this.load.atlasJSONHash(`sprites`, `assets/images/sprites.png`,
      `assets/images/sprites.json`);
  }
  loadUpdate() {

  }
  create() {
    this.state.start(`Play`);
  }

}
