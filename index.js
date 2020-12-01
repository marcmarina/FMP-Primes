import inquirer from 'inquirer';
import { generateFibonacci } from './helpers/fibonacci.js';
import { generatePrimes } from './helpers/primes.js';
import { generateTable, stringifyTable } from './helpers/table.js';

const main = async () => {
  try {
    const answers = await inquirer.prompt({
      type: 'input',
      name: 'size',
      message: 'How many primes do you want?',
    });

    const size = parseInt(answers.size);

    if (size < 1) {
      console.log("Can't generate a table of size lower than 1");
    } else {
      if (size === 1) console.log('A number higher than 1 is suggested');
      const primes = generateFibonacci(size);
      const table = generateTable(primes);
      console.log(stringifyTable(table)); // Showing the generated table
    }
  } catch (err) {
    console.log(err);
  }
};

main();
