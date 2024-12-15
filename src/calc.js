import {
  getRandomInt,
  getRandomOperator,
  printCorrect,
  printError,
} from "../src/index.js";

import readlineSync from "readline-sync";

const generateQuestion = () => {
  const firstOperand = getRandomInt(1, 9);
  const secondOperand = getRandomInt(1, 9);
  const operator = getRandomOperator();
  const question = `Question: ${firstOperand} ${operator} ${secondOperand}`;
  return {
    firstOperand: firstOperand,
    secondOperand: secondOperand,
    operator: operator,
    question: question,
  };
};

const getAnswer = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
  }
};

const processAnswer = (userAnswer, expectedAnswer, name, correctAnswers) => {
  if (userAnswer === expectedAnswer.toString()) {
    printCorrect();
    return correctAnswers + 1;
  } else {
    printError(expectedAnswer, userAnswer, name);
    return correctAnswers > 0 ? correctAnswers - 1 : 0;
  }
};

const calcGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log(`What is the result of the expression?`);
    const question = generateQuestion();
    console.log(question.question);
    let userAnswer = readlineSync.question("Your answer: ");
    let expectedAnswer = getAnswer(
      question.firstOperand,
      question.secondOperand,
      question.operator
    );

    correctAnswers = processAnswer(
      userAnswer,
      expectedAnswer,
      name,
      correctAnswers
    );
  }

  console.log(`Congratulations, ${name}!`);
};

export default calcGame;
