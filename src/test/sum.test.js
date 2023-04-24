const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});

test('adds 40 + 32 to equal 72', () => {
    const result = sum(40, 32);
    expect(result).toBe(72);
});