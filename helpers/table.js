export const initialiseTable = size => {
  const table = [];
  for (let i = 0; i < size; i++) {
    table[i] = [];
    for (let j = 0; j < size; j++) {
      table[i][j] = '';
    }
  }
  return table;
};

export const generateTable = primes => {
  const size = primes.length + 1;
  const table = initialiseTable(size);

  // Populating the "labels"
  for (let i = 1; i < size; i++) {
    table[0][i] = primes[i - 1];
    table[i][0] = primes[i - 1];
  }

  // Performing the calculations
  for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
      table[i][j] = table[0][i] * table[j][0];
    }
  }
  return table;
};

export const stringifyTable = table => {
  const padSize = `${table[table.length - 1][table.length - 1]}`.length + 1; // Length of the longest number + 1
  const leftPadSize = `${table[table.length - 1][0]}`.length; // Length of the number in the bottom-left corner

  let result = '';
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      const addition = `${table[i][j]}`.padStart(
        j === 0 ? leftPadSize : `${table[table.length - 1][j]}`.length + 1,
        ' '
      );
      result += addition;
    }
    if (i < table.length - 1) result += '\n'; // If it's the last row no line break is needed
  }
  return result;
};
