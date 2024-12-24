import { getRandomInt, processAnswer } from "../index.js";

import readlineSync from "readline-sync";

function getGCD(firstNumber, secondNumber) {
  // Пока одно из чисел не станет равно нулю
  while (secondNumber !== 0) {
      // Сохраняем значение второго числа
      const temp = secondNumber;
      // Вычисляем остаток от деления первого числа на второе
      secondNumber = firstNumber % secondNumber;
      // Первое число становится равным второму числу
      firstNumber = temp;
  }
  // Возвращаем первое число как НОД
  return firstNumber;
};

const generateQuestion = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const question = `Question: ${firstNum} ${secondNum}`;

  return { firstNum, secondNum, question };
};

const gcdGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log(`Find the greatest common divisor of given numbers.`);
    const question = generateQuestion();
    console.log(question.question);
    let userAnswer = readlineSync.question("Your answer: ");
    let expectedAnswer = getGCD(question.firstNum, question.secondNum);

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
