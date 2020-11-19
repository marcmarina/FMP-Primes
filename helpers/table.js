export const generateTable = size => {
  const table = [];
  for (let i = 0; i < size + 1; i++) {
    table[i] = [];
    for (let j = 0; j < size + 1; j++) {
      table[i][j] = '';
    }
  }
  return table;
};

export const populateTable = (table, primes) => {
  // Populating the "labels"
  for (let i = 1; i < table.length; i++) {
    table[0][i] = primes[i - 1];
    table[i][0] = primes[i - 1];
  }

  // Performing the calculations
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table.length; j++) {
      table[i][j] = table[0][i] * table[j][0];
    }
  }
  return table;
};
