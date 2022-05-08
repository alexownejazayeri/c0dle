import { getAllAttemptedChars, keyGenerator } from './keyboard-mgmt';

describe('Keyboard modules', () => {
  test('take game history to array of attempted characters', () => {
    // Arrange
    const gameState = [];

    // Act

    // Assert
    expect(getAllAttemptedChars(gameState)).not.toBe();
  });

  test('generate keys', () => {
    // Arrange
    const keyArr = [];
    const attemptArr = [];
    const onClick = () => 'testing';
    const history = [];

    // Act

    // Assert
    expect(keyGenerator(keyArr, attemptArr, onClick, history)).not.toBe();
  });
});
