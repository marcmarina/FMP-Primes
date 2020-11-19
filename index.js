import inquirer from 'inquirer';
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
    const primes = generatePrimes(size + 1).splice(1); // Removing the first prime, 1, as it was shown in the test instructions
    console.log(stringifyTable(generateTable(primes))); // Showing the generated table
  } catch (err) {
    console.log(err);
  }
};

main();
