import FUEL from '../vocab-list';
import { getRandomVocab, statusHandler, constructMatrix, evaluateMatrix } from './game-mgmt';

describe('Random vocab generator', () => {
  test('gets random vocab', () => {
    // Arrange
    const guess = getRandomVocab(FUEL);

    // Act

    // Assert
    expect(FUEL.indexOf(guess)).not.toBe(-1);
  });
});

describe('Status Handler', () => {
  test('return correct row statuses', () => {
    // Arrange
    const guess = 'arrow'.split('');
    const solution = 'error';

    // Act

    // Assert
    expect(JSON.stringify(statusHandler(guess, solution))).toBe(
      '["-incorrect","-correct","-correct","-correct","-incorrect"]',
    );
  });
});

describe('Matrix operations', () => {
  test('correctly generate a template matrix', () => {
    // Arrange
    const attempt = 'catch'.split('');
    const answer = 'throw';

    // Act

    // Assert
    expect(JSON.stringify(constructMatrix(answer, attempt))).toBe(
      '[["","t","h","r","o","w"],["c",0,0,0,0,0],["a",0,0,0,0,0],["t",0,0,0,0,0],["c",0,0,0,0,0],["h",0,0,0,0,0]]',
    );
  });

  test('evaluates matrix', () => {
    // Arrange
    const attempt = 'linus'.split('');
    const answer = 'linux';

    // Act

    // Assert
    expect(JSON.stringify(evaluateMatrix(answer, attempt))).toBe(
      '[["","l","i","n","u","x"],["l",1,0,0,0,0],["i",0,1,0,0,0],["n",0,0,1,0,0],["u",0,0,0,1,0],["s",0,0,0,0,0]]',
    );
  });
});
