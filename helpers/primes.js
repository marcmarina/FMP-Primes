export const isPrime = num => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const generatePrimes = size => {
  const primes = [];

  let complete = false;
  let num = 1;
  do {
    if (primes.length === size) {
      complete = true;
    } else {
      if (isPrime(num)) primes.push(num);
      num++;
    }
  } while (!complete);

  return primes;
};
