import { getRandomInt, processAnswer } from "../index.js";

import readlineSync from "readline-sync";

const getGCD = (first_num, second_num) => {
  let max;
  let min;
  let gcd;

  if (first_num === second_num) {
    gcd = first_num;
    return gcd;
  } else if (first_num > second_num) {
    max = first_num;
    min = second_num;
  } else {
    max = second_num;
    min = first_num;
  }

  while (max % min !== 0) {
    gcd = max % min;
    max = min;
    min = gcd;
  }

  return gcd;
};

const generateQuestion = () => {
  const first_num = getRandomInt(0, 100);
  const second_num = getRandomInt(0, 100);
  const question = `Question: ${first_num} ${second_num}`;

  return { first_num, second_num, question };
};

const gcdGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log(`Find the greatest common divisor of given numbers.`);
    const question = generateQuestion();
    console.log(question.question);
    let userAnswer = readlineSync.question("Your answer: ");
    let expectedAnswer = getGCD(question.first_num, question.second_num);

    correctAnswers = processAnswer(
      expectedAnswer,
      userAnswer,
      correctAnswers,
      name
    );
  }

  correctAnswers === 3 ? console.log(`Congratulations, ${name}!`) : "";
};

export default gcdGame;
