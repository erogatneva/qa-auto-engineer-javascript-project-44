import readlineSync from "readline-sync";
import { getRandomInt, processAnswer } from "../index.js";

const isEven = (num) => {
  return num % 2 === 0 ? true : false;
};
const evenGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    let question = getRandomInt(-100, 100);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question("Your answer: ");
    let expectedAnswer = isEven(question) ? "yes" : "no";

    correctAnswers = processAnswer(
      expectedAnswer,
      userAnswer,
      correctAnswers,
      name
    );
  }

  correctAnswers === 3 ? console.log(`Congratulations, ${name}!`) : "";
};

export default evenGame;
