export const isPrime = num => {
  if (num <= 3) return true; // 1, 2 and 3 are prime numbers, so no need to do the division

  // I am using the square root method to optimise the algorithm
  for (let i = 2; i <= Math.sqrt(num); i++) {
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
