import { generateTable, initialiseTable, stringifyTable } from './table';

test('generates a table of given size + 1', () => {
  expect(initialiseTable(10)).toStrictEqual([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]);
});

test('populates the table properly given a list of primes', () => {
  const expected = [
    ['', 2, 3, 5],
    [2, 4, 6, 10],
    [3, 6, 9, 15],
    [5, 10, 15, 25],
  ];
  expect(generateTable([2, 3, 5])).toStrictEqual(expected);
});

test('stringifies a table correctly', () => {
  const table = [
    ['', 2, 3, 5],
    [2, 4, 6, 10],
    [3, 6, 9, 15],
    [5, 10, 15, 25],
  ];
  const expected = `     2  3  5
  2  4  6 10
  3  6  9 15
  5 10 15 25`;

  expect(stringifyTable(table)).toStrictEqual(expected);
});
