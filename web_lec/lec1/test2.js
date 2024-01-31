const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Привет, введите что-нибудь: ", (answer) => {
  rl.write("Вы ввели: " + answer + "\n");
});