import { generatePrimes, isPrime, isPrime6k } from './primes';

test('returns true for a prime', () => {
  expect(isPrime6k(2)).toBe(true);
  expect(isPrime6k(3)).toBe(true);
  expect(isPrime6k(5)).toBe(true);
  expect(isPrime6k(11)).toBe(true);
  expect(isPrime6k(17)).toBe(true);
  expect(isPrime6k(1033)).toBe(true);
  expect(isPrime6k(4919)).toBe(true);
});

test('returns false for a non-prime', () => {
  expect(isPrime6k(-3)).toBe(false);
  expect(isPrime6k(1)).toBe(false);
  expect(isPrime6k(4)).toBe(false);
  expect(isPrime6k(9)).toBe(false);
  expect(isPrime6k(12)).toBe(false);
  expect(isPrime6k(1252)).toBe(false);
  expect(isPrime6k(1000000)).toBe(false);
});

test('returns a correct array of primes', () => {
  const primes = generatePrimes(20000);
  for (let num of primes) {
    expect(isPrime(num)).toBe(true);
  }
});

test('returns an array of primes of correct size', () => {
  const primes = generatePrimes(0);
  expect(primes.length).toBe(0);
});

test('returns an array of primes of correct size', () => {
  const primes = generatePrimes(1);
  expect(primes.length).toBe(1);
});
