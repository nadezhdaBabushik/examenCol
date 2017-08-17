import Game from './classes/Game';
import es6Promise from 'es6-promise';
es6Promise.polyfill();

{

  const init = () => {
    startGame();
  };

  const startGame = () => {
    new Game();
  };

  init();
}
