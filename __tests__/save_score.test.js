import saveScore from '../src/js/functions/save_score';

describe(`Save Score Function`, () => {
  it(`returns a boolean with a fetch`, () => {
    return saveScore()
    .then(result => {
      expect(result).toBeDefined();
    });
  });
  it(`returns false when not submitting a score with a fetch`, () => {
    return saveScore()
    .then(result => {
      expect(result).toBe(false);
    });
  });
  it(`returns true when submitting a score with a fetch`, () => {
    return saveScore(200)
    .then(result => {
      expect(result).toBe(true);
    });
  });
});
