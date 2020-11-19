import inquirer from 'inquirer';

const func = async () => {
  try {
    const answers = await inquirer.prompt({
      type: 'input',
      name: 'size',
      message: 'How many primes do you want?',
    });
  } catch (err) {
    console.log(err);
  }
};

func();
