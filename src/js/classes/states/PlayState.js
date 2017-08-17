const TARGET_SPEED = 100;
const BULLET_VELOCITY = 500;
let DOWN = true;
let SHOT = false;
export default class PlayState extends Phaser.State {

  init() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
  }
  create() {
    this.setupCannon();
    this.setupTargets();
    this.time.events.loop(1000, this.switchSides, this);
  }
  update() {
    this.moveCannon();
    this.moveTargets();
    this.checkInput();

  }
  setupCannon() {
    this.cannon = this.add.tileSprite(0, this.game.input.y, 70, 70, `sprites`, `cannon`);
  }
  moveCannon() {
    this.cannon.y = this.game.input.y;
  }
  createTargets(x, y) {
    const target = this.add.sprite(x, y, `sprites`, `blue`);
    target.enableBody = true;
    this.physics.arcade.enable(target);
    return target;
  }
  setupTargets() {
    this.targets = [
      this.createTargets(this.game.width - 70, 70),
      this.createTargets(this.game.width - 70, 140),
      this.createTargets(this.game.width - 70, 210),
      this.createTargets(this.game.width - 70, 280),
      this.createTargets(this.game.width - 70, 350)
    ];
  }
  moveTargets() {
    if (DOWN) {
      this.targets.forEach(target => {
        target.body.velocity.y = TARGET_SPEED;
      });
    } else {
      this.targets.forEach(target => {
        target.body.velocity.y = - TARGET_SPEED;
      });
    }
  }

  switchSides() {
    if (DOWN) {
      DOWN = false;
    } else {
      DOWN = true;
    }
  }
  shoot() {
    if (SHOT === false) {
      this.bullet = this.add.sprite(70, this.game.input.y, `sprites`, `bullet`);
      this.bullet.anchor.setTo(0.5, 0.5);
      this.physics.arcade.enable(this.bullet);
      this.bullet.body.velocity.x = BULLET_VELOCITY;
    }
    SHOT = true;
  }
  checkInput() {
    this.game.input.onDown.add(this.shoot, this);
  }

}
