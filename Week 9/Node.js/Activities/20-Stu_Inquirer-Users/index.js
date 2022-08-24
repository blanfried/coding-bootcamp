const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your  name?',
      name: 'username',
    },
    {
      type: 'languagees',
      message: 'How many languages do you know?',
      name: 'languages',
    },
    {
      type: 'communication',
      message: 'what is your preferred method of communication?',
      name: 'communication',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
