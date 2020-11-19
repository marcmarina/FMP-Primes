import inquirer from 'inquirer';
import { generatePrimes } from './helpers/primes.js';
import { generateTable, stringifyTable } from './helpers/table.js';

const func = async () => {
  try {
    const answers = await inquirer.prompt({
      type: 'input',
      name: 'size',
      message: 'How many primes do you want?',
    });

    const size = parseInt(answers.size);
    const primes = generatePrimes(size + 1).splice(1);
    console.log(stringifyTable(generateTable(primes)));
  } catch (err) {
    console.log(err);
  }
};

func();
