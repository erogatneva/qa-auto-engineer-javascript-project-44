import readlineSync from "readline-sync";
import { getRandomInt, printCorrect, printError } from "../index.js";

const isEven = (num) => {
  return num % 2 === 0 ? true : false;
};

const processAnswer = (question, userAnswer, name, correctAnswers) => {
  const numIsEven = isEven(question);
  const correctAnswer = numIsEven ? "yes" : "no";

  if ((userAnswer === "yes") === numIsEven) {
    printCorrect();
    return correctAnswers + 1;
  } else {
    return printError(correctAnswer, userAnswer, name);
  }
};

const evenGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    let question = getRandomInt(-100, 100);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question("Your answer: ");

    correctAnswers = processAnswer(question, userAnswer, name, correctAnswers);
  }

  correctAnswers === 3 ? console.log(`Congratulations, ${name}!`) : "";
};

export default evenGame;
