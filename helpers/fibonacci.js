export const generateFibonacci = size => {
  const sequence = [0, 1];

  if (size === 0) {
    return [];
  } else if (size === 1) {
    return [0];
  } else if (size === 2) {
    return [0, 1];
  }

  for (let i = 2; i < size; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};
