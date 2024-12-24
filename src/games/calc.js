import { getRandomInt, processAnswer } from "../index.js";

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

const getRandomOperator = () => {
  const operators = "+-*";
  const operator = operators[getRandomInt(0, operators.length - 1)];
  return operator;
};

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
  }
};

const calcGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log(`What is the result of the expression?`);
    const question = generateQuestion();
    console.log(question.question);
    let userAnswer = readlineSync.question("Your answer: ");
    let expectedAnswer = calculate(
      question.firstOperand,
      question.secondOperand,
      question.operator
    );

    correctAnswers = processAnswer(
      expectedAnswer,
      userAnswer,
      correctAnswers,
      name
    );
  }

  correctAnswers === 3 ? console.log(`Congratulations, ${name}!`) : "";
};

export default calcGame;
