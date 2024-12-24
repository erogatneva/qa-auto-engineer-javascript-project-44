import readlineSync from 'readline-sync';
import { getRandomInt, processAnswer } from '../index.js';

function getGCD(firstNumber, secondNumber) {
  let largerNumber = firstNumber;
  let smallerNumber = secondNumber;

  // Пока одно из чисел не станет равно нулю
  while (smallerNumber !== 0) {
    // Сохраняем значение меньшего числа
    const remainder = largerNumber % smallerNumber;
    // Обновляем большее и меньшее числа
    largerNumber = smallerNumber;
    smallerNumber = remainder;
  }

  // Возвращаем наибольший общий делитель
  return largerNumber;
}

const generateQuestion = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const question = `Question: ${firstNum} ${secondNum}`;

  return { firstNum, secondNum, question };
};

const gcdGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log('Find the greatest common divisor of given numbers.');
    const question = generateQuestion();
    console.log(question.question);
    const userAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = getGCD(question.firstNum, question.secondNum);

    correctAnswers = processAnswer(
      expectedAnswer,
      userAnswer,
      correctAnswers,
      name,
    );
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gcdGame;
