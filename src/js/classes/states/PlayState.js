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
    this.checkCollisions();
  }
  setupCannon() {
    this.cannon = this.add.tileSprite(0, this.game.input.y, 70, 70, `sprites`, `cannon`);
  }
  moveCannon() {
    this.cannon.y = this.game.input.y;
  }
  createTarget(x, y) {
    const target = this.add.sprite(x, y, `sprites`, `blue`);
    //this.target.rotation = Phaser.Math.degToRad(90deg);
    this.physics.arcade.enable(target);
    return target;
  }
  setupTargets() {
    this.targets = [
      this.createTarget(this.game.width - 70, 70),
      this.createTarget(this.game.width - 70, 140),
      this.createTarget(this.game.width - 70, 210),
      this.createTarget(this.game.width - 70, 280),
      this.createTarget(this.game.width - 70, 350)
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

  checkCollisions() {
    this.physics.arcade.collide(this.bullet, this.targets[0], this.hitTarget, null, this);
    this.physics.arcade.collide(this.bullet, this.targets[1], this.hitTarget2, null, this);
    this.physics.arcade.collide(this.bullet, this.targets[2], this.hitTarget3, null, this);
    this.physics.arcade.collide(this.bullet, this.targets[3], this.hitTarget4, null, this);
    this.physics.arcade.collide(this.bullet, this.targets[4], this.hitTarget5, null, this);
    if (this.bullet) {
      if (this.bullet.x > this.game.width) {
        this.gameOver();
      }
    }
  }
  randomResult() {
    const random = this.game.rnd.integerInRange(1);
    if (random === 1) {
      return false;
    } else {
      return true;
    }
  }
  hitTarget(bullet, target) {
    bullet.kill();
    target.kill();

    if (this.randomResult()) {
      this.bluePressed();
    } else {
      this.gameOver();
    }
  }
  hitTarget2(bullet, target) {
    bullet.kill();
    target.kill();

    if (this.randomResult()) {
      this.bluePressed();
    } else {
      this.gameOver();
    }
  }
  hitTarget3(bullet, target) {
    bullet.kill();
    target.kill();

    if (this.randomResult()) {
      this.bluePressed();
    } else {
      this.gameOver();
    }
  }
  hitTarget4(bullet, target) {
    bullet.kill();
    target.kill();

    if (this.randomResult()) {
      this.bluePressed();
    } else {
      this.gameOver();
    }
  }
  hitTarget5(bullet, target) {
    bullet.kill();
    target.kill();

    if (this.randomResult()) {
      this.bluePressed();
    } else {
      this.gameOver();
    }
  }

  bluePressed() {
    this.text = this.add.bitmapText(this.world.width / 2, this.world.height / 2, `flappyfont`, `blue pressed`, 60);
    this.text.anchor.set(0.5, 0.5);
  }
  gameOver() {
    this.text = this.add.bitmapText(this.world.width / 2, this.world.height / 2, `flappyfont`, `You loose`, 80);
    this.text.anchor.set(0.5, 0.5);
  }
  render() {

  }


}
