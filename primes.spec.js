import { generatePrimes, isPrime } from './primes';

test('Returns true for a prime', () => {
  expect(isPrime(17)).toBe(true);
});

test('Returns false for a non-prime', () => {
  expect(isPrime(4)).toBe(false);
});
