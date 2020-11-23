export const isPrime = num => {
  if (num <= 3) return num > 1; // 2 and 3 are prime numbers, so no need to do the division

  // I am using the square root method to optimise the algorithm
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// Using 6k±1 optimisation
export const isPrime6k = num => {
  if (num <= 3) return num > 1; // 2 and 3 are prime numbers, so no need to do the division
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(num); i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

export const generatePrimes = size => {
  const primes = [2, 3];

  let complete = false;
  let num = 5;
  do {
    if (primes.length === size) {
      complete = true;
    } else {
      if (isPrime6k(num)) primes.push(num);
      num = num + 2; // I skip 2 numbers because an even number (except for 2) cannot be prime
    }
  } while (!complete);

  return primes;
};
