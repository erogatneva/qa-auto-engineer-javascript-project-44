import readlineSync from "readline-sync";

const getUserName = () => {
  let name = readlineSync.question("May I have your name? ");
  return name;
};

const sayHello = () => {
  console.log("Welcome to the Brain Games!");
  console.log(`Hello, ${getUserName()}!`);
};

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const printCorrect = () => {
  console.log("Correct!");
};

const printError = (expectedAnswer, userAnswer, name) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`
  );
};

const processAnswer = (expectedAnswer, userAnswer, correctAnswers, name) => {
  if (userAnswer === expectedAnswer.toString()) {
    printCorrect();
    return correctAnswers + 1;
  } else {
    return printError(expectedAnswer, userAnswer, name);
  }
};

export {
  getUserName,
  sayHello,
  getRandomInt,
  printCorrect,
  printError,
  processAnswer,
};
