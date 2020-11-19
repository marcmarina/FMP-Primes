import { generatePrimes, isPrime } from './primes';

test('returns true for a prime', () => {
  expect(isPrime(5)).toBe(true);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(17)).toBe(true);
  expect(isPrime(1033)).toBe(true);
  expect(isPrime(4919)).toBe(true);
});

test('returns false for a non-prime', () => {
  expect(isPrime(4)).toBe(false);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(12)).toBe(false);
  expect(isPrime(1252)).toBe(false);
  expect(isPrime(1000000)).toBe(false);
});

test('returns a correct array of primes', () => {
  expect(generatePrimes(6)).toStrictEqual([1, 2, 3, 5, 7, 11]);
});
