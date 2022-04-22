const statusHandler = require('./game-mgmt');

test('tile statuses are correct', () => {
    expect(statusHandler('webgl'.split(""), 'regex')).toStrictEqual(["-incorrect", "-correct", "-incorrect", "-present", "-incorrect"]);
})