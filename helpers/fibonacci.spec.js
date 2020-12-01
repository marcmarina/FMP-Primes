const { generateFibonacci } = require('./fibonacci');

test('returns a correct fibonacci sequence', () => {
  const sequence = [0, 1, 1, 2, 3, 5, 8, 13];
  expect(generateFibonacci(8)).toStrictEqual(sequence);
});

test('returns an array of correct size', () => {
  expect(generateFibonacci(0).length).toBe(0);
  expect(generateFibonacci(1).length).toBe(1);
  expect(generateFibonacci(2).length).toBe(2);
});
