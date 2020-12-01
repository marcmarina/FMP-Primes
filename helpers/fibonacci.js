export const generateFibonacci = size => {
  const sequence = [0, 1];

  if (size < 3) return sequence.slice(0, size);

  for (let i = 2; i < size; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};
