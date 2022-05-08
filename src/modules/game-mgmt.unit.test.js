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

// The test for the player data handler functions should be considered
// For integration testing and good practice for mocking localStorage

/* describe('Player data handlers', () => {
  test('initialize, update, and push lifetime stats to localStorage for new players (failed)', () => {
    // Arrange
    const turn = 0;
    const winStatus = false;

    window.localStorage = jest.fn();
    window.localStorage.getItem('lifetime-stats');

    // Act

    // Assert
    expect(handlePlayerData(turn, winStatus)).not.toBe();
  });

  test('initialize, update, and push lifetime stats to localStorage for new players (succeeded)', () => {
    // Arrange
    const turn = 3;
    const winStatus = true;

    // Act

    // Assert
    expect(handlePlayerData(turn, winStatus)).not.toBe();
  });

  test('read in, update, and push lifetime stats to localStorage for returning players (failed)', () => {
    // Arrange

    // Act

    // Assert
    expect(gameSaveHandler()).not.toBe();
  });
  test('read in, update, and push lifetime stats to localStorage for returning players (succeeded)', () => {
    // Arrange

    // Act

    // Assert
    expect(gameSaveHandler()).not.toBe();
  });

});
 */
